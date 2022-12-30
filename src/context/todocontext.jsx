import React, { createContext, useState } from "react";

export const CreateQuotationListContext = createContext();

const CreateQuotationContextProvider = (props) => {
  const [step, setStep] = useState([]);
  function todo(data) {
    step.push(data);
    setStep([...step]);
  }

  function deletedata(id) {
    console.log(id, "deletFin");
    const newList = step.filter((val) => val.id !== id);
    setStep(newList);
  }

  const slash = (id) => {
    const filteredvalue = step.filter((val) => val.id == id);
    filteredvalue.map((val) => {
      val.complete = val.complete ? false : true;
    });
  };

  return (
    <CreateQuotationListContext.Provider
      value={{
        step,
        todo,
        deletedata,
        slash,
      }}
    >
      {props.children}
    </CreateQuotationListContext.Provider>
  );
};

export default CreateQuotationContextProvider;
