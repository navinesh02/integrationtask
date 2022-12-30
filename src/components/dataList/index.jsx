import React from "react";
import ContextProvider from "../../context/todocontext";
import DataList1 from "./datalist";

const CreateQuotationParentData = () => {
  return (
    <ContextProvider>
      <DataList1 />
    </ContextProvider>
  );
};

export default CreateQuotationParentData;
