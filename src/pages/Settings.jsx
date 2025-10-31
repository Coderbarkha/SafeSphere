import React, { useState } from "react";
import "./dark-mode.css"; // your own CSS file

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSuccess(true);
    setTimeout(() => setFormSuccess(false), 3000);
  };

  return (
    <div className={`d-flex flex-column min-vh-100 ${darkMode ? "bg-dark text-white" : ""}`}>

      {/* ================= MAIN CONTENT ================= */}
      <main className="container py-5 mt-5">
        <h2 className="mb-4 text-center">Dashboard Settings</h2>

        {/* Theme */}
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto">
            <div className="card p-4">
              <h5 className="mb-3">Theme</h5>
              <button className="btn btn-outline-dark" onClick={handleThemeToggle}>
                <i className="bi bi-moon-stars"></i> Toggle Dark/Light
              </button>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto">
            <div className="card p-4">
              <h5 className="mb-3">Notifications</h5>
              <div className="form-check form-switch mb-2">
                <input className="form-check-input" type="checkbox" id="emailNotify" defaultChecked />
                <label className="form-check-label" htmlFor="emailNotify">
                  Email Notifications
                </label>
              </div>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="smsNotify" />
                <label className="form-check-label" htmlFor="smsNotify">
                  SMS Notifications
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Settings */}
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto">
            <div className="card p-4">
              <h5 className="mb-3">Update Profile</h5>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" placeholder="Your name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Your email" />
                </div>
                <button type="submit" className="btn btn-primary">
                  <i className="bi bi-save"></i> Save
                </button>

                {formSuccess && (
                  <div className="alert alert-success mt-3" role="alert">
                    Profile updated successfully!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Password */}
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto">
            <div className="card p-4">
              <h5 className="mb-3">Change Password</h5>
              <form>
                <div className="mb-3">
                  <label className="form-label">Current Password</label>
                  <input type="password" className="form-control" placeholder="Enter current password" />
                </div>
                <div className="mb-3">
                  <label className="form-label">New Password</label>
                  <input type="password" className="form-control" placeholder="Enter new password" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirm New Password</label>
                  <input type="password" className="form-control" placeholder="Re-enter new password" />
                </div>
                <button className="btn btn-warning">
                  <i className="bi bi-key"></i> Update Password
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Privacy */}
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto">
            <div className="card p-4">
              <h5 className="mb-3">Privacy Settings</h5>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="shareData" defaultChecked />
                <label className="form-check-label" htmlFor="shareData">
                  Allow anonymous data sharing for improving services
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="activityTracking" />
                <label className="form-check-label" htmlFor="activityTracking">
                  Enable activity tracking for better personalization
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Language */}
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto">
            <div className="card p-4">
              <h5 className="mb-3">Language Preferences</h5>
              <select className="form-select">
                <option>English</option>
                <option>Hindi</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
          </div>
        </div>

        {/* Delete */}
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto">
            <div className="card p-4 border-danger">
              <h5 className="text-danger">Delete Account</h5>
              <p className="small">
                Warning: This action is irreversible. All your data will be permanently deleted.
              </p>
              <button className="btn btn-outline-danger">
                <i className="bi bi-trash"></i> Delete My Account
              </button>
            </div>
          </div>
        </div>

        <p className="text-muted small text-center">
          Last login: July 29, 2025 at 10:23 PM
        </p>
      </main>
    </div>
  );
};

export default Settings;
