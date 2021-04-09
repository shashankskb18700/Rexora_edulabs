import React from 'react';
import './course-detail.css'
import CoursePreview from '../course-preview/course-preview'



class CourseDetail extends React.Component{
  constructor() {
    super()
    this.state = {
      course: [
        {
          title: "Python",
          imageUrl:
            "https://i0.wp.com/evomics.org/wp-content/uploads/2011/09/python-logo-glassy.png",
          price: "19$",
        },
        {
          title: "JavaScript",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
          price: "20$",
        },
        {
          title: "Java",
          imageUrl:
            "https://brandslogos.com/wp-content/uploads/images/large/java-logo-1.png",
          price: "16$",
        },
      ],
    };
  }

  render() {
    return (
      <div className='det'>
        
        {this.state.course.map(({ title, imageUrl,price }) => (
          
      <CoursePreview 
        title={title}
        imageUrl={imageUrl}
        price ={price}
      />
        )
        )}
    </div>
    );
  }
}

export default CourseDetail;
