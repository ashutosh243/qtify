import React from 'react'
import Card from '../card/Card'
import Style from './section.module.css';
import { useState } from 'react';


const Section = ({ heading, data }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleSongs = showAll ? data?.songs : data?.songs?.slice(0, 6);
  console.log(visibleSongs);
  return (<>
    <div className={Style.sections}>
      <div className={Style.heading}>
          <p>{heading}</p>
          <div>
          {
            data?.songs?.length > 4 && (
              <button
                className={Style.toggleBtn}
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? 'Collapse' : 'Show all'}
              </button>)
          }
          </div>
      </div>
      <div className={Style.container}>
        {visibleSongs?.map((song) => { return <Card key={song.id} img={song.image} follow={data.follows}></Card> })}
      </div>
    </div>
  </>);
}

export default Section