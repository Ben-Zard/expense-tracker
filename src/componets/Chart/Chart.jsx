import React from 'react'
import ChartBar from './ChartBar/ChartBar'

const Chart = ({datapoint}) => {
    const datapointvalue = datapoint.map(pointvalue => pointvalue.value );
    const totalMax = Math.max(...datapointvalue);
  return (
    <div className="chart">
        {datapoint.map((p)=>
        (
        <ChartBar key = {p.label} 
        value = {p.value} 
        maxValue = {totalMax} 
        label = {p.label}/>
))}
        </div>
  )
}

export default Chart