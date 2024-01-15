import React from 'react'
import { useState, useEffect } from 'react'

const MemeImage = () => {
  const [memeImages, setMemeImage] = useState([])
  const [memeIndex, setMemeIndex] = useState(1)
  const [loading, setLoading] = useState(true)


  const getImages = async () => {
    try {
      setLoading(true);
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
    getImages();
  }, [])



  return (
    <div>
      {loading ? <h1>Loading...</h1> : 


      <div>
        <img src={memeImages[memeIndex].url} alt="meme" /> <br />
        <input type="text" placeholder='Type meme text for top '/>
        <input type="text" placeholder='Type meme text for bottom '/>
      </div>
      
      }

    </div>


    


  )
}

export default MemeImage