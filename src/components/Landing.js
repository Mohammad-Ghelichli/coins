import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import api from '../services/Api'
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
                <p key={coin.id}> <img src={coin.image} width={60} alt="f"/>{coin.name}</p> 
            )
       }</div> :

       <h1>loading...</h1>
    

    }
   
</>    
  )
}

export default Landing