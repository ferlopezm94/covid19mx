import es from 'apexcharts/dist/locales/es.json';
import moment from 'moment-timezone';
import React from 'react';
import Chart from 'react-apexcharts';
import 'moment/locale/es';
import _ from 'lodash';

import dataByState from './../../data/historicalNewDaily.json';

interface Props {
  stateName: string;
}

export const Deaths = ({ stateName }: Props) => {
  const data = {
    series: [
      {
        name: 'Defunciones',
        // @ts-ignore
        data: dataByState[stateName].deaths,
      },
    ],
    options: {
      chart: {
        type: 'bar',
        locales: [es],
        defaultLocale: 'es',
        parentHeightOffset: 0,
        toolbar: {
          show: true,
          tools: {
            download: true,
            selection: true,
            zoom: false,
            zoomin: true,
            zoomout: true,
            pan: false,
            reset: false,
          },
        },
      },
      colors: ['#545454'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
        width: 2,
      },
      title: {
        text: 'Defunciones nuevas por día',
        align: 'left',
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      markers: {
        colors: ['#545454'],
        shape: 'circle',
        size: 2,
        strokeColors: ['#545454'],
      },
      xaxis: {
        categories: dataByState['Dates'].dates,
        type: 'datetime',
      },
      yaxis: {
        min: 0,
        // @ts-ignore
        max: _.max(dataByState[stateName].deaths),
        tickAmount: 4,
      },
      tooltip: {
        x: {
          formatter: (datetime: number) => {
            const date = moment(datetime).utc();
            return `${date.format('DD [de] MMMM')}`;
          },
        },
      },
    },
  };

  return (
    <div className='bg-white rounded-t-lg rounded-b-lg border-b-2 pt-2'>
      <Chart options={data.options} series={data.series} height={300} type='bar' />
    </div>
  );
};
