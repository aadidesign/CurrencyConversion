import { useEffect, useState } from "react"

function useCurrencyInfo(currency){

    const[data, setData] = useState({})
    useEffect(() => {

        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)  //API of Currency conversions 

        .then ((res) => res.json())       
        .then ((res) => setData(res[currency]))       // value updated in res (= reserved) 
        console.log(data);

    // To convert json format to string


    } , [currency])


    console.log(data);
    return data
}

export default useCurrencyInfo;