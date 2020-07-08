import React from "react";

const  Quantity = (props) => {
  const { cols, label, id, onChangeQuality, quantity } = props;

  const handleQuantity = (event) => {
    onChangeQuality(+event.target.value)
  }

  return (
    <div className={`lg:col-span-${cols} flex flex-col`}>
      <label
        className="block self-end font-semibold text-teal-600 sm:text-lg mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        type='number'
        onChange={handleQuantity}
        className="shadow appearance-none border rounded w-3/4 self-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id} value={quantity} min={0} />
    </div>
  );
};

export default Quantity;
