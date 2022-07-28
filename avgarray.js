function avg(arr){
    var sum=0;

    for(let i=0; i<arr.length;i++){
        sum +=arr[i];
    }
    return sum/arr.length;
}
 
console.log(avg([1,4,7]),4);
console.log(avg([10,5]),7.5);
console.log(avg([1.5,3,2.5,1]),2);

