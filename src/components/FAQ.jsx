import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const DEFAULT_FAQS = [
  {
    q: "How do I report an incident anonymously?",
    a: 'Go to the Report page and click "Report Now". You can submit details without providing personal information.',
  },
  {
    q: "Who can view the reports I submit?",
    a: "Reports are reviewed by designated safety officers. Your identity is not shared unless you choose to disclose it.",
  },
  {
    q: "Is my data secure on SafeSphere?",
    a: "We follow standard security practices to protect data. For full details, see our Privacy policy.",
  },
  {
    q: "Can I edit a report after submitting?",
    a: "If you need to update a report, contact support or use the dashboard if you have an account.",
  },
  {
    q: "How long does investigation take?",
    a: "Investigation times vary. We aim to acknowledge reports within 48 hours and begin review promptly.",
  },
  {
    q: "Where can I get immediate help?",
    a: "If you are in immediate danger, contact local emergency services. For campus resources, check the Support page.",
  },
];

function FAQ({ compact = true, limit = 3, faqs = DEFAULT_FAQS }) {
  const [openIndex, setOpenIndex] = useState(null);

  const items = compact ? faqs.slice(0, limit) : faqs;

  return (
    <section
      className={`w-full rounded-lg ${compact ? "" : ""}`}
      aria-label="FAQ section"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-sky-300">
          Frequently Asked Questions
        </h3>
        {compact ? (
          <Link
            to="/faqpage"
            className="text-sm text-sky-600 dark:text-white/80 hover:text-sky-300"
          >
            See All FAQs
          </Link>
        ) : null}
      </div>

      <div className="mt-4 space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="bg-gray-50 dark:bg-white/5 p-4 rounded-lg">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex items-center justify-between text-left"
              aria-expanded={openIndex === idx}
            >
              <span className="text-gray-900 dark:text-white">{item.q}</span>
              <FaChevronDown
                className={`text-gray-500 dark:text-white/80 ml-3 transform transition-transform ${
                  openIndex === idx ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {openIndex === idx && (
              <div className="mt-2 text-sm text-gray-700 dark:text-white/80">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>

      {!compact && (
        <div className="mt-6">
          <Link
            to="/about"
            className="text-sm text-sky-600 dark:text-white/80 hover:text-sky-300"
          >
            ← Back to About
          </Link>
        </div>
      )}
    </section>
  );
}

export default FAQ;
