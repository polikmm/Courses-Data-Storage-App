import { Outlet } from "react-router-dom";

export function Wrapper() {
  return (
    <main className="main">
      <div className="container">
        <Outlet />
      </div>
    </main>
  );
}