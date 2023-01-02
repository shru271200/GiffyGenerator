import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Tag = () => {
  const[tag,setTag] = useState('Dogs');
  const[gif,setGif] = useState('');
  // const Key = process.env.API_KEY;
  const response = async(tag) => {
    const url=`https://api.giphy.com/v1/gifs/random?api_key=HOV7jdTnncTJDrwLvDp42b51tUTmRdbw&tag=${tag}`;
    const {data} = await axios.get(url);
    setGif(data.data.images.downsized_large.url);
  }
  useEffect(()=>{
    response(tag);
  },[tag]);
  
  const handleclick = () => {
    response(tag); 
  }
  return (
    <div className='Tag'>
      <div className='tag1'>
      <input  type = "text" value={tag} onChange={(e)=>setTag(e.target.value)}/>
      <button onClick={handleclick}>New Gif?</button>
      </div>
      
      <img width="500px" height="400px" src={gif} alt='gif' download></img>
      </div>
  )
}

export default Tag