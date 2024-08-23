import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    
    const [data, setData] = useState({})
    
    let date = "2024-07-07";
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;