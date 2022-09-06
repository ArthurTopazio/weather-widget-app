import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WeatherWidgetDushboard = (props) => {

  const lineChartData = {
    labels: ['1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM',
      '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM', '12PM',],
    datasets: [
      {
        data: [...props.data],
        borderColor: '#06498d',
        fill: false,
        lineTension: 0.4,
      },
    ]
  };

  return (
    <Line
      type='line'
      width={160}
      height={60}
      options={{
        plugins: {
          legend: {
            display: false,
            labels: {
              color: "blue"
            }
          }
        },
        elements: {
          point: {
            radius: 0
          }
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: '#06498d'
            }
          },
          y: {
            grid: {
              display: false,
            },
            ticks: {
              color: '#06498d'
            }
          },
        },
        title: {
          display: false,
        },
        legend: {
          display: false
        },
      }}
      data={lineChartData}
    />
  );
};

export default WeatherWidgetDushboard;