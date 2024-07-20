import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card'

const ProdDetails = () => {
    let x = useParams()
    let y=x.id
    console.log(y);
    const [oneData,setOneData] = useState({})

   async function fetchData(){
        let res = await fetch(`http://localhost:3000/data/${x.id}`)
        let data = await res.json()
        setOneData(data)
        console.log(data);
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
        <h1>ProdDetails</h1>
        <Card img={oneData.image} title = {oneData.title} des={oneData.description} price = {oneData.price} id = {oneData.id} />
    </div>
  )
}

export default ProdDetails




// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Card from './Card';

// const ProdDetails = () => {
//     let { id } = useParams();
//     const [oneData, setOneData] = useState(null);

//     const fetchData = async () => {
//         try {
//             let res = await fetch(`http://localhost:3000/data/${id}`);
//             let data = await res.json();
//             setOneData(data);
//             console.log(data); // Debugging line to print fetched data
//         } catch (error) {
//             console.error("Error fetching product details:", error);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, [id]);

//     return (
//         <div>
//             <h1>ProdDetails</h1>
//             {oneData ? (
//                 <div key={oneData.id}>
//                     <Card
//                         id={oneData.id}
//                         img={oneData.image}
//                         title={oneData.title}
//                         des={oneData.description}
//                         price={oneData.price}
//                     />
//                 </div>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };

// export default ProdDetails;
