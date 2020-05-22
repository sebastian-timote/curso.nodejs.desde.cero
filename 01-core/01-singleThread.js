'use strict';

function singleThread() {
    //el atributo argv de node las dos primeras  posiciones son:
    //process.argv[0] -> directorio de node
    //process.argv[1] ->directorio actual
    process.argv[2] = 'estamos aprendiendo Node.js'
    process.argv[3] = 19;
    process.argv[4] = null;
    process.argv[5] = true;
    console.log('-------------------------------------------');
    console.log('Id del proceso............' + process.pid);
    console.log('titulo....................' + process.title);
    console.log('Directorio de node........' + process.execPath);
    console.log('Directorio actual.........' + process.cwd());
    console.log('version de node...........' + process.version);
    console.log('versiones dependencias....' + process.versions);
    console.log('plataforma (S.O)..........' + process.platform);
    console.log('arquitectura (S.O)........' + process.arch);
    console.log('tiempo activo de node.....' + process.uptime());
    console.log('argumentos del proceso....' + process.argv);
    console.log('---------------------------------------------');
    
    let key =0;
    for (key in process.argv) {
        console.log(process.argv[key]);
        
    }
}
singleThread();