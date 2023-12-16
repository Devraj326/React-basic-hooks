// import { useState } from "react";
// import "../App.css"

// function UseState(){
//   const [currAge,setAge] = useState(19);
  
//   const handleAge = ()=>{
//     setAge(currAge+1);
//   }

//   return (
//     <div>
//       <h3>My Current Age is {currAge}</h3>
//       <button onClick={handleAge}>Get Older</button>
//     </div>
//   );
// }

// export default UseState;

//Progression 2

// import { useState } from "react";
// import "../App.css"

// function UseState(){
//   const [currAge,setAge] = useState(19);
//   const [currSib, setSib] = useState(1);
  
//   const handleAge = ()=>{
//     setAge(currAge+1);
//   }

//   const handleSib = ()=>{
//     setSib(currSib+1);
//   }


//   return (
//     <div>
//       <h3>My Current Age is {currAge}</h3>
//       <h4>My siblings {currSib}</h4>

//       <button onClick={handleAge}>Get Older</button>
//       <button onClick={handleSib}>Get more Sib</button>
//     </div>
//   );
// }

// export default UseState;

//Progression 3

// import { useState } from "react";
// import "../App.css"


// function UseState(){

//   const [state, setState] = useState({age:19, siblings:3});

//   const handleState = (val)=>{
  
//     setState({
//       ...state,[val]:state[val]+1
//     })
//   }

//   const {age,siblings} = state;

//   return(
//     <div>
//       <h3>My Current Age is {age}</h3>
//       <h4>My siblings {siblings}</h4>
//       <button onClick={()=>{handleState("age")}}>age</button>
//       <button onClick={()=>{handleState("siblings")}}>sib</button>
//     </div>
//   )

// }

// export default UseState;

//Progression 4

// import { useState } from "react";
// import "../App.css"


// function UseState(){

//   const [currAge, setAge] = useState(19);
//   const [currSib, setSib] = useState(3);

//   return(
//     <div>
//       <h3>My Current Age is {currAge}</h3>
//       <h4>My siblings {currSib}</h4>

//       <button onClick={()=>setAge(currAge=>currAge+1)}>age</button>
//       <button onClick={()=>setSib(currSib=>currSib+1)}>sib</button>
//     </div>
//   )

// }

// export default UseState;

//Progression 5

// import { useState } from "react";
// import { useEffect } from "react";

// function UseState(){

//   const [currAge, setAge] = useState(19);
//   const [currSib, setSib] = useState(3);

//   useEffect(()=>{
//     alert(`something changed ${currAge}`)
//   },[currAge])

//   return(
//     <div>
//       <h3>My Current Age is {currAge}</h3>
//       <h4>My siblings {currSib}</h4>

//       <button onClick={()=>setAge(currAge=>currAge+1)}>age</button>
//       <button onClick={()=>setSib(currSib=>currSib+1)}>sib</button>
//     </div>
//   )

// }


// export default UseState;

//task


import React, { useState } from "react";
import { useEffect } from "react";

function NewUseState(props){
  
    const [state, setState] = useState(" ");
    const [like, setLike] = useState(0);
  
    const handleState = ()=>{
      setState(state=>state==" "?props.para:" ")
    }
  
    const handleLike = ()=>{
      setLike(like=>like+1)
    }
  
    useEffect(()=>{
      alert("Content Button Clicked");
    },[state])
  
  
    return(
      <div>
        <h3>{state}</h3>
        <button onClick={handleState}>Content</button>
        <h4>{like}</h4>
        <button onClick={handleLike}>Like</button>
      </div>
    )
  
  }
  
  
  export default NewUseState;

