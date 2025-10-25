import React from "react";
import community from "../assets/community.jfif";
import mission from "../assets/mission.png";
import vision from "../assets/vision.png";
import awareness from "../assets/awareness.jfif";
import support from "../assets/support.jfif";
import creator from "../assets/barkhaphoto.jpeg";
import FAQ from "../components/FAQ";
import "../styles/about.css";

const About = () => {
  return (
    <>

      {/* ===== WHO WE ARE SECTION ===== */}
      <section className="text-center" data-animate>
        <div className="container">
          <div className="section-card">
            <h2 id="whowe">Who We Are</h2>
            <p className="lead mt-3 px-lg-5" id="whoWeDesc">
              SafeSphere is a pioneering initiative dedicated to fostering a
              culture of trust, protection, and empowerment for students and
              individuals alike. Our platform serves as a bridge between
              vulnerable voices and reliable support systems, offering a safe
              space for reporting, learning, and community engagement.
            </p>
            <img
              src={community}
              alt="Community"
              className="mt-4"
              style={{ maxWidth: "220px" }}
            />
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION SECTION ===== */}
      <section id="missionvision" className="py-5" data-animate>
        <div className="container text-center">
          <h2>Our Mission & Vision</h2>
          <p className="lead mt-3 px-lg-5">
            We envision a society where every individual feels safe and
            supported, regardless of gender, background, or situation. Our
            mission is to simplify the process of reporting and connecting with
            authorities while raising awareness about personal safety and
            digital well-being.
          </p>

          <div className="row mt-5">
            <div className="col-md-6">
              <div className="section-card">
                <img
                  src={mission}
                  alt="Mission"
                  className="mb-3"
                  style={{ maxWidth: "180px" }}
                />
                <h4>Our Mission</h4>
                <p>
                  To provide a secure, user-friendly platform for anonymous
                  reporting, learning, and community collaboration to make
                  campuses and societies safer.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="section-card">
                <img
                  src={vision}
                  alt="Vision"
                  className="mb-3"
                  style={{ maxWidth: "180px" }}
                />
                <h4>Our Vision</h4>
                <p>
                  To create an environment where everyone feels heard, respected
                  and protected — building a culture of mutual trust and
                  proactive safety awareness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== IMPACT SECTION ===== */}
      <section id="impact" className="text-center py-5" data-animate>
        <div className="container">
          <h2>Our Impact</h2>
          <p className="lead mt-3 px-lg-5">
            SafeSphere has impacted numerous students and institutions by
            spreading awareness, providing secure channels for communication,
            and fostering community-driven change.
          </p>

          <div className="row mt-5">
            <div className="col-md-4">
              <div className="impact-card">
                <img
                  src={awareness}
                  alt="Awareness"
                  style={{ maxWidth: "100px" }}
                />
                <h5 className="mt-3">Awareness Drives</h5>
                <p>Empowering youth with knowledge about safety and rights.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="impact-card">
                <img
                  src={support}
                  alt="Support"
                  style={{ maxWidth: "100px" }}
                />
                <h5 className="mt-3">Support System</h5>
                <p>
                  Providing a bridge between victims and authorities through
                  secure reporting.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="impact-card">
                <img
                  src={community}
                  alt="Community"
                  style={{ maxWidth: "100px" }}
                />
                <h5 className="mt-3">Community Engagement</h5>
                <p>Building strong networks for mutual trust and help.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MEET THE CREATOR SECTION ===== */}
      <section id="creator" className="py-5" data-animate>
        <div className="container text-center">
          <h2>Meet the Creator</h2>
          <div className="creator-card mt-4">
            <img
              src={creator}
              alt="Creator"
              className="creator-img"
            />
            <h4 className="mt-3">Barkha Thakkar</h4>
            <p className="text-muted">Founder & Developer of SafeSphere</p>
            <p className="mt-3 px-lg-5">
              A passionate BCA student and aspiring full-stack developer,
              dedicated to creating digital solutions that make a difference.
              SafeSphere is not just a project — it’s a mission to bring change
              through technology and awareness.
            </p>

            <div className="social-links mt-3">
              <a
                href="https://github.com/Coderbarkha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/barkhathakkar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="mailto:barkhathakkar@example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <FAQ compact={true} />
    </>
  );
};

export default About;
