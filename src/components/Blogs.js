import React from 'react';
import { blogItems } from './blogItems';
import "./BlogsStyles.css";

function Blogs() {

  return (

    <section id='blog'>
      <div className="blogs-container">

        <p className="section__text__p1">My</p>

        <h1 className="blogs-title">Blogs</h1>

        <div className="blogs-list">

          {blogItems.map((item, index) => (

            <div key={index} className="blog-item">

              <h2 className="blog-title">{item.title}</h2>

              <div className="blog-content" dangerouslySetInnerHTML={{ __html: item.content }} />

              <span className="blog-date">{item.date}</span>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
