import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Menu from "../components/Menu";
import axios from 'axios';
import { useContext } from "react";
import { AuthContext } from "../context/authContext.js"
import moment from "moment";

function Single() {
  const [post, setPost] = useState({})

  const postId = useLocation().pathname.split('/')[2]
  const { currentUser } = useContext(AuthContext);
  
  const navigate = useNavigate()

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

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`)
      navigate('/')
    } catch(error) {
      console.log(error)
    } 
  }

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html')
    return doc.body.textContent;
  }

  return (
    <div className="single">
      <div className="content">
        <img
          src={`../upload/${post?.img}`}
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
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {post.username === currentUser?.username && <div className="edit">
            <Link className="link" to={`/write?edit=2`} state={post}>
              <span className="edit-icon">
                <AiFillEdit />
              </span>
            </Link>
            <span className="delete-icon">
              <MdDelete onClick={handleDelete}/>
            </span>
          </div>}
        </div>
        <h1>{post.title}</h1>
        <p className='post-details'>
          {getText(post.desc)}
        </p>
      </div>
      <Menu cat={post.cat}/>
    </div>
  );
}

export default Single;
