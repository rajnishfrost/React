
        let name = "GFG";

    let gfg1 = () => {
        console.log("hello " + this.name); // no 'this' binding here
    }
    
    function gfg2(){
        let name ="abhat";       
        console.log("Welcome to " + this.name); // 'this' binding works here
    }  

    
gfg2();
if(1>2)
console.log("abhy");
else
console.log("rajnish");