import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import AuthLayout from "./components/auth/AuthLayout";

const App = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white min-h-screen">
      <h1>Header Components</h1>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />{" "}
          <Route path="register" element={<Register />} />{" "}
        </Route>

        <Route path="/admin" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />{" "}
          <Route path="register" element={<Register />} />{" "}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
