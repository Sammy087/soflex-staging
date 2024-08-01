import React from "react";
import ReactDOMClient from "react-dom/client";
import { MeasurementSystem } from "./screens/MeasurementSystem";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<MeasurementSystem />);
