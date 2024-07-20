// import React from 'react'
// import Card from './Card'

// const Home = ({data}) => {
//     async function addToCart(){
//         let obj = {
//           id: id,
//           img,
//           title,
//           des,
//           price
//       };
//         let res = await fetch('http://localhost:3000/cart',{
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json"
//           },
//           body: JSON.stringify(obj)
//       });
//       let cart = await res.json()
//       console.log(cart);
//       } 
//     console.log(data);
//   return (
//     <div>
//         <h1>Home</h1>
//         {
//             data.map(({id,image,description,price,title})=>(
//                 <Card id = {id} img = {image} title = {title} des = {description} price = {price} />
//             ))
//         }
//         <button onClick = {addToCart}>Add To Cart</button>
//         </div>
//   )
// }

// export default Home



import React, { useState } from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const Home = ({ data }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const addToCart = async (item) => {
        try {
            let res = await fetch('http://localhost:3000/cart', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
            });
            let cart = await res.json();
            console.log(cart);
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };

    const handleAddToCartClick = (product) => {
        setSelectedProduct(product);
        addToCart(product);
    };

    const nav = useNavigate();

  function showDetails(id){
    nav(`/ProdDetails/${id}`)
  }

    return (
        <div>
            <h1>Home</h1>
            {data.map(({ id, image, description, price, title }) => (
                <div key={id}>
                    <Card
                        id={id}
                        img={image}
                        title={title}
                        des={description}
                        price={price}
                    />
                    <button onClick={() => handleAddToCartClick({ id, img:image, title, des: description, price })}>
                        Add To Cart
                    </button>
                    <button onClick={()=>{showDetails(id)}}>Details</button>
                </div>
            ))}
        </div>
    );
};


export default Home
