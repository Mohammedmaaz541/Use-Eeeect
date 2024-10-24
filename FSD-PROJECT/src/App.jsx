import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json.products);
        setLoading(false);
      })
      .catch((err) => console.log("Error", err));
  }, []);

  if (loading) {
    return <h2>Please wait, data is loading...</h2>;
  }

  return (
    <>
      <div className='maaz'>
        {data.map((product) => (
          <div className="card" style={{style:'width:18rm' }} key={product.id}>
            <img
              className="card-img-top"
              src={product.images[0]}
              alt={product.title}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <a href="#" className="btn btn-primary">${product.price}</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
