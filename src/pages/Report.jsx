import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Report = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    what: "",
    type: "",
    where: "",
    time: "",
    details: "",
    files: [],
  });
  const [submitted, setSubmitted] = useState(false);

  const steps = ["Incident Details", "Upload Documents", "Review Report"];

  const handleNext = () => {
    if (step === 0) {
      const { what, type, where, time, details } = formData;
      if (!what || !type || !where || !time || !details) {
        alert("Please fill out all fields before proceeding.");
        return;
      }
    }
    if (step === 1) {
      if (formData.files.length > 3) {
        alert("You can upload a maximum of 3 files.");
        return;
      }
      for (let f of formData.files) {
        if (f.size > 2 * 1024 * 1024) {
          alert("Each file must be ≤ 2MB.");
          return;
        }
      }
    }
    setStep((prev) => prev + 1);
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const handleEdit = () => setStep(0);

  const handleSubmit = () => {
    setStep(3);
    setSubmitted(true);
    setTimeout(() => {
      window.location.href = "/";
    }, 5000);
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, files: Array.from(e.target.files) });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Bubble background animation
  useEffect(() => {
    const bubbles = document.querySelectorAll(".bubble");
    bubbles.forEach((bubble) => {
      const delay = Math.random() * 10;
      bubble.style.animationDelay = `${delay}s`;
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#e0f2ff] to-[#f8faff] relative overflow-hidden font-[Segoe_UI]">
      {/* Navbar */}

      {/* Animated Background */}
      <div className="fixed top-0 left-0 w-full h-full bg-[url('https://svgshare.com/i/19tK.svg')] opacity-[0.08] bg-repeat animate-[movebg_40s_linear_infinite] z-[-1]" />
      <div className="bubble absolute bottom-[-50px] left-[10%] w-[40px] h-[40px] bg-[rgba(102,166,255,0.3)] rounded-full animate-[float_15s_infinite]" />
      <div className="bubble absolute bottom-[-50px] left-[50%] w-[60px] h-[60px] bg-[rgba(102,166,255,0.3)] rounded-full animate-[float_15s_infinite_3s]" />
      <div className="bubble absolute bottom-[-50px] left-[80%] w-[30px] h-[30px] bg-[rgba(102,166,255,0.3)] rounded-full animate-[float_15s_infinite_6s]" />

      {/* Report Form Container */}
      <div className="max-w-xl mx-auto mt-36 bg-white shadow-2xl rounded-2xl p-10 z-10 relative transition-transform duration-300 hover:-translate-y-1">
        {/* Progress Bar */}
        <div className="relative mb-8">
          <div className="absolute top-1/2 left-0 w-full h-[4px] bg-indigo-100 transform -translate-y-1/2" />
          <div
            className="absolute top-1/2 left-0 h-[4px] bg-gradient-to-r from-[#66a6ff] to-[#89f7fe] transition-all duration-500"
            style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
          />
          <div className="flex justify-between relative z-10">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`w-8 h-8 flex items-center justify-center rounded-full font-semibold ${
                  i === step
                    ? "bg-[#66a6ff] text-white"
                    : i < step
                    ? "bg-[#66a6ff] text-white"
                    : "bg-indigo-100 text-gray-500"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1 */}
        {step === 0 && (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Incident Details
            </h2>
            <input
              id="what"
              type="text"
              placeholder="What happened?"
              className="w-full p-3 mb-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#66a6ff] outline-none"
              onChange={handleInputChange}
              value={formData.what}
            />
            <select
              id="type"
              className="w-full p-3 mb-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#66a6ff]"
              onChange={handleInputChange}
              value={formData.type}
            >
              <option value="">Type of Incident</option>
              <option>Ragging</option>
              <option>Bullying</option>
              <option>Harassment</option>
              <option>Theft</option>
              <option>Other</option>
            </select>
            <input
              id="where"
              type="text"
              placeholder="Where did it happen?"
              className="w-full p-3 mb-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#66a6ff]"
              onChange={handleInputChange}
              value={formData.where}
            />
            <input
              id="time"
              type="datetime-local"
              className="w-full p-3 mb-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#66a6ff]"
              onChange={handleInputChange}
              value={formData.time}
            />
            <textarea
              id="details"
              placeholder="How did it happen? Details..."
              className="w-full p-3 mb-6 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#66a6ff]"
              rows="4"
              onChange={handleInputChange}
              value={formData.details}
            ></textarea>
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-gradient-to-r from-[#66a6ff] to-[#89f7fe] text-white font-bold rounded-lg hover:scale-105 transition-transform"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 1 && (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Upload Documents
            </h2>
            <input
              id="files"
              type="file"
              multiple
              onChange={handleFileChange}
              className="w-full mb-2"
            />
            <small className="text-gray-500">Max 3 files, each ≤ 2MB</small>
            <div className="flex justify-between mt-6">
              <button
                onClick={handleBack}
                className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:scale-105 transition-transform"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-gradient-to-r from-[#66a6ff] to-[#89f7fe] text-white font-bold rounded-lg hover:scale-105 transition-transform"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 2 && (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Review Your Report
            </h2>
            <div className="bg-slate-50 rounded-lg p-4 mb-6 text-gray-700">
              <p><strong>What:</strong> {formData.what}</p>
              <p><strong>Type:</strong> {formData.type}</p>
              <p><strong>Where:</strong> {formData.where}</p>
              <p><strong>Time:</strong> {formData.time}</p>
              <p><strong>Details:</strong> {formData.details}</p>
              <p><strong>Files:</strong> {formData.files.length} uploaded</p>
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleEdit}
                className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:scale-105 transition-transform"
              >
                Edit
              </button>
              <button
                onClick={handleSubmit}
                className="px-6 py-3 bg-gradient-to-r from-[#66a6ff] to-[#89f7fe] text-white font-bold rounded-lg hover:scale-105 transition-transform"
              >
                Submit
              </button>
            </div>
          </div>
        )}

        {/* Thank You */}
        {step === 3 && submitted && (
          <div className="animate-fadeIn text-center text-white bg-gradient-to-r from-[#66a6ff] to-[#89f7fe] py-12 rounded-2xl text-lg font-semibold">
            Report Submitted Successfully! <br />
            Redirecting to homepage...
          </div>
        )}
      </div>


      {/* Custom animations */}
      <style>{`
        @keyframes movebg {
          from { background-position: 0 0; }
          to { background-position: 1000px 1000px; }
        }
        @keyframes float {
          0% { transform: translateY(0) scale(1); opacity: 0.4; }
          50% { transform: translateY(-500px) scale(1.2); opacity: 0.8; }
          100% { transform: translateY(0) scale(1); opacity: 0.4; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Report;
