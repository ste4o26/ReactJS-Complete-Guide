import React from 'react';

import './css/ExpenseFilter.css';

const ExpenseFilter = props => {
    const selectYearHandler = e => props.onSelectYear(e.target.value);

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label htmlFor="years">Filter by year</label>
                <select name="years" id="years" value={props.selectedYear} onChange={selectYearHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
}

export default ExpenseFilter;