import React from 'react'

const SalaryCard = () => {
  return (
    <div className="flex justify-center items-center py-5">
    <div className="bg-[#F3F5FE] p-6 rounded-lg border-2 shadow-lg max-w-xs w-full sm:max-w-sm md:max-w-md">
      <h2 className="text-lg font-semibold text-gray-800">Senior Software Engineer</h2>
      <p className="text-sm text-gray-500 mb-4">(859 salaries)</p>
      
      <p className="text-3xl font-bold text-gray-900 mb-1">₹ 56.3 Lakhs</p>
      <p className="text-sm text-gray-500">₹26 L/yr - ₹1 Cr/yr</p>
    </div>
  </div>
  )
}

export default SalaryCard
