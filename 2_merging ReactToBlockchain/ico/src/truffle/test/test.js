
const a = (Date.now());
object = {
    dev: 6,
    ved: 5, 
}
objArr = {
    dev: [],
    ved: [],
}
for (ii = 0; ii < object.dev; ii++) {
    objArr.dev.push("dev")
    if(object.ved!=0){
        objArr.ved.push("ved");
        object.ved--;
    }
}
b =(Date.now());
b = b - a ;
console.log(b);
setInterval(abc() ,1000);
function abc(){
document.getElementById("root").innerHTML = "devid";
}
abc();
