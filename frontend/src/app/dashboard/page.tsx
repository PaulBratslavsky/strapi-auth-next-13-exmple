import React from "react";
import Logout from "../components/Logout";
import ProtectedRoute from "../components/ProtectedRoute";

function DashboardPage({ authUser }: { authUser: any }) {
  console.log(authUser, "############ FROM PROTECTED COMPONENT   ###########");
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {authUser?.username}</p>
      <Logout />
    </div>
  );
}

export default function DashboardIndexRoute() {
  return <ProtectedRoute component={DashboardPage} />;
}
