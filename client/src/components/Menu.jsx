import React from 'react'

function Menu() {
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
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map(post => (
            <div className="post" key={post.id}>
                <img src={post.image} alt=''/>
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu