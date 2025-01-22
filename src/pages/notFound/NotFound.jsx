import React from "react"
import { Home, AlertCircle } from "lucide-react"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="min-h-screen w-full z-[99] bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <AlertCircle className="mx-auto h-24 w-24 text-red-500" aria-hidden="true" />
        <h1 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">404 - Page Not Found</h1>
        <p className="mt-2 text-base text-gray-500">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Home className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound

