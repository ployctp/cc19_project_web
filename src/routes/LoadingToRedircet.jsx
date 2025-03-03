import React, { useEffect, useState} from 'react'
import { Navigate } from 'react-router'

const LoadingToRedircet = () => {
    const[count, setCount] = useState(3)
    const[redirect, setRadirect] = useState(false)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((currentCount)=>{
                if(currentCount===1){
                    clearInterval(interval)
                    setRadirect(true)
                }
                return currentCount - 1
            })
        },1000)
        return ()=> clearInterval(interval)
    },[])
    if(redirect){
        return <Navigate to={'/'} />
    }
  return (
    <div>No Permission, Redirect in{count}</div>
  )
}

export default LoadingToRedircet