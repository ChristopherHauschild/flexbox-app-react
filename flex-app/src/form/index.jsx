import React, { useState } from "react";

import Select from "./Select";
import Quantity from './Quantity'
import Display from "../display";

const Form = () => {
  const[quantity, setQuantity] = useState(1)
  const[display, setDisplay] = useState('flex')
  const[flexDirection, setFlexDirection] = useState('row')
  const[flexWrap, setFlexWrap] = useState('wrap')
  const[justifyContent, setJustifyContent] = useState('flex-start')
  const[alignContent, setAlignContent] = useState('flex-start')
  const[alignItems, setAlignItems] = useState('flex-start')

  const handleQuantity = (newValue) => {
    setQuantity(newValue)
  }

  const handleDisplay = (newValue) => {
    setDisplay(newValue)
  }

  const handleFlexDirection = (newValue) => {
    setFlexDirection(newValue)
  }

  const handleFlexWrap = (newValue) => {
    setFlexWrap(newValue)
  }

  const handleJustifyContent = (newValue) => {
    setJustifyContent(newValue)
  }

  const handleAlignContent = (newValue) => {
    setAlignContent(newValue)
  }

  const handleAlignItems = (newValue) => {
    setAlignItems(newValue)
  }

  return (
    <div className='flex flex-col w-full h-auto mt-5 mb-2 justify-between'>
      <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 row-gap-4 col-gap-6 h-auto w-full p-4 pb-8 bg-gray-200 rounded-sm shadow-md">
        <Select
          id="display"
          label="Display"
          onChangeDisplay={handleDisplay}
          cols={1}
          options={["Flex", "Block", "Inline-block", "Inline", "None"]}
        />
        <Select
          id="direction"
          onChangeFlexDirection={handleFlexDirection}
          label="Flex-direction"
          options={["Row", "Row-reverse", "Column", "Column-reverse", "Initial"]}
        />
        <Select
          id="wrap"
          label="Flex-wrap"
          onChangeFlexWrap={handleFlexWrap}
          cols={1}
          options={["Wrap", "Nowrap", "Wrap-reverse", "Initial"]}
        />
        <Select
          id="justify-content"
          cols={1}
          onChangeJustifyContent={handleJustifyContent}
          label="Justify-content"
          options={["Flex-start", "Flex-end", "Center", "Space-between", "Space-around"]}
        />
        <Select
          id="align-content"
          label="Align-content"
          cols={1}
          onChangeAlignContent={handleAlignContent}
          options={["Flex-start", "Flex-end", "Center", "Space-between", "Space-around", "Stretch"]}
        />
        <Select
          id="align-items"
          label="Align-items"
          cols={1}
          onChangeAlignItems={handleAlignItems}
          options={["Baseline", "Center", "Start", "End", "Space-between", "Space-around", "Stretch"]}
        />
        <Select
          id="align-self"
          label="Align-self"
          cols={1}
          options={["Baseline", "Center", "Start", "End", "Space-between", "Space-around", "Stretch"]}
        />

        <Quantity
          id="quantity"
          quantity={quantity}
          label="Quantidade de Blocos"
          cols={1}
          onChangeQuality={handleQuantity}
        />

      </form>

      <Display
        display={display}
        flexDirection={flexDirection}
        flexWrap={flexWrap}
        justifyContent={justifyContent}
        alignContent={alignContent}
        alignItems={alignItems}

        quantity={quantity}
      />
    </div>
  );
};

export default Form;
