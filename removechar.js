function removechar(str){
    const lenghtOfString= str.length;
    return str.substr(1,lenghtOfString-2);
}

console.log(removechar("hello"),"world")