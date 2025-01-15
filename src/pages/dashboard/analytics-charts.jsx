import { useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default function AnalyticsCharts() {
  const [timeFilter, setTimeFilter] = useState('This Month')

  // Overview chart data
  const overviewData = {
    labels: ['04:00', '07:00', '10:00', '13:00', '16:00', '19:00', '22:00', '01:00', '04:00'],
    datasets: [
      {
        label: 'Price',
        data: [40, 35, 25, 30, 20, 25, 28, 30, 32],
        borderColor: '#FF6B4A',
        backgroundColor: '#FF6B4A',
        pointRadius: 0,
        borderWidth: 2,
        tension: 0,
      },
      {
        label: 'Volume',
        data: [35, 30, 20, 25, 15, 20, 25, 28, 30],
        borderColor: '#36A2EB',
        backgroundColor: '#36A2EB',
        pointRadius: 0,
        borderWidth: 2,
        tension: 0,
      }
    ]
  }

  // Revenue vs Cost data
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        type: 'bar',
        label: 'Revenue',
        data: [3000, 1800, 1700, 1200, 1000, 1000, 900, 600],
        backgroundColor: '#36A2EB',
        barThickness: 40,
        borderRadius: 4,
      },
      {
        type: 'line',
        label: 'Growth',
        data: [20, 40, 50, 60, 70, 85, 90, 100],
        borderColor: '#666',
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#666',
        pointBorderWidth: 2,
        yAxisID: 'percentage',
      }
    ]
  }

  const overviewOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: 'index'
    },
    scales: {
      x: {
        grid: {
          color: '#f0f0f0',
        }
      },
      y: {
        grid: {
          color: '#f0f0f0',
        },
        min: 0,
        max: 60,
        ticks: {
          stepSize: 20
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }

  const revenueOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: 'index'
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        position: 'left',
        grid: {
          color: '#f0f0f0',
        },
        min: 0,
        max: 4000,
        ticks: {
          stepSize: 1000
        }
      },
      percentage: {
        position: 'right',
        grid: {
          display: false
        },
        min: 0,
        max: 100,
        ticks: {
          callback: value => `${value}%`
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }

  return (
    (<div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-6 p-4">
      {/* Overview Chart */}
      <div className="bg-white rounded-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl text-gray-700">Overview</h2>
            <p className="text-2xl font-semibold mt-2">$45,78956</p>
          </div>
          <div className="flex items-center gap-2">
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-100 text-sm text-gray-600">
              <option>This Month</option>
              <option>Last Month</option>
            </select>
          </div>
        </div>
        <div className="h-[300px]">
          <Line data={overviewData} options={overviewOptions} />
        </div>
      </div>
      {/* Revenue vs Cost Chart */}
      <div className="bg-white rounded-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl text-gray-700">Revenue Vs Cost</h2>
          <select
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
            className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-100 text-sm text-gray-600">
            <option>This Month</option>
            <option>Last Month</option>
          </select>
        </div>
        <div className="h-[300px]">
          <Line data={revenueData} options={revenueOptions} type="bar" />
        </div>
      </div>
    </div>)
  );
}

