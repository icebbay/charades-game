from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        return super().end_headers()

    def do_GET(self):
        # 设置正确的MIME类型
        if self.path.endswith('.js'):
            self.send_header('Content-type', 'application/javascript')
        elif self.path.endswith('.css'):
            self.send_header('Content-type', 'text/css')
        elif self.path.endswith('.png'):
            self.send_header('Content-type', 'image/png')
        elif self.path.endswith('.jpg') or self.path.endswith('.jpeg'):
            self.send_header('Content-type', 'image/jpeg')
        return super().do_GET()

if __name__ == '__main__':
    port = 3000
    print(f'启动服务器在端口 {port}...')
    print(f'请在浏览器中访问: http://localhost:{port}')
    print('按 Ctrl+C 停止服务器')
    
    server = HTTPServer(('', port), CORSRequestHandler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\n关闭服务器...')
        server.server_close() 