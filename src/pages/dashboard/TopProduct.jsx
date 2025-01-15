import { useState } from 'react'

export default function TopProduct() {
  const [timeFilter, setTimeFilter] = useState('This Month')
  
  const topProducts = [
    {
      name: 'Organic Cream',
      items: '789 Item',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20181237-qxfi2v9vqrdBfj3PWj6lXyOCFKJySN.png',
      bgColor: 'bg-[#FFE8E3]'
    },
    {
      name: 'Rain Umbrella', 
      items: '657 Item',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20181237-qxfi2v9vqrdBfj3PWj6lXyOCFKJySN.png',
      bgColor: 'bg-[#FFE3F4]'
    },
    {
      name: 'Serum Bottle',
      items: '489 Item', 
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20181237-qxfi2v9vqrdBfj3PWj6lXyOCFKJySN.png',
      bgColor: 'bg-[#E3F4FF]'
    }
  ]

  const bestItems = [
    {
      name: 'Coffee Beans Packet',
      totalSell: '45897',
      totalEarned: '$45.89M',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20181237-qxfi2v9vqrdBfj3PWj6lXyOCFKJySN.png',
      bgColor: 'bg-[#FFE8E3]'
    },
    {
      name: 'Bottle Cup Set',
      totalSell: '44359',
      totalEarned: '$45.50M',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20181237-qxfi2v9vqrdBfj3PWj6lXyOCFKJySN.png',
      bgColor: 'bg-[#FFE3F4]'
    }
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
      <div className="space-y-8">
        {/* Top Products Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Top Products</h2>
            <select 
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Year</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topProducts.map((product, index) => (
              <div 
                key={index} 
                className={`${product.bgColor} rounded-2xl p-6 transition-transform hover:scale-105`}
              >
                <div className="aspect-square relative mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Best Items Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Best Item All Time</h2>
            <button className="w-[90px] px-1 py-2 text-[15px] lg:py2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              View All
            </button>
          </div>

          <div className="space-y-4">
            {bestItems.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col sm:flex-row items-center gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className={`${item.bgColor} w-full sm:w-32 h-32 rounded-xl flex items-center justify-center p-4`}>
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-gray-600">Total Sell : {item.totalSell}</p>
                  <p className="text-gray-600">Total Earned : {item.totalEarned}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}