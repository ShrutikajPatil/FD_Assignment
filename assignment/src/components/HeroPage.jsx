import React from "react";

const HeroPage = () => {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
          Start Crafting Your <br />
          <span className="text-indigo-600">Next Great Idea</span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          Simplifying the creation of landing pages, blog pages, <br />
          application pages and so much more!
        </p>

        <div className="mt-10 flex flex-row sm:flex-row justify-center items-center gap-4">
          <div className="relative">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-indigo-700 transition">
              Purchase Now
            </button>

            <span className="absolute -top-3 -right-4 bg-emerald-400 text-white text-xs px-2 py-1 rounded-full shadow">
              only $15/mo
            </span>
          </div>

          <button className="text-indigo-600 hover:underline font-medium">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
