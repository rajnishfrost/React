import React, { useState } from 'react'

export const AddTodo = (props) => {
    const s ={
        height : "80px"
    }
    // const [tittle, setTittle] = useState("");
    // const [desc, setDesc] = useState("");
    const [a, setTittle] = useState({
        tittle :"",
        desc : ""
    });

    const rj  = (e)=>{
        setTittle((p)=>({...p ,[e.target.name] : e.target.value , }));
       
    }
    const submit =(e)=>{
        e.preventDefault();
        if(!a.tittle || !a.desc){
            alert("Tittle And Description Can Not Be Empty");
        }
        else{
            props.addTodo(a.tittle , a.desc);
        }
    }
    console.log(a);
    return (
        <>
        <div  className="container">
            <h3> Add Todos</h3>
            <form >
                <div className="mb-3">
                    <label htmlFor="tittle" className="form-label">Tittle</label>
                    <input type="text" className="form-control" name='tittle' onChange={(e)=>rj(e)} id="Tittle" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" name='desc' onChange={(e)=>rj(e)} id="Description" style={s}/>
                </div>
                <button className="btn btn-success btn-sm" onClick={submit}>Add Todo</button>
            </form>
        </div>
        </>
    )
}
