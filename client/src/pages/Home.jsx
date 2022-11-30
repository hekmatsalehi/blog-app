import React from 'react'
import {Link} from 'react-router-dom'

function Home() {

  const posts = [
    {
      id: 1,
      title: "This is a post",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam voluptas facilis voluptatum officia praesentium! Exercitationem nobis, maiores iure odio inventore molestias, voluptatibus magni ad similique voluptas sapiente veritatis et id.",
      image: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHdpbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      title: "This is a post",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam voluptas facilis voluptatum officia praesentium! Exercitationem nobis, maiores iure odio inventore molestias, voluptatibus magni ad similique voluptas sapiente veritatis et id.",
      image: "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHdpbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      title: "This is a post",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam voluptas facilis voluptatum officia praesentium! Exercitationem nobis, maiores iure odio inventore molestias, voluptatibus magni ad similique voluptas sapiente veritatis et id.",
      image: "https://images.unsplash.com/photo-1459478309853-2c33a60058e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      title: "This is a post",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam voluptas facilis voluptatum officia praesentium! Exercitationem nobis, maiores iure odio inventore molestias, voluptatibus magni ad similique voluptas sapiente veritatis et id.",
      image: "https://images.unsplash.com/photo-1419332552192-47d29e59b1e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGZhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 5,
      title: "This is a post",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam voluptas facilis voluptatum officia praesentium! Exercitationem nobis, maiores iure odio inventore molestias, voluptatibus magni ad similique voluptas sapiente veritatis et id.",
      image: "https://images.unsplash.com/photo-1507100403890-47482dcd79e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fGZhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
  ]


  return (
    <div className='home'>
      <div className="posts">
        {posts.map( post => (
          <div className="post" key={post.id}>
            <div className="image">
              <img src={post.image} alt=""/>
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.description}</p>
              <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home