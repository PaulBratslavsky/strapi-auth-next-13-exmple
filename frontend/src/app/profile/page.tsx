import React from "react";
import Logout from "../components/Logout";
import ProtectedRoute from "../components/ProtectedRoute";

function ProfilePage() {
  return (
    <div>
      <h1>Profile Page</h1>
      <Logout />
    </div>
  );
}

export default function ProfileRoute() {
  return <ProtectedRoute>
    <ProfilePage />
  </ProtectedRoute>;
}