import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./BlogStyles.css";

function Blog() {

  const latestBlog = {

    title: '6. Music & your brain',
    
    content: `The sixth blog in this series, 'How to Use Music to Boost Motivation, Mood & Improve Learning' covers the following:<br/>
1. Listening to music promotes heart rate variability, triggered by changes in breathing patterns. <br/>
2. Music is an auditory and emotional experience that programs a specific set of motor actions likely to occur. <br/>
3. Listening to music faster than 140–150 beats per minute creates a heightened sense of motivation in the body to move. <br/>
4. Listening to music 10–15 minutes before exercise or cognitive work helps improve engagement in the activity. <br/>
5. Binaural beats at a frequency of 40 Hz can enhance focus and concentration, while other frequencies may have a detrimental effect.<br/>
6. For cognitive tasks, the effectiveness scenarios are as follows: complete silence > instrumental music only > music with lyrics > listening to favorite music. Additionally, 40 Hz binaural beats or brown/white noise > working in silence.<br/>
7. Internal dialogue or listening to yourself while reading helps with information retention.<br/>
8. Listening to music with lyrics during breaks in cognitive work can improve retention.<br/>
9. Fast-paced music, such as rock and roll, during breaks between bouts of exercise may enhance physical performance.<br/>
10. The threshold for shifting to a happier mood by listening to happy music (frequency of words > 140 Hz) is 9 minutes.<br/>
11. Listening to sad music (frequency < 60 Hz) for 13 minutes or more can help process and move past sad emotions.<br/>
12. Listening to "Weightless" by Marconi Union can reduce anxiety by up to 65%.<br/>
13. Listening to novel forms of music for 30–60 minutes a day, three times a week, can expand brain connectivity.`,

    date: 'December 01, 2024',
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
