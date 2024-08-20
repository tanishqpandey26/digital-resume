import React, { forwardRef } from 'react';
import {MdEmail} from "react-icons/md";
import {FaLinkedin} from "react-icons/fa";

const Contact = forwardRef((props, ref) => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "568366da-d0e4-4ea2-8ac5-036d6c2eecef");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
   

  return (
   
    <>
    
    
    <section id="contact" ref={ref}>
      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        
        <div class="contact-info-container">
        <button
          onclick=""
          >
            <MdEmail size={30}/>
          </button>
          <p><a href="mailto:tanishqpandeyofficial@gmail.com">tanishqpandeyofficial@gmail.com</a></p>
        </div>
        
        <div className="contact-info-container">
        <button onClick={() => window.open("https://www.linkedin.com/in/pandey26tanishq/")}>
            <FaLinkedin size={30}/>
          </button>
          <p><a href="https://www.linkedin.com/in/pandey26tanishq/">LinkedIn</a></p>
        </div>
      </div>

      <div className='form-container'>

<h1>Send a message to me!</h1>

<form onSubmit={onSubmit}>

    <input type="text" name='name' placeholder='Name' required></input>

    <input type="email" name='email' placeholder='Email' required></input>

    <input placeholder='Subject' required></input>

    <textarea placeholder='Message' rows="4" name='message' required></textarea>

    <button type="submit">Send Message</button>

</form>

<span>{result}</span>

</div>

    </section>
    
    </>
  )
});

export default Contact;
