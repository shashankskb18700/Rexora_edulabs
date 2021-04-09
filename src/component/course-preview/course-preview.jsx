import React from 'react';
import './course.css'

const CoursePreview = ({title,imageUrl,price}) => (
  <div className='course'>
    <div className='image'>
      <img src={` ${imageUrl}` }/>
    </div>
    <div className='detail'>
      <h3>{title}</h3>
      <h4 className="price">{price}</h4>
    </div>

  </div>
)
export default CoursePreview;