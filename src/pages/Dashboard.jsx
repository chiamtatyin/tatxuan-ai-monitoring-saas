import React from 'react';
    import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
    
    const data = [
      { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
      { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
      { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
      { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
      { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
      { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
      { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    ];
    
    const tableData = [
      { id: 1, name: 'Data 1', value: 100 },
      { id: 2, name: 'Data 2', value: 200 },
      { id: 3, name: 'Data 3', value: 150 },
      { id: 4, name: 'Data 4', value: 250 },
    ];
    
    function Dashboard() {
      return (
        <div>
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">User Activity</h3>
              <LineChart width={300} height={200} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Another Metric</h3>
              <div className="h-32 flex items-center justify-center bg-gray-100 rounded-md">
                <span className="text-gray-500">Placeholder</span>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Yet Another Metric</h3>
              <div className="h-32 flex items-center justify-center bg-gray-100 rounded-md">
                <span className="text-gray-500">Placeholder</span>
              </div>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tableData.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    
    export default Dashboard;
