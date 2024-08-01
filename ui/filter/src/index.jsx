import React from "react";
import ReactDOMClient from "react-dom/client";
import { Filter } from "./screens/Filter";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Filter />);
