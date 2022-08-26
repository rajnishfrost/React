array = ["Hello  My    Name Is Peter Parker I Am Friend Of Iron Man"]
let filtered = array.filter(abc);

function abc (d , i , a){
d=d.split(/\W+/);
console.log(d[0]);
}