import { useState } from "react";

function Counter({btnstyle}) {
  
  
  const [count,setcount]=useState(0);
  const [isValid,setisvalid]=useState(true);
  const [inputvalue,setinputvalue] = useState('')

  const increment =()=>setcount(count+1);
  const decrement =()=>setcount(count-1);
  const handleinput =(e)=>{
    setinputvalue(e.target.value)
    // if(e.target.value+count>1000)
    //   {
    //     setisvalid(false)
    //     return
    //   }
    // else{
    //   setcount(e.target.value+count)
    //   setisvalid(true)
    // }
  };

  const handlesubmit =()=>{
    setcount(inputvalue*count)
  }

  return (
    <>
      <div className='counter-container'>
          <h1 className="h1">Counter</h1>
          <h4 className='h4'>{count}</h4>
          <div style={btnstyle}>
              <button className='btn' onClick={increment}>+</button>
              <button className='btn' onClick={decrement}>-</button>
          </div>
          <input onChange={handleinput} type="number"/>
          {
            !isValid && <p>number above 1000 is not allowed {count}</p>
          }
      </div>
    </>
  )
}

export default Counter