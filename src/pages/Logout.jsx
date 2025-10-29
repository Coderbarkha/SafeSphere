import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./logout.css"; // <-- create this CSS file

const Logout = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Clear session/local storage if needed
      // localStorage.clear();
      window.location.href = "/login"; // redirect after 2s
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <div className="spinner-border text-warning mb-4" role="status">
          <span className="visually-hidden">Logging out...</span>
        </div>
        <h4 className="text-secondary">Logging you out securely...</h4>
        <p className="text-muted">
          Please wait, you&apos;ll be redirected shortly.
        </p>
      </div>
    </div>
  );
};

export default Logout;
