import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Write() {
  const [value, setValue] = useState('');
  return (
    <div className='add-post'>
      <div className="content">
        <input type='text' placeholder='title'/>
        <div className="editor-container">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">item1</div>
        <div className="item">item2</div>
      </div>
    </div>
  )
}

export default Write