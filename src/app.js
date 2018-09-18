var http = require('http'),
    https = require('https'),
    fs = require('fs'),
    url = require('url'),
    path = require('path');

const mimeTypes = {
    '.js': { mime: 'text/javascript' },
    '.html': { mime: 'text/html' },
    '.css': { mime: 'text/css' },
    '.svg': { mime: 'image/svg+xml'  },
    '.jpg': { mime: 'image/jpeg', encode: 'binary' },
    '.png': { mime: 'image/png', encode: 'binary'  },
    '.gif': { mime: 'image/gif', encode: 'binary'  },
    '.ico': { mime: 'image/x-icon', encode: 'binary'  },
    '.ttf': { mime: 'application/x-font-ttf', encode: 'binary'  },
    '.map': { mime: 'application/json', encode: 'binary'  }
};

console.log('app start');
http.createServer(function(request, response) {
    let pathName = url.parse(request.url).path;
    if (pathName == '/')
        pathName = path.resolve(__dirname, '..', 'dist', 'index.html');

    const extName = path.extname(pathName); // file extension
    const mimeType = mimeTypes[extName];
    const filePath = pathName.substring(1, path.length);

    if (mimeType && mimeType.encode) {
        let img = fs.readFileSync(path.join(__dirname, pathName));
        response.writeHead(200, {"Content-Type": mimeType});
        response.end(img, mimeType.encode);
    } else if (mimeType) {
        fs.readFile(path.join(__dirname, filePath), 'utf8', function(err, data) {
            if (err)
                throw err;
            else {
                response.writeHead(200, {"Content-Type": mimeType.mime});
                if (mimeType.encode)
                    response.end(data, mimeType.encode);
                else
                    response.end(data);
            }
        });
    }
}).listen(3000);