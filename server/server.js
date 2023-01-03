import express from 'express';
import postRoutes from './routes/posts.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import cookieParser from 'cookie-parser';
import multer from 'multer'; // For saving files to our server

const app = express()

app.use(express.json())
app.use(cookieParser())

const storage = multer.diskStorage({
    
    destination: function (req, file, cb) {
      cb(null, '../client/public/upload')
    },
    filename: function (req, file, cb) {
      // Date.now() will give as unique name
      cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage: storage })

app.post('/api/upload', upload.single('file'), function (req, res) {
    const file = req.file
    res.status(200).json(file.filename)
})

app.use('/api/auth', authRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/users', userRoutes)

app.listen(5001, () => {
    console.log('Connected to server!')
})