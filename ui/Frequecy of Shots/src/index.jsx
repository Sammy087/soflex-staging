import React from "react";
import ReactDOMClient from "react-dom/client";
import { Frequency } from "./screens/Frequency";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Frequency />);
