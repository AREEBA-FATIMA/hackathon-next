// pages/team.js
import React from "react";
// Import the React Icons for social media
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"; 

const Team = () => {
  const teamMembers = [
    {
      name: "Username",
      profession: "Profession",
      image: "/images/team-1.png", 
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/images/team-2.png", 
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/images/team-3.png", 
      social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-16">
      <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
      <p className="text-sm text-gray-600 mb-24 text-center px-4">
        Problems trying to resolve the conflict between <br /> the two major realms of
        Classical physics: Newtonian mechanics
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-0" 
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-60 h-48 object-cover mb-6" 
            />
            <h2 className="text-base font-semibold mb-4">{member.name}</h2> 
            <p className="text-sm font-semibold text-gray-500 mb-4">{member.profession}</p>
            <div className="flex space-x-4 mb-4"> 
              <a
                href={member.social.facebook}
                target="_blank"
                className="text-[#14a2f5] hover:text-blue-700"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href={member.social.instagram}
                target="_blank"
                className="text-[#14a2f5] hover:text-pink-700"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href={member.social.twitter}
                target="_blank"
                className="text-[#14a2f5] hover:text-blue-600"
                rel="noopener noreferrer"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
