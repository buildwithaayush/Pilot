'use client'
import { useEffect,useState } from "react"

export default function CurrentDateTime(){
    const[now,setNow] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date())
        },1000)
        return () => clearInterval(interval)
    },[])

    return (
    <div className="text-sm text-gray-500">
        {now.toLocaleString()}
    </div>
)
}


