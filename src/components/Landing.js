import React from 'react'
import { useState } from 'react'
import loading from "../images/loading.gif"
import { useEffect } from 'react'
import api from '../services/Api'
import Coins from './Coins'
function Landing() {
    const [search,setSearch]=useState("")
    const [coins,setCoins] = useState ([])
    const searchHandler=(event)=>{
            setSearch(event.target.value)
    }
    useEffect(()=>{
    const fetchApi =async()=>{
        const data= await api()
        setCoins(data)
        console.log(data)
    }
    fetchApi()
    },[])
  return (   
    <>
    {coins.length ?
    <div>

        <input type="text" value={search} placeholder='Search' onChange={searchHandler}  />
      
      
         {coins.map((coin)=>
            coin.name.toUpperCase().match(search.toUpperCase()) &&
                <Coins key={coin.id} data={coin}/>
            )
       }</div> :

       <h1><img src={loading} alt="load"/></h1>
    

    }
   
</>    
  )
}

export default Landing