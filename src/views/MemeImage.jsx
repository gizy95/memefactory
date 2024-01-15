
import React, { useState, useEffect } from 'react'

const MemeImage = () => {
  const [memeImages, setMemeImage] = useState([])
  const [memeIndex, setMemeIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')

  const getImages = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://api.imgflip.com/get_memes')
      const data = await response.json()
      setMemeImage(data.data.memes)
      setLoading(false)

    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getImages()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    setTopText(event.target[0].value)
    setBottomText(event.target[1].value)
    event.target[0].value = "";
    event.target[1].value = "";

    console.log(topText, bottomText)
  }


  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className='container'>
            <img src={memeImages[memeIndex].url} alt="meme" /> <br />
            <p className='topLeft'>{topText}</p>
            <p className='bottom'>{bottomText}</p>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder='Type meme text for top'
            /><br />
            <input
              type="text"
              placeholder='Type meme text for bottom'
            /><br />
            <button type="submit">Submit</button><br />
          </form>
          {memeIndex > 0 && <button onClick={() => setMemeIndex(memeIndex - 1)}>Previous Meme</button>}
          <button onClick={() => setMemeIndex(memeIndex + 1)}>Next Meme</button>
        </div>
      )}
    </div>
  );
};

export default MemeImage;

