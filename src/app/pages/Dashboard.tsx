

import React from 'react';
import Link from 'next/link';

export default function Dashboard() {

    const productData = [
        { sender_id: 'Apple MacBook Pro 17"', requested_by: 'Silver', requested_time: 'Laptop',Status : '222',letters : '$2999', },
        
      ];

      const dashborddata = [
        { numofusers:'162',Numofsend: '123',Numofmsg:'123',Contacts:'523',Balance:'223'   }
      ]
      
      // uda dekama kelinma backend ekath ekka connect kaleki neeh
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-5">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <Link href="/dashboard/overview" className="hover:underline">
                Overview
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/dashboard/reports" className="hover:underline">
                Reports
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/dashboard/settings" className="hover:underline">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <header className="mb-10">
        
          <h1 className="text-3xl font-bold">
          <Link href="https://www.terrareach.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
  <img 
    src="https://www.terrareach.com/terrareach.svg" 
    className="h-40 w-40" // Adjust size as needed
    alt="Terrareach Logo" 
  />
</Link>Admin Dashboard!</h1>
          
        </header>

        {/* Content Sections */}
        {dashborddata.map((product, index) => (
  <section key={index} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-2">Number of users</h2>
      <p className="text-3xl font-bold text-green-600">{product.numofusers}</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-2">Number of send Id</h2>
      <p className="text-3xl font-bold text-green-600">{product.Numofsend}</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-2">Number of send messages</h2>
      <p className="text-3xl font-bold text-green-600">{product.Numofmsg}</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-2">Contacts</h2>
      <p className="text-3xl font-bold text-green-600">{product.Contacts}</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-2">Balance</h2>
      <p className="text-3xl font-bold text-green-600">{product.Balance}</p>
    </div>
  </section>
))}

        {/* Table Section */}
        <section className="mt-10">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow-md rounded-lg">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">sender id</th>
                <th scope="col" className="px-6 py-3">requested by</th>
                <th scope="col" className="px-6 py-3">requested time</th>
                <th scope="col" className="px-6 py-3">Status</th>
                <th scope="col" className="px-6 py-3">letters</th>
                <th scope="col" className="px-6 py-3">Action</th>
              </tr>
            </thead>
            

            <tbody>
              {productData.map((product, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800 border-b dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {product.sender_id}
                  </th>
                  <td className="px-6 py-4">{product.requested_by}</td>
                  <td className="px-6 py-4">{product.requested_time}</td>
                  <td className="px-6 py-4">{product.Status}</td>
                  <td className="px-6 py-4">{product.letters}</td>
                  <td className="px-6 py-4">

                  
                    <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
