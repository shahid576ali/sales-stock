import { useState } from "react";
import users from "./users";
import { Pen } from "lucide-react";

export default function UserListTable() {
  const [sortColumn, setSortColumn] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");

  const sortedUsers = [...users].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const handleEdit = (userId) => {
    console.log(`Edit user with ID: ${userId}`);
    // Add your edit logic here (e.g., opening a modal or navigating to an edit page)
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-semibold mb-6">User List</h1>
      <div className="w-full py-3 flex items-center gap-2 justify-between">
        <div className="flex w-[80%] gap-2 border sm:w-[650px] border-gray-300 h-[35px] rounded-[8px] px-2 items-center">
          <input
            className="w-full outline-none border-none h-[97%] bg-[#fdfdfd] rounded"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex gap-2">
          <button className="bg-blue-300 text-white hover:bg-blue-500 py-1 px-2 lg:py-2 lg:px-6 rounded-[4px]">
            Print
          </button>
          <button className="bg-blue-300 py-1 px-2 text-white hover:bg-blue-500 lg:py-2 lg:px-6 rounded-[4px]">
            Excel
          </button>
          <button className="bg-blue-300 py-1 px-2 text-white hover:bg-blue-500 lg:py-2 lg:px-6 rounded-[4px]">
            PDF
          </button>
        </div>
      </div>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {[
                "Avatar",
                "Name",
                "Contact",
                "Email",
                "Position",
                "Status",
                "Join Date",
                "Action",
              ].map((header) => (
                <th
                  key={header}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => header !== "Action" && handleSort(header.toLowerCase())}
                >
                  <div className="flex items-center">
                    {header}
                    {sortColumn === header.toLowerCase() && header !== "Action" && (
                      <span className="ml-2">
                        {sortDirection === "asc" ? "▲" : "▼"}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={user.avatar.src}
                    alt={`${user.name}'s avatar`}
                    className="h-10 w-10 rounded-full"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {user.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{user.contact}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{user.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{user.position}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.joinDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleEdit(user.id)}
                    className="bg-blue-300 text-white px-4 py-2 rounded hover:bg-blue-500"
                  >
                    <Pen size={15} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}