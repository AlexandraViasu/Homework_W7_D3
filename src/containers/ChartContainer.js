import React, { useState, useEffect } from 'react';
import ChartList from '../components/ChartList';


const ChartContainer = () => {
    const [chart, setChart] = useState({})

    useEffect(() => {
        getCharts();
      }, [])

    const getCharts = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(chart => setChart(chart))
    }

    return (
        <ChartList chartData={chart}/>
    )
}

export default ChartContainer;