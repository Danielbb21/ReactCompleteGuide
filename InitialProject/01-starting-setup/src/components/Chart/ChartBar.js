import React from 'react';
import './ChartBar.css';

const ChartBar = (props) => {

    let barFillheigth = '0%';
    // console.log('Max value', props.maxValue)
    if (props.maxValue > 0) {
        console.log('entrei aqui')
        barFillheigth = Math.round((props.value / props.maxValue) * 100) + '%';
        console.log('barheigth', barFillheigth);
    }
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillheigth}}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
};

export default ChartBar;