
import React from 'react';

const HomeContact = () => {
  return (
    <div>
      <section
        className="hero"
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          height: '100vh',
          backgroundImage: 'url(car7.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '20px',
          color: 'black',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h1>Welcome to Car World</h1>
          <p>Your one-stop shop for the best cars</p>
          <button>Shop now</button>
        </div>
      </section>
    </div>
  );
};

export default HomeContact;
