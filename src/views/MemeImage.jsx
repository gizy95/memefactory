import React, { useState, useEffect } from 'react';

const MemeImage = () => {
  const [memeImages, setMemeImage] = useState([]);
  const [memeIndex, setMemeIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const getImages = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api.imgflip.com/get_memes');
      const data = await response.json();
      setMemeImage(data.data.memes);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className='container'>
            <img src={memeImages[memeIndex].url} alt="meme" /> <br />
            <p className='topLeft'>Top Left</p>
            <p className='bottom'>Bottom</p>
          </div>
          <input type="text" placeholder='Type meme text for top' />
          <input type="text" placeholder='Type meme text for bottom' />
          {memeIndex > 0 && <button onClick={() => setMemeIndex(memeIndex - 1)}>Previous Meme</button>}
          <button onClick={() => setMemeIndex(memeIndex + 1)}>Next Meme</button>
        </div>
      )}
    </div>
  );
};

export default MemeImage;
