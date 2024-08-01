import React from "react";
import ReactDOMClient from "react-dom/client";
import { ChangePassword } from "./screens/ChangePassword";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ChangePassword />);
