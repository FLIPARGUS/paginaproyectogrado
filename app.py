from __future__ import annotations

import socket
import threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

import streamlit as st
import streamlit.components.v1 as components


PROJECT_DIR = Path(__file__).resolve().parent
DIST_DIR = PROJECT_DIR / "dist"


def _require_prebuilt_dist() -> None:
    index_file = DIST_DIR / "index.html"
    if index_file.exists():
        return

    st.error("No se encontro 'dist/index.html'.")
    st.info("Esta version de app.py no ejecuta npm automaticamente.")
    st.code(
        "Ejecuta una vez en esta carpeta:\n"
        "npm install\n"
        "npm run build\n\n"
        "Luego ejecuta:\n"
        "streamlit run app.py",
        language="bash",
    )
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

_require_prebuilt_dist()
app_url = _start_static_server()

components.iframe(app_url, height=900, scrolling=True)
