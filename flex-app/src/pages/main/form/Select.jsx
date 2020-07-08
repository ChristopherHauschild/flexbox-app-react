import React from "react";

const Select = (props) => {
  const {
    cols,
    label,
    id,
    selectedBlock,
    quantity,
    options,
    onChangeDisplay,
    onChangeFlexDirection,
    onChangeFlexWrap,
    onChangeJustifyContent,
    onChangeAlignContent,
    onChangeAlignItems,
    onChangeAlignSelf,
    onChangeSelectedBlock
  } = props;

  const onSelectHandle = (event) => {
    const optionSelected = event.target.value;
    if (event.target.id === "display") {
      onChangeDisplay(optionSelected.toLowerCase());
    }
    if (event.target.id === "direction") {
      onChangeFlexDirection(optionSelected.toLowerCase());
    }
    if (event.target.id === "wrap") {
      onChangeFlexWrap(optionSelected.toLowerCase());
    }
    if (event.target.id === "justify-content") {
      onChangeJustifyContent(optionSelected.toLowerCase());
    }
    if (event.target.id === "align-content") {
      onChangeAlignContent(optionSelected.toLowerCase());
    }
    if (event.target.id === "align-items") {
      onChangeAlignItems(optionSelected.toLowerCase());
    }
    if (event.target.id === "align-self") {
      onChangeAlignSelf(optionSelected.toLowerCase());
    }
  };
  
  const handleSelectedBlock = (event) => {
    onChangeSelectedBlock(+event.target.value)
  }

  const setBlock = id === "align-self";
  const width = setBlock ? "w-3/5" : "w-full";

  return (
    <div className={`box-content lg:col-span-${cols}`}>
      <label className="flex items-center block text-gray-600 sm:text-lg mb-2" htmlFor={id}>
        <span className='flex-1'>{label}</span> {setBlock && <small className='mr-4'>Bloco (min 0 - max {quantity})</small>}
      </label>
      <select
        onChange={onSelectHandle}
        className={`shadow appearance-none border rounded ${width} py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        id={id}
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>

      {setBlock && (
        <input
          type='number'
          min={0}
          max={quantity}
          value={selectedBlock}
          onChange={handleSelectedBlock}
          className={`shadow appearance-none border rounded w-4/12 ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          id={id}
        />
      )}
    </div>
  );
};

export default Select;
