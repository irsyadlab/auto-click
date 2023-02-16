export function rand(min, max){
    if(min == 0){
        return Math.floor((Math.random() * max) + 0);
    }else{
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
