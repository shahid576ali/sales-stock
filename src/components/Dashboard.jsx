import React from 'react';

const ProductList = () => {
  return (
    <div className="flex">
      {/* Sidebar Placeholder */}
      <aside className="w-16  min-h-screen ">
        {/* Sidebar content */}
      </aside>

      {/* Main Content */}
      <div className="flex-1  min-h-screen">
        {/* Top Navbar Placeholder */}
        <header className="p-8">
          
        </header>

        {/* Main Content Area */}
        <main className="container mx-auto px-6 py-8">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Product List
            </h2>
            <p className="text-gray-600 mb-6">
              The product list effectively dictates product presentation and
              provides space to list your products and offerings in the most
              appealing way.
            </p>

            {/* Filters */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <label htmlFor="entries" className="text-gray-700 mr-2">
                  Show
                </label>
                <select
                  id="entries"
                  className="border rounded-md py-1 px-3 text-gray-700"
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
                <span className="ml-2 text-gray-700">entries</span>
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-md py-1 px-3 text-gray-700"
              />
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="text-left border-b">
                    <th className="py-3 px-4">Product</th>
                    <th className="py-3 px-4">Code</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Price</th>
                    <th className="py-3 px-4">Brand Name</th>
                    <th className="py-3 px-4">Cost</th>
                    <th className="py-3 px-4">Quantity</th>
                    <th className="py-3 px-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-100">
                    <td className="py-3 px-4 flex items-center">
                      <img
                        src="https://via.placeholder.com/50"
                        alt="Organic Cream"
                        className="w-10 h-10 rounded-full mr-4"
                      />
                      <div>
                        <p className="font-semibold">Organic Cream</p>
                        <p className="text-gray-600 text-sm">
                          This is test Product
                        </p>
                      </div>
                    </td>
                    <td className="py-3 px-4">CREM01</td>
                    <td className="py-3 px-4">Beauty</td>
                    <td className="py-3 px-4">$25.00</td>
                    <td className="py-3 px-4">Lakme</td>
                    <td className="py-3 px-4">$10.00</td>
                    <td className="py-3 px-4">10.0</td>
                    <td className="py-3 px-4 flex items-center space-x-2">
                      <button className="text-blue-600 hover:underline">
                        View
                      </button>
                      <button className="text-green-600 hover:underline">
                        Edit
                      </button>
                      <button className="text-red-600 hover:underline">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-100">
                    <td className="py-3 px-4 flex items-center">
                      <img
                        src="https://via.placeholder.com/50"
                        alt="Rain Umbrella"
                        className="w-10 h-10 rounded-full mr-4"
                      />
                      <div>
                        <p className="font-semibold">Rain Umbrella</p>
                        <p className="text-gray-600 text-sm">
                          This is test Product
                        </p>
                      </div>
                    </td>
                    <td className="py-3 px-4">UM01</td>
                    <td className="py-3 px-4">Grocery</td>
                    <td className="py-3 px-4">$30.00</td>
                    <td className="py-3 px-4">Sun</td>
                    <td className="py-3 px-4">$20.00</td>
                    <td className="py-3 px-4">15.0</td>
                    <td className="py-3 px-4 flex items-center space-x-2">
                      <button className="text-blue-600 hover:underline">
                        View
                      </button>
                      <button className="text-green-600 hover:underline">
                        Edit
                      </button>
                      <button className="text-red-600 hover:underline">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                + Add Product
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductList;
