import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';

const CookingBook = () => {
    const [receipts, setReceipts] = useState([]);
    const [inputSearch, setInputSearch] = useState("");

    useEffect(() => {
        axios
        .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputSearch)
        .then((res) => setReceipts(res.data.meals));
    }, [inputSearch])

    console.log(receipts);
    return (
        <>
            <h1>React Cooking Book</h1>
            <input type="text" placeholder="Tapez le nom d'un alliment (en anglais)" 
            onChange={(e) => setInputSearch(e.target.value) }
            />
            <ul className='receipts'>
                {
                    receipts.map((meal) => (<Card key={meal.idMeal} meal={meal}/>))
                }
            </ul>
        </>
    )
}

export default CookingBook