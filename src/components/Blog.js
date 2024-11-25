import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./BlogStyles.css";

function Blog() {

  const latestBlog = {

    title: 'CAT exam',
    content: `I appeared for my CAT exam on 24th November. I had been preparing for it for the past six months. To be honest, I could have done better. I got a bit stressed, which resulted in me missing out on some doable questions. According to the analysis, the paper was easier compared to previous years. Now, just waiting for the results!`,
    date: 'November 25, 2024',
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    
    <section id='blog'>

      <div className="blog-container">

        <p className="section__text__p1">My</p>
        <h1 className="b-title">Blogs</h1>

        <div className="latest-blog">

          <h2 className="blog-title">{latestBlog.title}</h2>

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: latestBlog.content }}
          />

          <span className="blog-date">{latestBlog.date}</span>

          <div className="view-more-container">
            
            <Link to="/blogs" 
            className="view-more-link"
            onClick={() => window.scrollTo(0, 0)} >
              View All Blogs
            </Link>
          </div>

        </div>
      </div>

    </section>

  )
}

export default Blog
