import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom';

import axios from 'axios';

function QuoteDetail() {
    const [quote, setQuote] = useState(null);
    const { quote_id } = useParams();


    useEffect(() => {
        axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/quotes/${quote_id}`)
            .then(res => res.data)
            .then(data => setQuote(data[0]));
    }, [quote_id])

    return (
        <div>
            {
                quote && (
                    <>
                        <h1>
                            Series: {quote.series}
                        </h1>
                    </>
                )
            }
            <pre>
                <div>
                    {
                        quote && (
                            JSON.stringify(quote, null, 2)
                        )
                    }
                </div>
            </pre >
        </div >
    )
}

export default QuoteDetail