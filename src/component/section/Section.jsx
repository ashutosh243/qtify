import React from 'react'
import Card from '../card/Card'
import Style from './section.module.css';
import { useState } from 'react';



const Section = ({ heading, data }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleAlbums = showAll ? Array.from(data) : Array.from(data).slice(0,7);

  return (<>
    <div className={Style.sections}>
      <div className={Style.heading}>
        <p>{heading}</p>
        <div>

          <button
            className={Style.toggleBtn}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Collapse' : 'Show all'}
          </button>

        </div>
      </div>
      <div className={Style.container}>
        {Array.from(visibleAlbums)?.map((album) => { return <Card key={album.id} img={album.image} follow={album.follows}></Card> })}
      </div>
    </div>
  </>);
}

export default Section