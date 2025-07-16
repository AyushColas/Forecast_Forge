import React,{useState} from 'react'

const Working = () => {
  const [add, setadd] = useState("");
  
  const addcontent = ()=>{
    
    
    };
   


    return (
    <>
    <div className="heading">
        <h1>Todolist</h1>
    </div>
    <div className="info">
        <input type="text" value={add}  onChange={(e)=>setadd(e.target.value)} />
        <button name='add' className='add' onClick={addcontent}>
            add
        </button>
        
        <button>
            remove
        </button>
        
    </div>
    
    
        
        
    
    
    </>
  )
}

export default Working