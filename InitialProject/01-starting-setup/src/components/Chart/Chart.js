import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) =>{

    

    let values = props.dataPoints.map((data)=>{
        return data.value;
    })
    console.log('Valuuuee', values);
    let maximumValue =  Math.max.apply(null,values);
    return(
        <div className="chart">
            {props.dataPoints.map(data => <ChartBar key = {data.label} value = {data.value} maxValue = {maximumValue} label={data.label} />)}
        </div>
    );
};

export default Chart;