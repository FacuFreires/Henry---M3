var fs  = require("fs")
var http  = require("http")

// Escribí acá tu servidor
//  ----> /arcoiris_doge -----> img 
http.createServer(function(req, res){
   fs.readFile(`./images${req.url}.jpg`, function(err, data){ //interpolar la url
      if (req.url === '/'){ //Home
         res.writeHead(200, {'Content-Type':'text/plain'});
         res.end('Esciba la imagen que quiere mostrar en la url');
      }
      else if(err){ // error handler
         res.writeHead(404, { 'Content-Type':'text/plain'});
         res.end('Image not found');
      } else { //lo que se muestra
         res.writeHead(200, { 'Content-Type':'image/jpeg'});
         res.end(data);
      }
   })
}).listen(3000, '127.0.0.1')

