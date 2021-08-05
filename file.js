const fs = require('fs');

let file_name = 'file.txt';
let write_file = 'write.txt';
let file_size = fs.statSync(file_name).size;
// let buffer = Buffer.alloc(file_size);
let writeString = 'The write string is written!..\n';
let buffer = Buffer.from(writeString,'utf8');
let dir = 'folder';
let dirName = {
    sync : 'syncDir',
    async : 'asyncDir'
}
// fs.open(file_name,'r+',(err,fd)=>{
//     if(err){
//         console.log(`Error is ${err}`)
//     }else{
//         console.log(`File Data is ${fd}`);
//         // let byte = fs.readSync(fd,buffer,0,file_size,0);
//         // let content = buffer.toString();
//         fs.read(fd,buffer,0,file_size,0,(err,bytes)=>{
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log(`Bytes : ${bytes}`);
//                 console.log(`Content : ${buffer.toString()}`)
//             }
//         })
//         fs.close(fd,(err)=>{
//             console.log('File Closed');
//         })
//     }
// })

// let statsAsync = fs.stat(file_name,(err,stats)=>{
//     if(err){
//         console.log(`Error ${err}`);
//     }else{
//         console.dir(stats,{color:true})
//     }
// })


// let data = fs.readFileSync(file_name,{encoding:'utf8'});
// console.log(data);

// fs.readFile(file_name,(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(`Content : ${data.toString()}`)
//     }
// });

// fs.open(write_file,'a',(err,fd)=>{
//     if(err){
//         console.log(`Error : ${err}`)
//     }else{
//        // let bytes = fs.writeSync(fd,writeString)
//        fs.write(fd,writeString,(err,bytes)=>{
//            if(err){
//                console.log(`Error in File Writing : ${err}`)
//            }else{
//                console.log(`Bytes written ${bytes}`)
//            }
//        })
//     }
// })

// fs.open(write_file,'a',(err,fd)=>{
//     if(err){
//         console.log(`Error : ${err}`)
//     }else{
//         //let bytes = fs.writeSync(fd,buffer,0,buffer.byteLength,0);
//         //console.log(bytes.toString());
//         fs.write(fd,buffer,0,buffer.byteLength,0,(err,data)=>{
//             if(err){
//                 console.log(`Error in writing file ${err}`);
//             }else{
//                 console.log(`Data ${data}`);
//             }
//         })
//     }
// })


//fs.writeFileSync(write_file,writeString,{flag:'a'});
// fs.writeFile(write_file,writeString,{flag:'a'},(err)=>{
//     if(err){
//         console.log(`Error ${err}`)
//     }else{
//         console.log('File is written sucessfully')
//     }
// })

// let bytes = fs.readdirSync(dir,{encoding:'utf8'});
// console.log(bytes.toString());

// fs.readdir(dir,{encoding:'utf8'},(err,files)=>{
//     if(err){
//         console.log(`Error : ${err}`);
//     }else{
//         console.log(`Content : ${files}`);
//     }
// })

function printBoom(){
    console.log('Boom');
}

// fs.mkdirSync(dirName.sync);
// fs.writeFileSync(`${dirName.sync}/file.js`,`(${printBoom.toString()}())`)

// fs.mkdir(dirName.async,(err)=>{
//     if(err){
//         console.log(`Error : ${err}`)
//     }else{
//         console.log(`Folder Created`);
//         fs.writeFileSync(`${dirName.async}/file.js`,`(${printBoom.toString()})()`);
//     }
// })

// let options = {
//     highWaterMark : 30,//,start :90,end:149
//     encoding:'utf8'
// }

// let read = fs.createReadStream('./folder/read.txt',options);
// read.on('string',(data)=>{
//     console.log(`Data : ${data}`);
// });
// read.on('data',(data)=>{
//     if(data.indexOf('read')  === -1){
//         console.log(data)
//     }else{
//         read.emit('string',data);
//         console.log(data.toUpperCase())
//     }
// })


// let write = fs.createWriteStream('./folder/write.txt');

// let data = "Created a write Stream and writing the data to file";

// write.write(data,(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('stream writen');
//     }
// });


let rstream = fs.createReadStream('./folder/read.txt',{highWaterMark:30});
let wstream = fs.createWriteStream('./folder/write.txt');

// rstream.on('data',(data)=>{
//     wstream.write(data.toString().toUpperCase(),(err)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log('written sucessfully');
//         }
//     })
// })

rstream.pipe(wstream);


