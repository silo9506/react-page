import React from "react";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Index from "./components/organisms/Index";
import GlobalStyles from "./GlobalStyles";
import store, { persistor } from "./redux/store";
import passive from "default-passive-events";
import ServiceLayout from "./components/organisms/ServiceLayout";
import Introduce from "./components/molecules/menus/Introduce";
import Animaladoption from "./components/molecules/menus/Animaladoption";
import Question from "./components/molecules/menus/Question";
import Animalplay from "./components/molecules/menus/Animalplay";
import Animalhospital from "./components/molecules/menus/Animalhospital";
// require("default-passive-events");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={3000} persistor={persistor}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Index />} />
            <Route path="/service" element={<ServiceLayout />}>
              <Route path="/service/introduce" element={<Introduce />} />
              <Route
                path="/service/animaladoption"
                element={<Animaladoption />}
              />
              <Route path="/service/q" element={<Question />} />
              <Route path="/service/notice" />
              <Route path="/service/animalplay" element={<Animalplay />} />
              <Route
                path="/service/animalhospital"
                element={<Animalhospital />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
