import React from 'react'

const SalaryCard = (props) => {
  return (
    <div className="flex justify-center items-center py-5">
    <div className="bg-[#F3F5FE] p-6 rounded-lg border-2 shadow-lg max-w-xs w-full sm:max-w-sm md:max-w-md">
      <h2 className="text-lg font-semibold text-gray-800">{props.data.profile}</h2>
      <p className="text-sm text-gray-500 mb-4">({props.data.count} salaries)</p>
      
      <p className="text-3xl font-bold text-gray-900 mb-1">₹ {props.data.avg} Lakhs</p>
      <p className="text-sm text-gray-500">₹{props.data.low} L/yr - {props.data.high} L/yr</p>
    </div>
  </div>
  )
}

export default SalaryCard
