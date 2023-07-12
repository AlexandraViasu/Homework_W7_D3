import React from "react";
import Comment from "./Comment";

const ChartList = ({chartData}) => {
   console.log('chart data is ', chartData);
   const chartNodes = chartData.feed.entry.map(function (feedEntry, index) {

    return (
        <Comment key={index} chart={feedEntry["im:name"]}></Comment>
    )
   });
    return (
        <>
        {chartNodes}
        </>
    )
}




export default ChartList;