import React, { useState, useEffect } from "react"
import { Search, ChevronDown, ChevronUp, Edit } from "lucide-react"

const User = () => {
  const [users, setUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sortColumn, setSortColumn] = useState("name")
  const [sortDirection, setSortDirection] = useState("asc")

  useEffect(() => {
    const mockUsers = [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        role: "Admin",
        position: "Senior Developer",
        joiningDate: "2021-01-15",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        role: "User",
        position: "Designer",
        joiningDate: "2021-03-22",
      },
      {
        id: 3,
        name: "Bob Johnson",
        email: "bob@example.com",
        role: "User",
        position: "Junior Developer",
        joiningDate: "2022-05-10",
      },
      {
        id: 4,
        name: "Alice Brown",
        email: "alice@example.com",
        role: "Manager",
        position: "Manager",
        joiningDate: "2020-11-05",
      },
      {
        id: 5,
        name: "Charlie Davis",
        email: "charlie@example.com",
        role: "User",
        position: "QA Tester",
        joiningDate: "2022-09-01",
      },
    ]
    setUsers(mockUsers)
  }, [])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase())
  }

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const handleEdit = (userId) => {
    // Placeholder for edit functionality
    console.log(`Edit user with ID: ${userId}`)
  }

  const filteredUsers = users.filter((user) =>
    Object.values(user).some((value) => value.toString().toLowerCase().includes(searchTerm)),
  )

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1
    return 0
  })

  const renderSortIcon = (column) => {
    if (sortColumn === column) {
      return sortDirection === "asc" ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />
    }
    return null
  }

  return (
    <div className="container mx-auto px-4 py-[89px] lg:pl-[80px]">
      <h1 className="text-2xl font-bold mb-6">User Management</h1>
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              {["name", "email", "role", "position", "joiningDate"].map((column) => (
                <th
                  key={column}
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  <button className="flex items-center focus:outline-none" onClick={() => handleSort(column)}>
                    {column.charAt(0).toUpperCase() + column.slice(1)}
                    {renderSortIcon(column)}
                  </button>
                </th>
              ))}
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map((user) => (
              <tr key={user.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{user.name}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{user.email}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                    <span className="relative">{user.role}</span>
                  </span>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{user.position}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{user.joiningDate}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <button
                    onClick={() => handleEdit(user.id)}
                    className="text-blue-600 hover:text-blue-900 focus:outline-none"
                  >
                    <Edit className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {sortedUsers.length === 0 && <p className="text-center text-red-400 mt-4">No users found</p>}
    </div>
  )
}

export default User