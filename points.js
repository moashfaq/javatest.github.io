function points(gamesarr){
    let tpoints=0;

    for(let i=0; i<gamesarr.length;i++){
        const value=gamesarr[i];
        const parts=value.split(":");

        const x=parts[0];
        const y=parts[1];
if(x>y){
    tpoints=tpoints+3;

}else if (x===y){
tpoints+=1;
}
}
return tpoints;
    }
console.log(points(['4:5','2:3']),(['1:0','2:0']));