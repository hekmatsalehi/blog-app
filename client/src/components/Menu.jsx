import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Menu({ cat }) {

  const [postsBasedOnCat, setPostsBasedOnCat] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/posts/?cat=${cat}`)
        setPostsBasedOnCat(response.data)
      } catch(error) {
        console.log(error)
      }
    }

    fetchData()
  }, [cat])

  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {postsBasedOnCat.map(post => (
            <div className="post" key={post.id}>
                <img src={post.img} alt=''/>
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu