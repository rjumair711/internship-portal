'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'

interface Application {
  _id: string
  name: string
  email: string
  phone: string
  domain: string
  message: string
  createdAt: string
}

export default function AdminPage() {
  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchApplications()
  }, [])

  const fetchApplications = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/api/applications'
      )

      setApplications(response.data.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Internship Applications
        </h1>

        {loading ? (
          <p className="text-lg">Loading applications...</p>
        ) : applications.length === 0 ? (
          <p className="text-lg">
            No applications found.
          </p>
        ) : (
          <div className="overflow-x-auto bg-white rounded-xl shadow">

            <table className="min-w-full border-collapse">

              <thead className="bg-black text-white">

                <tr>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Phone</th>
                  <th className="p-4 text-left">Domain</th>
                  <th className="p-4 text-left">Message</th>
                  <th className="p-4 text-left">Date</th>
                </tr>

              </thead>

              <tbody>

                {applications.map((app) => (
                  <tr
                    key={app._id}
                    className="border-b"
                  >

                    <td className="p-4">
                      {app.name}
                    </td>

                    <td className="p-4">
                      {app.email}
                    </td>

                    <td className="p-4">
                      {app.phone}
                    </td>

                    <td className="p-4">
                      {app.domain}
                    </td>

                    <td className="p-4 max-w-sm">
                      {app.message}
                    </td>

                    <td className="p-4">
                      {new Date(app.createdAt)
                        .toLocaleDateString()}
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        )}
      </div>
    </div>
  )
}