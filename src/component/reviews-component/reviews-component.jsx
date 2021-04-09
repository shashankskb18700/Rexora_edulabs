import { findAllByAltText } from '@testing-library/react';
import React from 'react';
import './reviews.css'
import CoursePreview from '../course-preview/course-preview'

class Reviews extends React.Component{
  constructor() {
    super();
    this.state = {
      rev: [
        {
          name: "Alex",
          review: "best website to learn React js ",
          imageUrl:
            "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
        },
        {
          name: "Saket",
          review:
            "i landed at my dream company ,thanks REXORA",
          imageUrl:
            "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
        },
        {
          name: "Ayush",
          review: "totally mesmerise by the level of content ",
          imageUrl:
            "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
        },
      ],
    };
    
  }

  render() {
    return (
      <div className="text-light">
        {this.state.rev.map(({ name, review, imageUrl }) => (
          <CoursePreview title={name} price={review} imageUrl={imageUrl} />
        ))}
      </div>
    );
  }
}

export default Reviews;