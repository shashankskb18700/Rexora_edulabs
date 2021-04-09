import React from 'react';
import './contact.css';

const Contact = () => (
  <form class="form">
    <h2>CONTACT US</h2>
    <p type="Name:">
      <label  />
      <input placeholder="Write your name here.."></input>
    </p>
    <p type="Email:">
      <input placeholder="Let us know how to contact you back.."></input>
    </p>
    <p type="Message:">
      <input placeholder="What would you like to tell us.."></input>
    </p>
    <button className="button ">Send Message</button>
    <div className='det'>
      <span class="fa fa-phone"></span>000 0000 000
      <span class="fa fa-envelope-o"></span> aaa@rexora.com
    </div>
  </form>
)
export default Contact;

