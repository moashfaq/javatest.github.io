
function getavg(scoreArray){

count =scoreArray.length;
let sum=0;

for(let i=0;i<count;i++){
    sum=sum+scoreArray[i];
}
return Math.floor(sum/count);
}
console.log(getavg([61.8747]));