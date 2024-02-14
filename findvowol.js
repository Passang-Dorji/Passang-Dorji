function getumberofvowol(string){
    const vowol=("aeiou")
    var count=0
    for (var i=0;i< string.length;i++){
        if(vowol.includes(string[i])){
            count+=1
        }
        
    }return count
}
console.log(getumberofvowol("hello guys"))