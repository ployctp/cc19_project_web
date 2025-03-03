import React,{useState, useEffect} from 'react'
import useEcomStore from '../store/ecom-store'
import { currentUser } from '../api/auth'
import LoadingToRedircet from './LoadingToRedircet'

const ProtectRouteUser = ({ element }) => {
    const [ok, setOk] = useState(false)
    const user = useEcomStore((state)=> state.user)
    const token = useEcomStore((state)=> state.token)
   

  useEffect(()=>{
      if(user && token){
        currentUser(token)
        .then((res)=>setOk(true))
        .catch((err)=>setOk(false))
      }
  },[])

  return ok ? element:<LoadingToRedircet />
}

export default ProtectRouteUser