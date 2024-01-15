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
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getImages()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(topText, bottomText)
    setTopText('')
    setBottomText('')


  }

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <img src={memeImages[memeIndex].url} alt="meme" /> <br />
            <input
              type="text"
              placeholder='Type meme text for top'
              value={topText}
              onChange={(e) => setTopText(e.target.value)}
            /><br />
            <input
              type="text"
              placeholder='Type meme text for bottom'
              value={bottomText}
              onChange={(e) => setBottomText(e.target.value)}
            /><br />
            <button type="submit">Submit</button>
            {memeIndex > 0 && <button onClick={() => setMemeIndex(memeIndex - 1)}>Previous Meme</button>}
            <button onClick={() => setMemeIndex(memeIndex + 1)}>Next Meme</button>
          </div>
        </form>
      )}

    </div>
  )
}

export default MemeImage