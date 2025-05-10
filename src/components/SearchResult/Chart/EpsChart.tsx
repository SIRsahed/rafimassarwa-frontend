import React, { useEffect, useRef } from "react";
import * as echarts from "echarts/core";
import { GridComponent, GridComponentOption } from "echarts/components";
import { ScatterChart, ScatterSeriesOption } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([GridComponent, ScatterChart, CanvasRenderer, UniversalTransition]);

type EChartsOption = echarts.ComposeOption<
  GridComponentOption | ScatterSeriesOption
>;

const EpsChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const myChart = echarts.init(chartRef.current);
    const option: EChartsOption = {
      xAxis: {},
      yAxis: {},
      series: [
        {
          symbolSize: 20,
          color : '#28a745',
          data: [
            [10.0, 8.04],
            [8.07, 6.95],
            [13.0, 7.58],
            [9.05, 8.81],
            [11.0, 8.33],
            [14.0, 7.66],
            [13.4, 6.81],
            [10.0, 6.33],
            [14.0, 8.96],
            [12.5, 6.82],
            [9.15, 7.2],
            [11.5, 7.2],
            [3.03, 4.23],
            [12.2, 7.83],
            [2.02, 4.47],
            [1.05, 3.33],
            [4.05, 4.96],
            [6.03, 7.24],
            [12.0, 6.26],
            [12.0, 8.84],
            [7.08, 5.82],
            [5.02, 5.68],
            [5.02, 5.68],
            [5.02, 5.68],
          ],
          type: "scatter",
        },
      ],
    };

    myChart.setOption(option);

    // Clean up on unmount
    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-xl font-medium">Earning History</h1>
        <p>Last 7 days</p>
      </div>
      <div ref={chartRef} style={{ height: "400px" }}></div>
    </div>
  );
};

export default EpsChart;
