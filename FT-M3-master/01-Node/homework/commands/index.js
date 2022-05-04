// lo que está comentado se hizo una refactorización de codigo y hay comentarios

// Funciona con ejemplo 2 
const fs = require('fs');
const request = require('request');

module.exports = {
    date: function (args, done) { 
      // process.stdout.write(Date());
      done(Date());
     },

    pwd: function (args, done) { 
      // process.stdout.write(process.cwd()); 
      done(process.cwd());
    },

    ls: function (args, done) { 
      fs.readdir('.', function(err, files) { //'.' => PATH => significa en esta carpeta // files son los archivos y los pasa como array
        if (err) throw err;
        var out = '';
        files.forEach(function(file) { // Recorre files y hace una callback recibiendo cada archivo
          // process.stdout.write(file.toString() + "\n");
          out = out + file + '\n';
        })
        // process.stdout.write("prompt > ");
        done(out);
      });
    },

    echo: function (args, done) { 
      // process.stdout.write(args.join(' '));
      done(args.join(' '));
    },

    cat: function (file, done) { // muestra todo el contenido de un archivo
      fs.readFile(file[0], 'utf8', function (err, data){ // 1er: nombre archivo, 2do: codificacion, 3er: callback
        if(err) throw err;
        // process.stdout.write(data);
        // process.stdout.write('\nprompt >');
        done(data);
      });
    },

    head: function (file, done) { // muestra las primeras 10 lineas de un archivo
      fs.readFile(file[0], 'utf8', function (err, data){ // 1er: nombre archivo, 2do: codificacion, 3er: callback
        if(err) throw err;
        const lines = data.split('\n').slice(0, 9).join('\n'); // en lines me guardo las primeras 10 lineas con slices
        // process.stdout.write(lines);
        // process.stdout.write('\nprompt >');
        done(lines);
      });
    },

    tail: function (file, done) { // muestra las primeras 10 lineas de un archivo
      fs.readFile(file[0], 'utf8', function (err, data){ // 1er: nombre archivo, 2do: codificacion, 3er: callback
        if(err) throw err;
        const lines = data.split('\n').slice(-10).join('\n'); // slices cuenta de atras hacia arriba cuando recibe numero negativo -> cuenta desde la ultima, 10 para arriba
        // process.stdout.write(lines);
        // process.stdout.write('\nprompt >');
        done(lines);
      });
    },

    curl: function(url, done) { // en args (en este caso url) siempre recibo un arreglo por eso [0]
      request(url[0], function(err, response, body) { // me trae el codigo fuente de la página -> hace como un get a la url
        if(err) throw err;
        // process.stdout.write(body);
        // process.stdout.write('\nprompt >');
        done(body);
      });
    }

}