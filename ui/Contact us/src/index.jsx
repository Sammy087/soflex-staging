import React from "react";
import ReactDOMClient from "react-dom/client";
import { ContactUs } from "./screens/ContactUs";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ContactUs />);
