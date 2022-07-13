import React, { useState } from 'react'

export const AddTodo = (props) => {
    const styleCSS={
        height:"300px",
        width:"500px",
        marginLeft:"40%"
    }
    const s ={
        height : "80px"
    }
    const [tittle, setTittle] = useState("");
    const [desc, setDesc] = useState("");
    const submit =(e)=>{
        e.preventDefault();
        if(!tittle || !desc){
            alert("Tittle And Description Can Not Be Empty");
        }
        else{
            props.addTodo(tittle , desc);
        }
    }
    return (
        <>
        <div  className="container">
            <h3> Add Todos</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="tittle" className="form-label">Tittle</label>
                    <input type="text" className="form-control" value={tittle} onChange={(e)=>{setTittle(e.target.value)}} id="Tittle" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="Description" style={s}/>
                </div>
                <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
            </form>
        </div>
        </>
    )
}
