import React from "react";

const ChartBar = ({label,value,maxValue}) => {
let barHeight = "0%";

if(maxValue > 0 ){
    barHeight = Math.round((value/maxValue)*100) + "%"; 
}

return (
    <div className="chart-bar">
      ChartBar
      <div className="chart-bar-inner">
        <div className="chart-bar-fill" style = {{height : barHeight}}></div>
      </div>
        <div className="chart-bar-label">{label}</div>
    </div>
    // key = {point.label} value = {point.value} maxValue = {null} label = {point.label}
  );
};

export default ChartBar;
