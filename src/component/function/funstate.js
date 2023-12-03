import React, { useState } from 'react'

const Funstate=()=>{
    const [name,setname]=useState("Reshmi")
    
    const changename=()=>{
        setname("Preetha")
    }
    return(
        <div>
            <p>1.update name using state</p>
            <h4>Name : {name}</h4>
            <button onClick={changename}>Change Name</button>
        </div>
    )
}

export default Funstate