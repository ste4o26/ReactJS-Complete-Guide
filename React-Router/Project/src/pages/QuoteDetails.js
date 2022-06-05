import React, { Fragment, useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http'
import { getSingleQuote } from '../lib/api';

const QuoteDetails = () => {
    const params = useParams();
    const match = useRouteMatch();
    const { sendRequest, data, error, status } = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(params.id);
    }, [sendRequest, params.id]);

    if (status === 'pending') return <div className='centered'><LoadingSpinner /></div>
    if (status === 'completed' && error) return <h2 className='centered focused'>{error}</h2>

    return (
        <Fragment>
            <HighlightedQuote
                text={data.text}
                author={data.author} />

            <Route path={match.path} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comments`}>
                        View comments
                    </Link>
                </div>
            </Route>

            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
}

export default QuoteDetails;