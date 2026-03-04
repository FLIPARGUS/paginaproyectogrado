from __future__ import annotations

import os
import socket
import subprocess
import threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

import streamlit as st
import streamlit.components.v1 as components


PROJECT_DIR = Path(__file__).resolve().parent
DIST_DIR = PROJECT_DIR / "dist"


def _build_react_app_if_needed() -> None:
    index_file = DIST_DIR / "index.html"
    if index_file.exists():
        return

    st.info("No se encontro 'dist/'. Ejecutando 'npm run build'...")
    npm_cmd = "npm.cmd" if os.name == "nt" else "npm"
    try:
        result = subprocess.run(
            [npm_cmd, "run", "build"],
            cwd=PROJECT_DIR,
            capture_output=True,
            text=True,
            check=False,
        )
    except FileNotFoundError:
        st.error("No se encontro npm. Instala Node.js para poder ejecutar el build de Vite.")
        st.stop()

    if result.returncode != 0:
        st.error("Fallo el build de Vite. Revisa el detalle abajo.")
        st.code((result.stdout or "") + "\n" + (result.stderr or ""), language="bash")
        st.stop()

    if not index_file.exists():
        st.error("El build termino, pero no se encontro 'dist/index.html'.")
        st.stop()


def _find_free_port() -> int:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.bind(("127.0.0.1", 0))
        return int(sock.getsockname()[1])


class SPAHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIST_DIR), **kwargs)

    def do_GET(self):  # noqa: N802
        requested_path = urlparse(self.path).path
        full_path = (DIST_DIR / requested_path.lstrip("/")).resolve()
        dist_root = DIST_DIR.resolve()

        try:
            full_path.relative_to(dist_root)
            path_outside_dist = False
        except ValueError:
            path_outside_dist = True

        missing_file = not full_path.exists()

        if requested_path == "/" or path_outside_dist or missing_file:
            self.path = "/index.html"

        return super().do_GET()

    def log_message(self, format, *args):  # noqa: A003
        return


@st.cache_resource
def _start_static_server() -> str:
    port = _find_free_port()
    server = ThreadingHTTPServer(("127.0.0.1", port), SPAHandler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    return f"http://127.0.0.1:{port}"


st.set_page_config(page_title="Bogota Mobility Risk Data Analysis", layout="wide")
st.title("Bogota Mobility Risk Data Analysis")

_build_react_app_if_needed()
app_url = _start_static_server()

components.iframe(app_url, height=900, scrolling=True)
