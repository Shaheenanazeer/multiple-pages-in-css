

import React from 'react';

const About = () => {
  return (
    <div>
      <section
        className="about"
        style={{
          backgroundImage: 'url(car3.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          padding: '20px',
          color: 'white',
          position: 'relative',
        }}
      >
        <div
          className="about-content"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            maxWidth: '350px',  
            padding: '8px',  
            overflow: 'auto',
            height: '180px',  
          }}
        >
          <h2 style={{ fontSize: '20px' }}>About Us</h2> 
          <p style={{ fontSize: '12px' }}>
  Welcome to Car website where passion meets performance. We specialize in offering a curated selection of high-performance vehicles that cater to enthusiasts and everyday drivers alike. Our commitment to quality and customer satisfaction ensures that every car we offer meets the highest standards. Whether you&apos;re seeking the thrill of a sports car or the luxury of a premium sedan, our knowledgeable team is here to assist you in finding the perfect match.
</p>


        </div>
      </section>
    </div>
  );
};

export default About;
