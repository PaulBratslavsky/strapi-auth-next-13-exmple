import React from "react";

export default function Footer() {
  return (
    <footer className="container mx-auto py-4 flex justify-end">
      <p>All rights PB {new Date().getFullYear()}</p>
    </footer>
  );
}
