import { Fragment, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, sortingType) => {
  if (sortingType === null) return quotes

  if (sortingType === 'ASC')
    return quotes.sort((f, s) => f.author.localeCompare(s.author));

  if (sortingType === 'DESC')
    return quotes.sort((f, s) => s.author.localeCompare(f.author));
}

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  const [isAsc, setIsAsc] = useState(true);

  const queryParams = new URLSearchParams(location.search);
  const sortedQuotes = sortQuotes(props.quotes, queryParams.get('sort'));

  const changeSortingHandler = () => {
    setIsAsc(prevState => !prevState);
    history.push(`${match.url}?sort=${isAsc ? 'ASC' : 'DESC'}`);
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort {!isAsc ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {
          sortedQuotes
            .map((quote) => (
              <QuoteItem
                key={quote.id}
                id={quote.id}
                author={quote.author}
                text={quote.text}
              />
            ))
        }
      </ul>
    </Fragment>
  );
};

export default QuoteList;
