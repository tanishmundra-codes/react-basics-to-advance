import { useState, useEffect } from "react";

function currencyInfo (currency) {

    let [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json)
        .then((res) => setData(currency))
    }, [currency])

    return data
}

export default currencyInfo