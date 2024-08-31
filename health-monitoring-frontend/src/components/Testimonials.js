import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://i.pinimg.com/originals/b8/5e/9d/b85e9df9e9b75bcce3a767eb894ef153.jpg',
    feedback: 'This app has transformed the way I monitor my health. Highly recommended!',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'https://www.slideserve.com/photo/1704885.jpg',
    feedback: 'A fantastic tool for keeping track of my health metrics.',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    image: 'https://th.bing.com/th/id/OIP.hnT5ycz4Cr2FS07TSW7viwHaLH?w=182&h=273&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    feedback: 'The insights I get from this app are invaluable. Great job!',
  },
  {
    id: 4,
    name: 'Sarah Wilson',
    image: 'https://th.bing.com/th/id/OIP._xXwa_3im4szCJGFDEshLQHaLH?w=182&h=273&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    feedback: 'Using this app has significantly improved my health awareness.',
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2 className="section-title2">User Testimonials</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-image-container">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            </div>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <div className="testimonial-icon">
              <i className="fas fa-quote-left"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
