import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Random = () => {
  const[gif,setGif] = useState('');
  // const Key = process.env.API_KEY;
  const response = async() => {
    const url=`https://api.giphy.com/v1/gifs/random?api_key=HOV7jdTnncTJDrwLvDp42b51tUTmRdbw`;
    const {data} = await axios.get(url);
    setGif(data.data.images.downsized_large.url);
  }
  useEffect(()=>{
    response();
  },[]);
  const handleclick = () => {
    response();
  }
  return (
    <div className='Random'>
      Random
      <img width="500px" height="400px" src={gif} alt='gif'></img>
      <button onClick={handleclick}>New Gif?</button>
      </div>
  )
}

export default Random