a = [{
    a:"rj",
    b:5
},
{
    c:"pj",
    d:4
},
4,
"rj"
];
b = [{
    e:"from another array",
    f:7275158108,
    g: true 
}];
let c = [...a , ...b];

c.map((data,index)=>{console.log(data);})