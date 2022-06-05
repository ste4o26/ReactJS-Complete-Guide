import React, { Fragment, useEffect } from 'react';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import QuoteList from '../components/quotes/QuoteList';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/use-http'
import { getAllQuotes } from '../lib/api';

const Quotes = () => {
    const { sendRequest, data, error, status } = useHttp(getAllQuotes, true);

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if (status === 'pending') return <div className='centered'><LoadingSpinner /></div>
    if (status === 'completed' && error) return <h1 className='centered focused'>{error}</h1>

    return (
        <Fragment>
            {data.length > 0 && <QuoteList quotes={data} />}
            {data.length <= 0 && <NoQuotesFound />}
        </Fragment>
    );
}

export default Quotes;