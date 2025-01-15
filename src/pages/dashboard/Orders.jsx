'use client'

import { useState } from 'react'
import { Line, Bar } from 'react-chartjs-2'
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
  Filler,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

export default function Orders() {
  const [timeFilter, setTimeFilter] = useState('This Month')
  
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  
  // Line chart data
  const incomeData = {
    labels: months,
    datasets: [
      {
        data: [65, 85, 55, 70, 95, 80, 90],
        fill: true,
        borderColor: '#FF6B4A',
        backgroundColor: 'rgba(255, 107, 74, 0.1)',
        tension: 0.5,
        pointRadius: 4,
        pointBackgroundColor: '#FF6B4A',
        borderWidth: 3,
      },
    ],
  }

  const expensesData = {
    labels: months,
    datasets: [
      {
        data: [45, 65, 35, 50, 75, 60, 70],
        fill: true,
        borderColor: '#36A2EB',
        backgroundColor: 'rgba(54, 162, 235, 0.1)',
        tension: 0.5,
        pointRadius: 4,
        pointBackgroundColor: '#36A2EB',
        borderWidth: 3,
      },
    ],
  }

  // Bar chart data
  const orderData = {
    labels: months,
    datasets: [
      {
        label: 'Total Likes',
        data: [85, 78, 82, 95, 82, 75, 88, 75, 85, 92, 85, 65],
        backgroundColor: '#36A2EB',
        borderRadius: 4,
      },
      {
        label: 'Total Share',
        data: [75, 70, 75, 85, 72, 68, 80, 68, 75, 85, 75, 55],
        backgroundColor: '#FF6B4A',
        borderRadius: 4,
      },
    ],
  }

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.5,
      },
      point: {
        radius: 0,
        hitRadius: 0,
      },
    },
    maintainAspectRatio: false,
  }

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: '#f0f0f0',
          drawBorder: false,
        },
        ticks: {
          stepSize: 20,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    maintainAspectRatio: false,
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          {/* Income Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-gray-600 mb-1">Income</h2>
                <p className="text-3xl font-semibold">$ 98,7800 K</p>
              </div>
              <select 
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-100 text-sm text-gray-600"
              >
                <option>This Month</option>
                <option>Last Month</option>
                <option>This Year</option>
              </select>
            </div>
            <div className="h-[180px]">
              <Line data={incomeData} options={lineChartOptions} />
            </div>
          </div>

          {/* Expenses Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-gray-600 mb-1">Expenses</h2>
                <p className="text-3xl font-semibold">$ 45,8956 K</p>
              </div>
              <select 
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-100 text-sm text-gray-600"
              >
                <option>This Month</option>
                <option>Last Month</option>
                <option>This Year</option>
              </select>
            </div>
            <div className="h-[180px]">
              <Line data={expensesData} options={lineChartOptions} />
            </div>
          </div>
        </div>

        {/* Order Summary Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-semibold text-gray-800">Order Summary</h2>
            <select 
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-100 text-sm text-gray-600"
            >
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Year</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Average Orders */}
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="60"
                    fill="none"
                    stroke="#f0f0f0"
                    strokeWidth="8"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="60"
                    fill="none"
                    stroke="#FF6B4A"
                    strokeWidth="8"
                    strokeDasharray={`${46 * 3.77} ${100 * 3.77}`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-semibold text-gray-800">46%</span>
                </div>
              </div>
              <p className="text-2xl font-semibold mt-4">$12,6598</p>
              <p className="text-gray-600">Average Orders</p>
            </div>

            {/* Top Orders */}
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="60"
                    fill="none"
                    stroke="#f0f0f0"
                    strokeWidth="8"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="60"
                    fill="none"
                    stroke="#36A2EB"
                    strokeWidth="8"
                    strokeDasharray={`${46 * 3.77} ${100 * 3.77}`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-semibold text-gray-800">46%</span>
                </div>
              </div>
              <p className="text-2xl font-semibold mt-4">$59,8478</p>
              <p className="text-gray-600">Top Orders</p>
            </div>
          </div>

          <div className="h-[300px]">
            <Bar data={orderData} options={barChartOptions} />
          </div>
        </div>
      </div>
    </div>
  )
}
