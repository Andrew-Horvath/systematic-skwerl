import React from 'react';
import LineChart from './DashboardChart';

const DashCharts = ({chart}) => {
    return (
        <article key={chart.id} className='dashboard-chart--article d-inline-block'>
            <h2 className='dashboard-chart--title'>{chart.chartHeader}</h2>
            <LineChart />
        </article>
    )
};

export default DashCharts;