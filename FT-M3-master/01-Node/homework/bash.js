//Ejemplo 1

// const commands = require('./commands');

// // Output un prompt
// process.stdout.write('prompt > '); //para hacer un 'console.log'
// // El evento stdin 'data' se dispara cuando el user escribe una línea
// process.stdin.on('data', function (data) {
//   var cmd = data.toString().trim(); // remueve la nueva línea
//   if(cmd === 'date') {
//     process.stdout.write(Date());  
//   }
//   if(cmd === 'pwd') {
//     process.stdout.write(process.cwd()); //process.cwd() me da la ruta donde estoy parado
//   }
//   process.stdout.write('\nprompt > ');
// });

// Ejemplo 2 

const command = require('./commands');

const done = function(output) {
     process.stdout.write(output);
     process.stdout.write('\nprompt > ')
}

process.stdout.write('prompt > ');
// Evento
process.stdin.on('data', function(data) {
    var args = data.toString().trim().split(' ');
    var cmd = args.shift(); //Aqui me quedo con cmd que es el comando 
    if (command.hasOwnProperty(cmd)) { // no se usa return para que siga ejecutando, de lo contrario no me muesta la ultima linea
     //     command[cmd](args);
          command[cmd](args, done);
    } else {
         process.stdout.write('Command not found');
    }
//     process.stdout.write('\nprompt > ');
}); 