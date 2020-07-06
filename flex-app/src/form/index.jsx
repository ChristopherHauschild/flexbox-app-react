import React, { useState } from "react";

import Select from "./Select";
import Quantity from './Quantity'
import Display from "../display";

const Form = () => {
  const[quantity, setQuantity] = useState(1)

  const handleQuantity = (newValue) => {
    setQuantity(newValue)
  }

  return (
    <div className='flex flex-col w-full h-full mt-5 mb-2 justify-between'>
      <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 row-gap-4 col-gap-6 h-auto w-full p-4 pb-8 bg-gray-200 rounded-sm shadow-md">
        <Select
          id="display"
          label="Display"
          cols={1}
          options={["Flex", "Block", "Inline-block", "Inline", "None"]}
        />
        <Select
          id="direction"
          label="Flex-direction"
          options={["Selecione 01", "Selecione 02", "Selecione 03"]}
        />
        <Select
          id="wrap"
          label="Flex-wrap"
          cols={1}
          options={["Selecione 01", "Selecione 02", "Selecione 03"]}
        />
        <Select
          id="justify-content"
          cols={1}
          label="Justify-content"
          options={["Selecione 01", "Selecione 02", "Selecione 03"]}
        />
        <Select
          id="align-content"
          label="Align-content"
          cols={1}
          options={["Selecione 01", "Selecione 02", "Selecione 03"]}
        />
        <Select
          id="align-items"
          label="Align-items"
          cols={1}
          options={["Selecione 01", "Selecione 02", "Selecione 03"]}
        />
        <Select
          id="align-self"
          label="Align-self"
          cols={1}
          options={["Selecione 01", "Selecione 02", "Selecione 03"]}
        />

        <Quantity
          id="quantity"
          quantity={quantity}
          label="Quantidade de Blocos"
          cols={1}
          onTest={handleQuantity}
          options={["Selecione 01", "Selecione 02", "Selecione 03"]}
        />

      </form>

      <Display quantity={quantity} />
    </div>
  );
};

export default Form;
