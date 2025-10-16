import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutImg from "../assets/aboutus.jfif";
import reportingTool from "../assets/reportingtool.png";
import anonymityImg from "../assets/Anonymity.png";
import fastImg from "../assets/fastprocessing.jfif";
import communityImg from "../assets/community.jfif";

const Home = () => {
  return (
    <>

      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-28 text-center overflow-hidden">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to <span className="text-blue-600">SafeSphere</span>
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Stay connected, stay secure
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Stay connected, stay secure, and protect what matters most. <br />
            Get real-time alerts, access help instantly, and report incidents
            with ease. <br />
            Designed for individuals and communities seeking peace of mind.{" "}
            <br />
            Join us to make your world a safer place. <br />
            Your safety, our priority — always.
          </p>
          <a
            href="/report"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>

        {/* Floating bubbles (optional decorative divs) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-6 h-6 bg-blue-200 rounded-full top-20 left-10 animate-bounce"></div>
          <div className="absolute w-8 h-8 bg-blue-100 rounded-full bottom-10 right-20 animate-pulse"></div>
        </div>

        {/* Curved Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16 fill-white"
          >
            <path d="M321.39 56.39C221.08 32.39 120 0 0 0v120h1200V0c-120 0-221.08 32.39-321.39 56.39C758.57 84.38 679.57 120 600 120S441.43 84.38 321.39 56.33z" />
          </svg>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="relative bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
          {/* Left Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
            <img
              src={aboutImg}
              alt="About SafeSphere"
              className="relative rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              About SafeSphere
            </h2>
            <p className="text-gray-600 mb-4">
              SafeSphere was founded with one mission: to make every student
              feel safe on campus. Whether it's harassment, bullying, or a
              general safety concern, we offer a platform where you can share
              your experience without fear of retaliation.
            </p>
            <p className="text-gray-600">
              Our mission is to empower students to take control of their
              safety. We believe that every voice matters, and every report can
              lead to meaningful change. Through our platform, we aim to create
              a culture of transparency and accountability on campuses.
              <br />
              <br />
              We collaborate with college administrations and safety
              departments, ensuring that your concerns are not just heard but
              acted upon. Our technology bridges the gap between students and
              authorities, making campuses safer and more inclusive.
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="max-w-7xl mx-auto px-6 mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">What We Do</h3>
            <p className="text-gray-600 mb-4">
              Since our inception, we’ve partnered with institutions to build
              safer, more transparent environments by offering a platform where
              individuals can raise concerns with complete privacy.
            </p>
            <p className="text-gray-600">
              Whether you’re addressing harassment, safety risks, or misconduct,
              our technology bridges the gap between individuals and the right
              authorities. We don’t just collect reports — we help resolve them
              through structured collaboration, real-time tracking, and secure
              communication.
            </p>
          </div>
          <div>
            <img
              src={reportingTool}
              alt="Reporting Tool"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Icon Cards */}
        <div className="max-w-6xl mx-auto px-6 mt-16 grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: "fa-user-shield text-blue-600",
              title: "Create an Account",
              desc: "Sign up or log in with your credentials. Your personal details are never shared publicly.",
            },
            {
              icon: "fa-paper-plane text-green-600",
              title: "Submit a Report",
              desc: "Provide details of the incident. Stay anonymous and attach evidence to support your report.",
            },
            {
              icon: "fa-hands-helping text-red-600",
              title: "Get Support",
              desc: "Our team and partnered institutions work together to investigate, respond, and keep you updated.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition"
            >
              <i className={`fas ${card.icon} text-3xl mb-3`}></i>
              <h5 className="font-bold mb-2">{card.title}</h5>
              <p className="text-gray-600 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="relative bg-blue-50 py-24 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          Why Choose <span className="text-blue-500">SafeSphere?</span>
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-12">
          Experience a secure, fast, and trusted platform designed to protect
          students' rights and ensure a safer campus.
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              icon: "bi-shield-lock",
              title: "Anonymity Guaranteed",
              desc: "Submit reports confidently without revealing your identity. Advanced encryption keeps your data private.",
              img: anonymityImg,
            },
            {
              icon: "bi-speedometer",
              title: "Fast Processing",
              desc: "Automated routing ensures your reports reach the right authorities instantly for quick action.",
              img: fastImg,
            },
            {
              icon: "bi-people",
              title: "Community Trust",
              desc: "Trusted by thousands of students, SafeSphere fosters accountability and safety.",
              img: communityImg,
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="text-blue-600 text-4xl mb-4">
                <i className={`bi ${f.icon}`}></i>
              </div>
              <h5 className="font-bold mb-2">{f.title}</h5>
              <p className="text-gray-600 text-sm">{f.desc}</p>
              <img
                src={f.img}
                alt={f.title}
                className="mt-4 rounded-lg shadow-sm mx-auto"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ===== READY TO REPORT SECTION ===== */}
      <section className="relative bg-blue-600 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-3">Ready to Report?</h2>
        <p className="max-w-2xl mx-auto text-blue-100 mb-6">
          Take action today and help us create a safer, more accountable campus.
          Your voice matters, and every report brings change.
        </p>
        <a
          href="/report"
          className="inline-block bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition"
        >
          Report Now
        </a>
      </section>
    </>
  );
};

export default Home;
