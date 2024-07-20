import React, { useState } from 'react';

const AddProd = () => {
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [cat, setCat] = useState("");
    const [rate, setRate] = useState("");
    const [count, setCount] = useState("");

    async function pushData() {
        let obj = {
            id: Date.now() + Math.random(),
            title,
            des,
            price,
            image,
            cat,
            rating: {
                rate,
                count
            }
        };

        try {
            let res = await fetch('http://localhost:3000/data', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            });
            let data = await res.json();
            console.log(data);
        } catch (error) {
            console.error("Error adding product:", error);
        }
    }

    return (
        <div>
            <h1>Add Product</h1>
            <input type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder='Description' onChange={(e) => setDes(e.target.value)} />
            <input type="number" placeholder='Price' onChange={(e) => setPrice(e.target.value)} />
            <input type="text" placeholder='Image URL' onChange={(e) => setImage(e.target.value)} />
            <input type="text" placeholder='Category' onChange={(e) => setCat(e.target.value)} />
            <input type="number" placeholder='Rate' onChange={(e) => setRate(e.target.value)} />
            <input type="number" placeholder='Count' onChange={(e) => setCount(e.target.value)} />
            <button onClick={pushData}>Add</button>
        </div>
    );
}

export default AddProd;
