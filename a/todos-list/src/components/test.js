const a ={
    tittle : "rj",
    name : ['a','b','c'],
    show(){
        b = {
            lastName : "yadav",
            pc : "dell"
        }
        function a(){
      console.log(this);
        }  
        a();
    },
    arrow : ()=>{
        console.log(this.name);
    }
}
a.show();