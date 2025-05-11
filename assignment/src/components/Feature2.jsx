// src/components/FeaturesSection.jsx
import React from "react";
import {
  FaCertificate,
  FaBullhorn,
  FaBoxes,
  FaTools,
  FaCubes,
  FaTicketAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCertificate className="text-blue-500 text-3xl" />,
    title: "Certifications",
    desc: "Each of our plan will provide you and your team with certifications.",
  },
  {
    icon: <FaBullhorn className="text-blue-500 text-3xl" />,
    title: "Notifications",
    desc: "Send out notifications to all your customers to keep them engaged.",
  },
  {
    icon: <FaBoxes className="text-blue-500 text-3xl" />,
    title: "Bundles",
    desc: "High-quality bundles of awesome tools to help you out.",
  },
  {
    icon: <FaTools className="text-blue-500 text-3xl" />,
    title: "Developer Tools",
    desc: "Developer tools to help grow your application and keep it up-to-date.",
  },
  {
    icon: <FaCubes className="text-blue-500 text-3xl" />,
    title: "Building Blocks",
    desc: "The right kind of building blocks to take your company to the next level.",
  },
  {
    icon: <FaTicketAlt className="text-blue-500 text-3xl" />,
    title: "Coupons",
    desc: "Coupons system to provide special offers and discounts for your app.",
  },
];

const Features2 = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Features</h2>
        <p className="text-gray-600 mb-12">
          Check out our list of awesome features below.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features2;
