import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Menu from "../components/Menu";
import axios from 'axios';
import { useContext } from "react";
import { AuthContext } from "../context/authContext.js"
function Single() {
  const [post, setPost] = useState({})

  const postId = useLocation().pathname.split('/')[2]
  const { currentUser } = useContext(AuthContext);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/posts/${postId}`)
        setPost(response.data)
      } catch(error) {
        console.log(error)
      }
    }

    fetchData()
  }, [postId])

  
  return (
    <div className="single">
      <div className="content">
        <img
          src={post?.img}
          alt=""
        />
        <div className="user">
          <div className="avatar">
          {post.userImg ? <img
            src={post.userImg}
            alt=""
          /> : <FaUser className="user-icon"/>}
          </div>
          <div className="info">
            <span>{post.username}</span>
            <p>Posted 3 days ago</p>
          </div>
          {post.username === currentUser?.username && <div className="edit">
            <Link className="link" to={`/write?edit=2`}>
              <span className="edit-icon">
                <AiFillEdit />
              </span>
            </Link>
            <span className="delete-icon">
              <MdDelete />
            </span>
          </div>}
        </div>
        <h1>{post.title}</h1>
        <p className='post-details'>
          {post.desc}
        </p>
      </div>
      <Menu/>
    </div>
  );
}

export default Single;
