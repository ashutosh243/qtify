import React from 'react'
import Card from '../card/Card'
import Style  from './section.module.css';

const Section=()=>{
  return(<>
    <div className={Style.sections}>
          <Card></Card>
    </div>
  </>);
}

export default Section