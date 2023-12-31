import React from "react";
import Logout from "../components/Logout";
import ProtectedRoute from "../components/ProtectedRoute";

function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Logout />
    </div>
  );
}

export default function DashboardIndexRoute() {
  return <ProtectedRoute path="/login">
    <DashboardPage />
  </ProtectedRoute>;
}
