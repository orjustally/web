import React from 'react'
import './Contact.css'
import mail from '../../assets/mail.png'
import call from '../../assets/phone-call.png'
import loc from '../../assets/call.png'

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ee7a4465-cc5f-407f-b4db-cd0fcbad8879");

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
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message</h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service.</p>
        <ul>
          <li><img src={mail} alt=''/>info@duodiag.work</li>
          <li><img src={call} alt=''/>+60123456789</li>
          <li><img src={loc} alt=''/>Kuala Lumpur, MY</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type='text' name='name' placeholder='Enter your name' required/>
          <label>Phone Number</label>
          <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
          <label>Your Email</label>
          <input type='email' name='email' placeholder='Enter your email' required/>
          <label>Write your message here</label>
          <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Send Message</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}
