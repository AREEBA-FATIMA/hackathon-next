"use client";
import React from "react";
import { store } from "@/app/redux/store";
import { Provider } from "react-redux";

// Define the Provider wrapper
const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;