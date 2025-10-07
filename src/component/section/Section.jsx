import React, { useEffect } from 'react'
import Card from '../card/Card'
import Style from './section.module.css';
import { useState } from 'react';
import axios from 'axios';
// import { generatePath } from 'react-router-dom';


const Section = ({ heading, data, songsSection }) => {
  const [showAll, setShowAll] = useState(false);
  const [visibleAlbums, setVisibleAlbums] = useState([]);
  const [genres, setgenres] = useState([]);
  const [currentGeneres, setCurrentGeneres] = useState('All');

  useEffect(() => {
    if (songsSection !== true) {
      setVisibleAlbums(showAll ? Array.from(data) : Array.from(data));
    }
    else {
      setVisibleAlbums(Array.from(data)); //songs data
    }
  }, [data, songsSection, showAll]);

  useEffect(() => {
    async function getGeneres() {
      const response = await axios.get('https://qtify-backend.labs.crio.do/genres');
      setgenres(() => response.data?.data);
    }
    getGeneres();
  }, []);

  useEffect(() => {

    if (currentGeneres === 'All') {
      setVisibleAlbums(data);
      return;
    }
    let updatedsongs = data.filter((songs) => songs.genre?.label === currentGeneres);
    setVisibleAlbums(updatedsongs);
  }, [currentGeneres]);

  console.log(visibleAlbums);
  return (<>
    <div className={Style.sections}>
      <div className={Style.heading}>
        <p>{heading}</p>
        {!songsSection && <div>

          <button
            className={Style.toggleBtn}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Collapse' : 'Show all'}
          </button>

        </div>}
      </div>
      {
        songsSection && <div class={Style.genres}>
          {
            genres?.map((data) => { return <p onClick={() => setCurrentGeneres(data.label)}>{data.label}</p> })
          }
        </div>
      }
      <div className={Style.container}>
        {Array.from(visibleAlbums)?.map((album) => { return <Card key={album.id} img={album.image} follow={album.follows} title={album.title}></Card> })}
      </div>
    </div>
  </>);
}

export default Section