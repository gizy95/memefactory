import React from 'react'
import { useState, useEffect } from 'react'

function BrowseNew() {
  const [uploadedImage, setUploadedImage] = useState(null)
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setUploadedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    setTopText(event.target[0].value)
    setBottomText(event.target[1].value)
    event.target[0].value = "";
    event.target[1].value = "";
  }

  useEffect(() => {
    setBottomText('')
    setTopText('')
  }, [uploadedImage])



  return (
    <div>
      <div>
      <div className='container'>
            <img src={uploadedImage} alt="meme" />
            <p className='topLeft'>{topText}</p>
            <p className='bottom'>{bottomText}</p>
          </div>
      <input type="file" id="input" multiple onChange={(e)=>handleFileChange(e)} />
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
      <br></br>
      <button type="submit">Submit</button><br />
        </form>
    </div>
  )
}

export default BrowseNew