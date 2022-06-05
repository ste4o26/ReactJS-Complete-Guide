import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http'
import { addQuote } from '../lib/api';

const AddQuote = () => {
    const { sendRequest, status, error } = useHttp(addQuote);
    const history = useHistory();


    useEffect(() => {
        if (status === 'completed' && error) return <h2>{error}</h2>
        if (status === 'completed' && !error) history.replace('/quotes');
    }, [status, error, history]);

    const addQuoteHandler = (quoteData) => {
        console.log(quoteData);
        sendRequest(quoteData);
    }

    return (
        < QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
    );
}

export default AddQuote;