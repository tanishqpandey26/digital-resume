import React from 'react';
import { blogItems } from "../components/blogItems";
import "../components/BlogsStyles.css";

function Blogs() {

  return (

    <section id='blogs'>
      <div className="blogs-container">

        <p className="section__text__p1">My</p>

        <h1 className="blogs-title">Blogs</h1>

        <div className="blogs-list">

          {blogItems.map((item, index) => (

            <div key={index} className="blogs-item">

              <h2 className="blogs-title">{item.title}</h2>

              <div className="blogs-content" dangerouslySetInnerHTML={{ __html: item.content }} />

              <span className="blogs-date">{item.date}</span>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
