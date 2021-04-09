import React from 'react';
import './home.styles.css';
import Footer from '../footer-component/footer-component'
import CourseDetail from '../course-detail/course-detail.component'

import Most from '../mostPopular/most-popular.component'

const Home = () => (
  <div className='overall'>
    <div className="main">
       <Most />
    </div>
    <div className="second">
      
      <CourseDetail />


    </div>
   
  </div>
);


export default Home;

  
