import React from 'react'
import ChartBar from './ChartBar/ChartBar'

const Chart = ({datapoint}) => {
    const datapointvalue = datapoint.map(pointvalue => pointvalue.value );
    const totalMax = Math.max(...datapointvalue);
  return (
    <div className="chart">
        {datapoint.map((point)=>
        (
        <ChartBar key = {point.label} 
        value = {point.value} 
        maxValue = {totalMax} 
        label = {point.label}/>
))}
        </div>
  )
}

export default Chart