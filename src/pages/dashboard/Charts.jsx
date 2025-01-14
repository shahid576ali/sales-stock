'use client'

import { useState } from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts'
import { ChevronDown } from 'lucide-react'

// Sample data for the stock chart
const stockData = [
  { time: '04:00', price: 30 },
  { time: '07:00', price: 35 },
  { time: '10:00', price: 33 },
  { time: '13:00', price: 38 },
  { time: '16:00', price: 35 },
  { time: '19:00', price: 40 },
  { time: '22:00', price: 42 },
]

// Sample data for the revenue vs cost chart
const revenueData = [
  { month: 'Jan', revenue: 3000, cost: 2000 },
  { month: 'Feb', revenue: 1800, cost: 1500 },
  { month: 'Mar', revenue: 1700, cost: 1300 },
  { month: 'Apr', revenue: 1200, cost: 1000 },
  { month: 'May', revenue: 1000, cost: 800 },
  { month: 'Jun', revenue: 1000, cost: 750 },
  { month: 'Jul', revenue: 900, cost: 600 },
  { month: 'Aug', revenue: 700, cost: 400 },
]

export default function Charts() {
  const [overviewPeriod, setOverviewPeriod] = useState('This Month')
  const [revenuePeriod, setRevenuePeriod] = useState('This Month')

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 md:p-6 max-w-[2000px] mx-auto w-full">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Overview</h2>
          <div className="relative">
            <select 
              value={overviewPeriod}
              onChange={(e) => setOverviewPeriod(e.target.value)}
              className="appearance-none bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Year</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
        <div className="text-3xl font-bold text-gray-900 mb-6">$45,789.56</div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={stockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="price" stroke="#4F46E5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Revenue Vs Cost</h2>
          <div className="relative">
            <select 
              value={revenuePeriod}
              onChange={(e) => setRevenuePeriod(e.target.value)}
              className="appearance-none bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Year</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#4F46E5" name="Revenue" />
              <Bar dataKey="cost" fill="#10B981" name="Cost" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}