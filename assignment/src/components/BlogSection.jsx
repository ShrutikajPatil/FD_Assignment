// src/components/BlogSection.jsx
import React from "react";

const blogs = [
  {
    title: "Refreshing Designs",
    category: "Resources",
    desc: "Quench satisfying designs to help you stir up emotion and tell a story.",
    bg: "bg-purple-500",
    img: "https://images.unsplash.com/photo-1590080875897-2e60b8ec4805", // Replace with actual image
    color: "text-white",
  },
  {
    title: "Healthier Lifestyle",
    category: "Lifestyle",
    desc: "Living a healthier lifestyle will help with your productivity and your mind-set.",
    bg: "bg-blue-400",
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
    color: "text-white",
  },
  {
    title: "Gaming Evolution",
    category: "Entertainment",
    desc: "Learn about the evolution of gaming and how it started a revolution.",
    bg: "bg-yellow-400",
    img: "https://images.unsplash.com/photo-1596436889106-be35e843f974",
    color: "text-white",
  },
  {
    title: "Best Workstations of the Year",
    category: "Inspiration",
    desc: "Check out these inspiring workstations to get ideas on how to level-up your workstation.",
    img: "https://images.unsplash.com/photo-1616627987935-2df2e2f597a0",
    color: "text-black",
  },
  {
    title: "Eating for Productivity",
    category: "Food",
    desc: "Learn how to be more disciplined in your diet and how you can eat to maximize productivity.",
    img: "https://images.unsplash.com/photo-1528695263675-2f823dcafe06",
    color: "text-black",
  },
  {
    title: "A Design Mind-set",
    category: "Resources",
    desc: "What does it mean to have a design mind-set? Learn how to improve your eye for design.",
    img: "https://images.unsplash.com/photo-1573497019233-0e03fddf1b1d",
    color: "text-black",
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900">The Project Blog</h2>
        <p className="text-gray-600 mt-2 mb-8">
          Designs and layouts to help you with your app.
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden shadow-sm ${
                blog.bg ? blog.bg : ""
              }`}
              style={{
                backgroundImage: blog.img ? `url(${blog.img})` : "",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className={`p-6 backdrop-blur-sm bg-opacity-50 ${blog.color}`}>
                <span className="inline-block px-2 py-1 text-xs uppercase bg-white text-gray-800 font-semibold rounded mb-2">
                  {blog.category}
                </span>
                <h3 className="text-xl font-bold mb-1">{blog.title}</h3>
                <p className="text-sm">{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
