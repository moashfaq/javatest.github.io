function isdiv(n, x, y){
    const result1=n / x;
    const result2=n / y;

    if(result1 % 1 === 0 && result2 % 1 === 0){
        return "true";
    } else{
        return "false"
    }
}

console.log(isdiv(["346,726,18"]));