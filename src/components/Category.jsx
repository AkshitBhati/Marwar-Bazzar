import React from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from './Products';

const Category = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: 'Paintings',
      image: 'https://j3k5s6s3.rocketcdn.me/wp-content/uploads/2021/07/Phad-painting-Abishek-Joshi-18.jpeg',
      route: '/paintings',
    },
    {
      name: 'Bags',
      image: 'https://m.media-amazon.com/images/I/51GvmTqXyrL.jpg',
      route: '/bags',
    },
    {
      name: 'Decor',
      image: 'https://5.imimg.com/data5/PX/RW/MY-3564861/saarthi-wooden-rajasthani-decorative-ethnic-handicraft-traditional-chowkidar-dwarpal-500x500.png',
      route: '/decor',
    },
  ];

  const handleCategoryClick = (route) => {
    navigate(route);
  };

  return (
    <div className="cat">
      <h1>Shop Category</h1>
      <div className="cat__data">
        {categories.map((category, index) => (
          <div className="cat__card" key={index}>
            <img src={category.image} alt="" />
            <h3>{category.name}</h3>
            <button onClick={() => handleCategoryClick(category.route)}>Shop Category</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
