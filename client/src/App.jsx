import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import Login from "Login/Login";
const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <Routes>
      {!isAuthenticated ? (
        <Route index element={<Login setAuthenticated={setAuthenticated} />} />
      ) : (
        <>
          <Route path="auth/*" element={<AuthLayout />} />
          <Route path="admin/*" element={<AdminLayout />} />
          <Route path="rtl/*" element={<RtlLayout />} />
          <Route path="/" element={<Navigate to="/admin" replace />} />
        </>
      )}
    </Routes>
  );
};

export default App;
