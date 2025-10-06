import React from 'react'
import Style from './card.module.css';
import Chip from '@mui/material/Chip';

const Card = ({ img, follow, title }) => {

  return <>

      <div className={Style.card}>
        <div className={Style.imgContainer}>
          <img src={img} alt="" />
        </div>
        <div className={Style.infoContainer}>
          <Chip label={follow} sx={{
            backgroundColor: 'black',
            color: 'white'
          }} /> 
        </div>
        <p style={{color:'white'}}>{title}</p>
      </div>
  </>
}
export default Card;