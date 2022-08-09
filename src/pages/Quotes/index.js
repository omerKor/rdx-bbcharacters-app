import { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import { fetchAllQuotes, quotesSelector, statusSelector, errorSelector } from '../../redux/quotesSlice';

import { Link } from 'react-router-dom';


function Quotes() {
    const dispatch = useDispatch();
    const quotes = useSelector(quotesSelector);
    const status = useSelector(statusSelector);
    const error = useSelector(errorSelector);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAllQuotes());
        }
    }, [dispatch, status]);


    if (error) {
        return <Error message={error} />
    }

    return (
        <>
            <h1>Quotes</h1>
            {
                status === 'loading' && (
                    <Loading />
                )
            }
            {
                status === 'succeeded' && (
                    quotes.map(item => (
                        <Link to={`/quote/${item.quote_id}`}>
                            <div key={item.quote_id}>
                                <q>{item.quote}</q> <strong>{item.author}</strong>
                            </div>
                        </Link>

                    ))
                )
            }
            {
                status === 'succeeded' && (
                    <h3 style={{ width: '100%', textAlign: 'center' }}>
                        {quotes.length} Quotes.
                    </h3>
                )
            }
        </>
    )
}

export default Quotes