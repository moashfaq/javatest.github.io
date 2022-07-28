function nospace(str){
    const arr= str.split(" ");

    let newarr= [];

    for (let i=0; i <arr.length;i++){
        const trimmedString= arr[i].trim();
        newarr.push(trimmedString);

    }
    const finalString=newarr.join("");
    return finalString; 
}
console.log(nospace("hello my name is ashfaq"));