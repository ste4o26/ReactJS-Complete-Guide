import React from 'react';

import ChartBar from './ChartBar';

import './css/Chart.css';

const Chart = props => {
    const maxValue = 1000;

    return (
        <div className="chart">
            {
                props.dataPoints.map(dataPoint => {
                    return <ChartBar
                        key={dataPoint.label}
                        label={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={maxValue} />
                })
            }
        </div>
    )
}

export default Chart;