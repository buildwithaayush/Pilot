// import { useEffect, useState } from "react";

// export default function Hello(){
//     const [num , setNum ] = useState(0)

// useEffect(()=>{

// },[])
//     return(<>
//         <div>
//             {num}
//         </div>
//     </>)
// }

//lets see how children prop works 
//so basically we use children props to show dynamic data with pre-structured component
'use client'
type Cardprops = {
    children : React.ReactNode;
    message: string
}

export default function Card({children , message}:Cardprops){
    const handleClick =()=>{
        alert(message)
    }
    return(<>
    <div className="bg-slate-100 rounded-md text-xl w-96 p-10 m-5">{ children }</div>
     <button onClick={handleClick}>Click for message</button>
    </>)
}
