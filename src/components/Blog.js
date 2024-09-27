import React from 'react';
import { Link } from 'react-router-dom';
import "./BlogStyles.css";

function Blog() {

  const latestBlog = {

    title: 'Second blog on podcast summary',
    content: `
    The second blog in this series, 'Using Your Nervous System to Enhance Your Immune System' covers the following: <br/>
      1. Practice nasal breathing and avoid touching your eyes. Consume 2-4 servings of fermented foods daily. <br/>
      2. Elevate your heels by 12 degrees to support a better immune response. Try NSDR (Non-Sleep Deep Rest) with your feet elevated. <br/> 
      3. A 15-minute sauna session can enhance the immune system by increasing white blood cells. Aim for humidity levels of ±15%, with a cool-off period of 5 to 10 minutes before returning to the sauna. <br/> 
      4. Eating foods rich in serotonin can help combat infections. <br/>
       5. Perform a breathing exercise: 25-30 inhales and exhales, followed by an exhale and hold period. Complete 3 sets of this exercise. <br/> 
       6. Maintaining a healthy mindset can aid in preventing and fighting sickness. Higher dopamine levels may also be beneficial. <br/>
        7. Spirulina (2g) can help alleviate rhinitis. <br/>
         8. Acupuncture may also be helpful but is highly individualized.
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
