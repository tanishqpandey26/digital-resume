import React from 'react';
import { Link } from 'react-router-dom';
import "./BlogStyles.css";

function Blog() {

  const latestBlog = {

    title: '3.Microplastics & your health',
    content: `
    The third blog in this series, 'The Effects of Microplastics on Your Health & How to Reduce Them' covers the following: <br/>

1. Try to avoid using plastic water bottles as much as possible; if you have the budget, you can use RO filters to treat tap water. <br/>
2. Sea salt contains microplastics; use Himalayan pink salt if possible, depending on your budget. <br/>
3. Avoid canned soups; as a joke, eat them only when it is a matter of life and death. <br/>
4. Dont microwave plastic containers; "microwave-safe" on a container means the container will not melt, but it does not guarantee that you wont be exposed to microplastics. <br/>
5. Avoid consuming hot liquids in paper cups. <br/>
6. Elevated levels of phthalate metabolites are associated with lower testosterone. <br/>
7. The liver plays a crucial role in detoxifying microplastics from the body. This detoxification can be enhanced by consuming sulforaphane, present in cruciferous veggies such as broccoli and cauliflower. It is best if eaten raw or lightly cooked but not boiled. Andrew takes a supplement of 50 mg sulforaphane. <br/>
8. Eating fiber can also help excrete microplastics. <br/>
9. Avoid non-stick pans; use cast iron or ceramic pans. <br/>
10. Sweating can assist in removing microplastics. <br/>
11. Avoid packaged foods as much as possible; avoid washing clothes frequently, as it releases a lot of microplastic from the fibers. <br/>
12. Avoid microwave popcorn; use tooth tablets instead of toothpaste. <br/>
  `,
    date: 'October 24, 2024',

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
