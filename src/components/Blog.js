import React from 'react';
import { Link } from 'react-router-dom';
import "./BlogStyles.css";

function Blog() {

  const latestBlog = {

    title: 'First blog on podcast summary',
    content: `
    The first blog in this series on: 'Optimal Protocols for Studying & Learning'<br/>
    1. Periodic testing is crucial.<br/>
    2. The strain you feel trying to learn is good.<br/>
    3. Perception exercise is good, teaching what you have learned to others helps you remember things better, make schedules for learning.<br/>
    4. Reading and thinking about what you have read is better than re-reading the same material multiple times.<br/>
    5. Testing is the greatest learning tool, frequency of testing increases learning efficiency.<br/>
    6. The best time to self-test is just after being exposed to the new material, followed by a test after a period.<br/>
    7. Self-test should be open-ended and not MCQs.<br/>
    8. Any kind of story with emotional emphasis is more likely to be readily committed to memory, reason - neuromodulators.<br/>
    9. Cold exposure, caffeine, and good sleep also contribute to effective learning.<br/>
    10. Interleaving information also helps.
  `,
    date: 'September 18, 2024',

  }
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
            <Link to="/blogs" className="view-more-link">
              View All Blogs
            </Link>
          </div>

        </div>
      </div>

    </section>

  )
}

export default Blog
