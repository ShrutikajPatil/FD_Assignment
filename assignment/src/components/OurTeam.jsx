// src/components/TeamSection.jsx
import React from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";

const team = [
  {
    name: "Freddy Smith",
    role: "CEO and Founder",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    bg: "bg-yellow-100",
  },
  {
    name: "Carl Jones",
    role: "CTO and Co-Founder",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
    bg: "bg-green-100",
  },
  {
    name: "Susan Peterson",
    role: "Marketing Directory",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    bg: "bg-red-100",
  },
  {
    name: "Tommy Barnes",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    bg: "bg-teal-200",
  },
  {
    name: "Ron Jenson",
    role: "Senior Developer",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    bg: "bg-emerald-200",
  },
  {
    name: "Pete Tompkins",
    role: "Web Developer",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    bg: "bg-pink-100",
  },
  {
    name: "Kelly Richards",
    role: "Sales Manager",
    image: "https://randomuser.me/api/portraits/women/70.jpg",
    bg: "bg-lime-200",
  },
  {
    name: "Alexis Jordan",
    role: "Affiliate Manager",
    image: "https://randomuser.me/api/portraits/women/80.jpg",
    bg: "bg-indigo-100",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-blue-400 font-semibold uppercase mb-2">Our Team</p>
        <h2 className="text-3xl font-bold mb-10">An incredible team of amazing individuals</h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-32 h-32 rounded-full overflow-hidden flex items-center justify-center ${member.bg}`}>
                <img src={member.image} alt={member.name} className="object-cover w-full h-full rounded-full" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
              <p className="text-blue-500 text-sm">{member.role}</p>
              <div className="mt-2 flex gap-3 text-gray-400">
                <FaTwitter />
                <FaGithub />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
