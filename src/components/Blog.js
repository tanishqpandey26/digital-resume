import React from 'react';
import { Link } from 'react-router-dom';
import "./BlogStyles.css";

function Blog() {

  const latestBlog = {

    title: '5.Salt for brain & body',
    content: `
    The fifth blog in this series, 'Using Salt to Optimize Mental & Physical Performance' covers the following: <br/>

1. There are two types of thirst: osmotic and hypovolemic, both of which drive the body to seek water and salt.<br/>
2. Vasopressin acts as an anti-diuretic hormone.<br/>
3. According to dietary recommendations, 2.3–4 grams of salt per day (about half a teaspoon) is advised. Keeping track of blood pressure is important, especially if hypertension is present.<br/>
4. Galpin Equation: Body weight in pounds divided by 30 equals the ounces of fluid recommended to drink every 15 minutes.<br/>
5. Carbohydrates help retain fluids in the body. If on a low-carb diet, increase salt intake, and vice versa.<br/>
6. Caffeine is a diuretic, so increasing salt and fluid intake may be helpful.<br/>
  `,
    date: 'November 4, 2024',

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
