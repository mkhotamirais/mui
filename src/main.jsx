import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import ErrorBoundary from "./pages/ErrorBoundary.jsx";
import Home from "./pages/Home.jsx";
import MuiTypography from "./pages/mui/MuiTypography.jsx";
import MuiButton from "./pages/mui/MuiButton.jsx";
import MuiTextField from "./pages/mui/MuiTextField.jsx";
import MuiSelect from "./pages/mui/MuiSelect.jsx";
import MuiRadio from "./pages/mui/MuiRadio.jsx";
import MuiCheckbox from "./pages/mui/MuiCheckbox.jsx";
import MuiSwitch from "./pages/mui/MuiSwitch.jsx";
import MuiRating from "./pages/mui/MuiRating.jsx";
import MuiAutoComplete from "./pages/mui/MuiAutoComplete.jsx";
import MuiBox from "./pages/mui/MuiBox.jsx";
import MuiGrid from "./pages/mui/MuiGrid.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorBoundary />}>
      <Route index element={<Home />} />
      <Route path="typography" element={<MuiTypography />} />
      <Route path="button" element={<MuiButton />} />
      <Route path="checkbox" element={<MuiCheckbox />} />
      <Route path="textfield" element={<MuiTextField />} />
      <Route path="select" element={<MuiSelect />} />
      <Route path="radio" element={<MuiRadio />} />
      <Route path="switch" element={<MuiSwitch />} />
      <Route path="rating" element={<MuiRating />} />
      <Route path="autocomplete" element={<MuiAutoComplete />} />
      <Route path="box" element={<MuiBox />} />
      <Route path="grid" element={<MuiGrid />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
