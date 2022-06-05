import React from 'react';

import './css/ChartBar.css';

const ChartBar = props => {
    let barHeightFilling = '0%';

    if (props.maxValue > 0) {
        const fillingValue = Math.round((props.value / props.maxValue) * 100);
        barHeightFilling = `${fillingValue}%`;
    }


    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{ height: barHeightFilling }}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
}

export default ChartBar;