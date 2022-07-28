import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';

const CookingBook = () => {
    const [receipts, setReceipts] = useState([]);

    useEffect(() => {
        axios
        .get("https://www.themealdb.com/api/json/v1/1/search.php?s=tomato")
        .then((res) => setReceipts(res.data.meals));
    }, [])

    console.log(receipts);
    return (
        <>
            <h1>React Cooking Book</h1>
            <ul className='receipts'>
                {
                    receipts.map((meal, index) => (<Card key={index} meal={meal}/>))
                }
            </ul>
        </>
    )
}

export default CookingBook