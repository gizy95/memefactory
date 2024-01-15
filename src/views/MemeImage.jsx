
import React, { useState, useEffect } from 'react'

const MemeImage = () => {
  const [memeImages, setMemeImage] = useState([])
  const [memeIndex, setMemeIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')
  const [uploadedImage, setUploadedImage] = useState(null)


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


  const handlePrev = () => {
    setMemeIndex(memeIndex - 1)
    setBottomText('')
    setTopText('')
  }

  const handleNext = () => {  
    setMemeIndex(memeIndex + 1)
    setBottomText('')
    setTopText('')
  }

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setUploadedImage(URL.createObjectURL(event.target.files[0]));
    }
  };



  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className='container'>
            <img src={uploadedImage || memeImages[memeIndex].url} alt="meme" /> <br />
            <p className='topLeft'>{topText}</p>
            <p className='bottom'>{bottomText}</p>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder='Type meme text for top'
              className='input-top'
            /><br />
            <input
              type="text"
              placeholder='Type meme text for bottom'
              className='input-bottom'
            /><br />
            <input type="file" id="input" multiple onChange={handleFileChange} /><br></br>
            <button type="submit">Submit</button><br />
          </form>
          {memeIndex > 0 && <button onClick={()=>handlePrev}>Previous Meme</button>}
          <button onClick={()=>handleNext()}>Next Meme</button>
        </div>
      )}
    </div>
  );
};

export default MemeImage;

