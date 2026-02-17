"use client"
"use client"

import { useState } from "react"

export default function Toolbar() {
    const [open , setOpen] = useState(false)

    return (
        <>
        <div className="max-w-7xl mx-auto px-8 py-8 flex items-center justify-between">

      <div className="flex items-center gap-6 text-sm text-gray-600">
        <button 
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full hover:border-black transition">
          ☰ <span>Show filters</span>
        </button>
        <span>8 products</span>
      </div>

      <div className="flex items-center gap-3 text-sm text-gray-600">
          <span>Sort by</span>
          <select className="border-none font-medium text-black focus:outline-none">
            <option>Best selling</option>
            <option>Price, low to high</option>
            <option>Price, high to low</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

       {/* Sidebar */}
       <div
       className={`fixed inset-0 bg-black/40 transition ${
         open ? "opacity-100 visible" : "opacity-0 invisible"
       }`}
       onClick={() => setOpen(false)}
     />

     <div
       className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl transition-transform duration-300 ${
         open ? "translate-x-0" : "-translate-x-full"
       }`}
     >
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Filters</h3>

          <div className="space-y-3 text-sm text-gray-600">
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Next day delivery
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Gift ready
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              On sale
            </label>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="mt-6 w-full bg-black text-white py-2 rounded"
          >
            Apply
          </button>
        </div>
      </div>
    </>
  )
}