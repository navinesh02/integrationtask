import React from "react";
import ContextProvider from "../../context/todocontext";
import { CreateTodo } from "./todo";
const CreateQuotationParent = () => {
  return (
    <ContextProvider>
      <CreateTodo />
    </ContextProvider>
  );
};

export default CreateQuotationParent;
