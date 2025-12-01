"use client";
import React, { useEffect, useState } from "react";

type Query = {
  id: number;
  created_at: string;
  college: string;
  email: string;
};

const Admin = () => {
  const [data, setData] = useState<Query[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const res = await fetch(
          "https://rollcall-backend.vercel.app/api/v1/query/queries"
        );

        if (!res.ok) throw new Error("Failed to fetch queries");

        const json = await res.json();
        setData(json.data || []);
      } catch (err: unknown) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchQueries();
  }, []);

  return (
    <div className="p-6 text-gray-900 dark:text-gray-200">
      <h1 className="text-2xl font-semibold mb-4">Admin – College List</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-400">{error}</p>}

      {!loading && !error && (
        <table className="w-full border border-gray-300 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="p-3 border dark:border-gray-700">ID</th>
              <th className="p-3 border dark:border-gray-700">College</th>
              <th className="p-3 border dark:border-gray-700">Email</th>
              <th className="p-3 border dark:border-gray-700">Created At</th>
            </tr>
          </thead>

          <tbody className="bg-white dark:bg-gray-800">
            {data.map((item) => (
              <tr
                key={item.id}
                className="text-center hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="p-3 border dark:border-gray-700">{item.id}</td>
                <td className="p-3 border dark:border-gray-700">
                  {item.college}
                </td>
                <td className="p-3 border dark:border-gray-700">
                  {item.email}
                </td>
                <td className="p-3 border dark:border-gray-700">
                  {new Date(item.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Admin;
