import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/dark-mode.css"; // your own CSS file

const MyAccount = () => {
  return (
    <>
      {/* Navbar */}
   <Navbar/>

      {/* Profile Overview */}
      <section className="container py-5">
        <h2 className="text-center mb-4">My Account</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <img
              src="https://via.placeholder.com/150"
              className="rounded-circle mb-3"
              style={{ width: "100px", height: "100px" }}
              alt="Profile"
            />
            <h4>Barkha Thakkar</h4>
            <p>barkha@example.com</p>
            <p>
              <strong>Role:</strong> Student
            </p>
            <a href="edit-profile.html" className="btn btn-primary">
              Edit Profile
            </a>
          </div>

          <div className="col-md-8">
            {/* Tabs */}
            <ul className="nav nav-tabs mb-3" id="accountTabs">
              <li className="nav-item">
                <a className="nav-link active" data-bs-toggle="tab" href="#personal">
                  Personal Info
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#security">
                  Security
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#preferences">
                  Preferences
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#connected">
                  Connected Accounts
                </a>
              </li>
            </ul>

            <div className="tab-content">
              {/* Personal Info */}
              <div className="tab-pane fade show active" id="personal">
                <h5>Personal Information</h5>
                <ul className="list-group">
                  <li className="list-group-item">
                    <strong>Full Name:</strong> Barkha Thakkar
                  </li>
                  <li className="list-group-item">
                    <strong>Email:</strong> barkha@example.com
                  </li>
                  <li className="list-group-item">
                    <strong>Phone:</strong> +91 9876543210
                  </li>
                  <li className="list-group-item">
                    <strong>Gender:</strong> Female
                  </li>
                  <li className="list-group-item">
                    <strong>DOB:</strong> 01 Jan 2000
                  </li>
                  <li className="list-group-item">
                    <strong>Address:</strong> 123 Campus Road, City
                  </li>
                  <li className="list-group-item">
                    <strong>Joining Date:</strong> Aug 2024
                  </li>
                </ul>
              </div>

              {/* Security */}
              <div className="tab-pane fade" id="security">
                <h5>Security Settings</h5>
                <p>
                  <i className="bi bi-key-fill me-2"></i>
                  <a href="change-password.html">Change Password</a>
                </p>
                <p>
                  <i className="bi bi-shield-lock-fill me-2"></i>
                  Two-Factor Authentication: <strong>Disabled</strong>
                </p>
                <p>
                  <i className="bi bi-clock-history me-2"></i>Last Login: Aug 3, 2025 -
                  9:45 PM
                </p>
                <button className="btn btn-outline-danger">
                  <a href="logout.html" className="text-danger text-decoration-none">
                    Logout from all devices
                  </a>
                </button>
              </div>

              {/* Preferences */}
              <div className="tab-pane fade" id="preferences">
                <h5>Preferences</h5>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="darkModeToggle"
                  />
                  <label className="form-check-label" htmlFor="darkModeToggle">
                    Dark Mode
                  </label>
                </div>
                <div className="form-check mt-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="emailNotif"
                  />
                  <label className="form-check-label" htmlFor="emailNotif">
                    Receive Email Notifications
                  </label>
                </div>
                <div className="form-check mt-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="pushNotif"
                  />
                  <label className="form-check-label" htmlFor="pushNotif">
                    Receive Push Notifications
                  </label>
                </div>
              </div>

              {/* Connected Features */}
              <div className="tab-pane fade" id="connected">
                <h5>Connected Accounts</h5>
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between">
                    <span>
                      <i className="bi bi-google me-2"></i>Google
                    </span>
                    <button className="btn btn-sm btn-outline-secondary">
                      Linked
                    </button>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>
                      <i className="bi bi-github me-2"></i>GitHub
                    </span>
                    <button className="btn btn-sm btn-outline-primary">Link</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

   <Footer/>
    </>
  );
};

export default MyAccount;
