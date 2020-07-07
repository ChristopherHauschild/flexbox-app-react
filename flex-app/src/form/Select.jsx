import React from "react";

const Select = (props) => {
  const { cols, label, id, options,
    onChangeDisplay, onChangeFlexDirection, onChangeFlexWrap,
    onChangeJustifyContent, onChangeAlignContent, onChangeAlignItems } = props;

  const onSelectHandle = (event) => {
    const optionSelected = event.target.value
    if(event.target.id === 'display') {
      onChangeDisplay(optionSelected.toLowerCase())
    }
    if(event.target.id === 'direction') {
      onChangeFlexDirection(optionSelected.toLowerCase())
    }
    if(event.target.id === 'wrap') {
      onChangeFlexWrap(optionSelected.toLowerCase())
    }
    if(event.target.id === 'justify-content') {
      onChangeJustifyContent(optionSelected.toLowerCase())
    }
    if(event.target.id === 'align-content') {
      onChangeAlignContent(optionSelected.toLowerCase())
    }
    if(event.target.id === 'align-items') {
      onChangeAlignItems(optionSelected.toLowerCase())
    }
  }

  return (
    <div className={`lg:col-span-${cols}`}>
      <label
        className=" block text-gray-600 sm:text-lg mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <select
        onChange={onSelectHandle}
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
