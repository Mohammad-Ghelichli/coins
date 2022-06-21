import React from 'react'
import styles from './Coins.module.css'
function Coins(props) {
    const{name,id,image,current_price,price_change_percentage_24h,symbol}=props.data
  return (
    <div className={styles.container}>
        
        <img src={image} width={80} alt="lo" />
        <span>{name}</span>
        
        <span>{symbol}</span>
        <span>{current_price}</span>
        { price_change_percentage_24h>0 ?
        
        <span className={styles.green}>{price_change_percentage_24h}</span> :
        <span className={styles.red}>{price_change_percentage_24h}</span>
    }

        

    </div>
  )
}

export default Coins