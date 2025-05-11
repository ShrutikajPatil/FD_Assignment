import React from 'react';

const features = [
  {
    title: "Boost Productivity",
    description: "Build an atmosphere that creates productivity in your organization and your company culture",
    points: ["Maximize productivity", "Speed past your competition", "Learn techniques"],
    image: "https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/98/10141/Space-Astronaut-Rubber-Duck-Adline-1__88277.1568658130.jpg?c=2",  // <- Replace with your real image URL
    reverse: false,
  },
  {
    title: "Automated Tasks",
    description: "Save time and money with our revolutionary services. We are the leaders in the industry",
    points: ["Automated task workflow", "Detailed analytics", "Awesome integrations"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOPgGHUhopukZcaYqKy-GDZdiS0i-3ns2PhQ&s",  // <- Replace with your real image URL
    reverse: true,
  },
];


const FeatureSection = () => {
  return (
    <div className="py-12 px-6 max-w-7xl mx-auto space-y-16">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`flex flex-col-reverse md:flex-row ${
            feature.reverse ? 'md:flex-row-reverse' : ''
          } items-center gap-10`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-72 md:w-96"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <ul className="space-y-2">
              {feature.points.map((point, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-yellow-500 text-xl font-bold mr-2">•</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
