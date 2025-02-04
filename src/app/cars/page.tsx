import Image from 'next/image';

const CarList = () => {
    const carData = [
      { id: 1, name: "Toyota", price: 85000, description: "Luxury car", image: '/car1.jpeg' },
      { id: 2, name: "Mercedes", price: 75000, description: "Luxury car", image: '/car2.jpeg' },
      { id: 3, name: "Mercedes", price: 25000, description: "Luxury car", image: '/car3.jpeg' },
      { id: 4, name: "Mercedes", price: 20000, description: "Luxury car", image: '/car4.jpeg' },
      { id: 5, name: "Mercedes", price: 35000, description: "Luxury car", image: '/car8.jpg' },
      { id: 6, name: "Toyota", price: 950000, description: "Luxury car", image: '/car6.jpeg' },
    ];
  
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', margin: 0 }}>
        {carData.map((car) => (
          <div key={car.id} style={{ width: '33.33%', padding: '0 10px', boxSizing: 'border-box', textAlign: 'center' }}>
            <Image
              src={car.image}
              alt={car.name}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                marginBottom: '20px', // Increased margin between the image and button
              }}
            />
            <h3 style={{ fontSize: '18px', color: '#333', fontWeight: 'bold' }}>{car.name}</h3>
            <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>{car.description}</p>
            <p style={{ fontSize: '16px', color: '#000', fontWeight: 'bold' }}>Price: ${car.price}</p>
            <button
              style={{
                padding: '12px 16px',
                backgroundColor: '#4169E1', 
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                marginTop: '5px', 
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default CarList;
  

