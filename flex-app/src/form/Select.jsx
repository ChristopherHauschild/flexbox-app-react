import React from "react";

const Select = (props) => {
  const { cols, label, id, options } = props;

  return (
    <div className={`lg:col-span-${cols}`}>
      <label
        className=" block text-gray-600 sm:text-lg mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <select
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
      >
        {options.map((option, index) => {
          return <option key={index} value={option}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
