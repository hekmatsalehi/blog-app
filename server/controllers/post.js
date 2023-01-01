import { db } from '../db.js'
import jwt from 'jsonwebtoken'

export const getPosts = (req, res) => {
    const q = req.query.cat 
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";
    
    db.query(q, [req.query.cat], (err, data) => {
        if(err) return res.status(500).json(err);

        return res.status(200).json(data)
    })
}

export const getSinglePost = (req, res) => {
    const q = "SELECT `username`, `title`, `desc`, p.img, u.img as userImg, `cat`, `date` FROM users u JOIN posts p ON u.id = p.userId WHERE p.id = ?"
    
    db.query(q, [req.params.id], (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json(data[0])
    })
}

export const addPost = (req, res) => {
    res.json('Hello from add post')        
}

export const deletePost = (req, res) => {
    //check jsonWebToken for token and token belong to existed user
    const token = req.cookies.access_token
    if(!token) return res.status(401).json('You are not authenticated')

    // verify token
        // when we login we send userInfo (userId)
    jwt.verify(token, 'shsssshkey', (err, userInfo) => {
        if(err) return res.status(403).json('Token is not valid!')

        const postId = req.params.id
        // If user id is not our id we are not allowed to delete the post
        const q = "DELETE FROM posts WHERE `id` = ? AND `userId` = ?"
        
        db.query(q, [postId, userInfo.id], (err, data) => {
            if(err) return res.status(403).json('The post does not belong to you!')
            
            return res.json('Post has been deleted!')
        })
        
    })
}

export const updatePost = (req, res) => {
    res.json('Hello from add post')        
}