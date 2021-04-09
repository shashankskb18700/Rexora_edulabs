import React from 'react';
import './about.css'
import Reviews from '../reviews-component/reviews-component'
import Contact from '../contact-us/contact-us'

const About = () => (
  <div className="about">
    <div>
      <h2>REXORA Inc.. </h2>
      <h3>We provide best e-Learning courses</h3>
      <p className="information">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Contact />

    </div>

    <Reviews />
  </div>
);
export default About;