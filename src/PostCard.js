import React from 'react';
import '../src/PostCard.css';

function PostCard({ post, handleRemove }) {
  const { id, title, body } = post;

  return (
    <div className='container'>
    
            <div className="card-container">
            <button className="remove-btn" onClick={() => handleRemove(id)}> &#10060;</button>
            <h2>{title}</h2>
            <p>{body}</p>

    </div>
       
    </div>
      
   
  );
}

export default PostCard;
