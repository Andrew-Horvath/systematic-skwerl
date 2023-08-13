import React, { useState } from 'react';
import DashChart from '../components/dashboard chart/DashChartCard';

const Dashboard = props => {
    const [chart] = useState([
        { chartHeader: 'Income' },
        { chartHeader: 'Sales' }
    ]);

    return (
        <section className='dashboard-container' >
            <div className='dashboard-chart-div d-flex flex-row'>
                {chart.map((chart, id) => (
                    <DashChart key={id} id={id} chart={chart} />
                ))}
                 </div>
        </section>
    )
}

export default Dashboard