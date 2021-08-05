exports.greet = function(){
    console.log('on mutating the obj it works');
}


// module.exports and exports point to same object in memory assinging the exports it dosen't work just mutate the export object so we are not creating a new object instead modifing the same object