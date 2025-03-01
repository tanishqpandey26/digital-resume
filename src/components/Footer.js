import React from 'react';
import "./FooterStyles.css";

const Footer = () =>{

    return(

        <>
        <div className='footer'>

        <div className='top'>
            <div>
                <h1>Tanishq Pandey</h1>
                <p>Software Developer</p>
            </div>

            <div>

                <a href='https://www.linkedin.com/in/pandey26tanishq'>
                <i className='fa-brands fa-linkedin'></i>
                </a>

                <a href='https://github.com/tanishqpandey26'>
                <i className='fa-brands fa-github'></i>
                </a>
                
                <a href='https://twitter.com/tanishqvatsa26'>
                <i className='fa-brands fa-twitter'></i>
                </a>

                <a href='https://digital-resume-fawn.vercel.app/'>
                <i className='fa-solid fa-file-pdf'></i>
                </a>

            </div>

        </div>

        <div className='bottom'>

            <div>

            <h4>Projects</h4>

            <a href='/'>Tripper</a>
            <a href='https://cotlog-social-blog-website.vercel.app/'>Cotlog</a>
            <a href='https://digital-resume-fawn.vercel.app'>Digital Resume</a>

            </div>

<div>
<h4>Socials</h4>

<a href='https://www.linkedin.com/in/pandey26tanishq'>Linkedin</a>
<a href='https://twitter.com/tanishqvatsa26'>Twitter</a>
<a href='https://github.com/tanishqpandey26'>GitHub</a>

</div>

<div>
<h4>Support</h4>

<a href="#contact">Contact</a>
<a href="#experience">Skills</a>
<a href="#projects">Projects</a>

</div>

<div>
<h4>Others</h4>

<a href="#profile">Profile</a>
<a href='#about'>About Me</a>
<a href="#blog">Blogs</a>

</div>

</div>

<div className='footer-copyright'>
            <h3>Copyright &#169; 2023 Tanishq Pandey</h3>
</div>

</div>
        
</>

    )

}

export default Footer;

// About Me</a></li>
//           <li><a href=>Skills</a></li>
//           <li><a href=>Projects</a></li>
//           <li><a href="">Contact</a></li>
//           <li><a href="">Blogs</a>