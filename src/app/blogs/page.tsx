"use client";
import Image from "next/image";
import { ClockIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Footer from "../[home]/footer/page";
import Header from "@/components/Header";

export default function FeaturedPosts() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      image: "/images/blog-1.png",
      title: "10 Ways to Style a Little Black Dress for Any Occasion",
      tags: ["Google", "Trending", "New"],
      description:
        "The little black dress (LBD) is a timeless wardrobe staple. For a casual look, pair it with white sneakers and a denim jacket. Heading to work? Add a blazer and loafers for a polished vibe. For a night out, go bold with statement heels and sparkling accessories. Layering is key—throw on a trench coat for chilly evenings or add a belt to cinch the waist for a chic silhouette. Experiment with scarves, bags, and jewelry to transform the LBD into a new look every time!",
      date: "22 April 2021",
      comments: 0,
    },
    {
      id: 2,
      image: "/images/blog-2.png",
      title: "Best Dresses for Summer Weddings",
      tags: ["Google", "Trending", "New"],
      description:
        "Summer weddings call for breezy fabrics, vibrant colors, and floral prints. Maxi dresses in lightweight materials like chiffon or cotton are perfect for outdoor ceremonies. Pastel tones and soft hues bring out an airy, romantic vibe, while bold patterns make a statement. Flowy midi dresses or tea-length styles are ideal for dancing the night away. Don’t forget comfortable yet stylish shoes, as summer weddings often involve some walking or standing outdoors!",
      date: "22 April 2021",
      comments: 0,
    },
    {
      id: 3,
      image: "/images/blog-3.png",
      title: "Runway to Real Life: Making Designer Dresses Work for You",
      tags: ["Google", "Trending", "New"],
      description:
        "Runway fashion might seem extravagant, but you can bring designer trends into your everyday wardrobe with a few tweaks. Opt for toned-down versions of bold colors or prints seen on the runway. Swap sky-high heels for elegant flats or block heels to make the look more practical. Experiment with layering or simple accessories to balance out extravagant designs, making them suitable for daily wear without losing their high-fashion appeal.",
      date: "22 April 2021",
      comments: 0,
    },
    {
      id: 4,
      image: "/images/blog4.png",
      title: "Sustainable Dresses: How to Shop Responsibly",
      tags: ["Eco-friendly", "Sustainability", "Fashion"],
      description:
        "Sustainability is becoming increasingly important in fashion, and shopping for eco-friendly dresses is a great way to reduce your environmental impact. Look for brands that prioritize organic or recycled fabrics, such as organic cotton, bamboo, or Tencel. Another tip is to invest in quality over quantity. A well-made dress may cost more upfront but will last much longer, saving you money in the long run and reducing waste. Shopping secondhand or supporting local, ethical brands is another excellent way to embrace sustainability while looking fabulous.",
      date: "10 July 2021",
      comments: 0,
    },
    {
      id: 5,
      image: "/images/blog5.png",
      title: "How to Transform an Old Dress Into Something New",
      tags: ["DIY", "Upcycling", "Fashion"],
      description:
        "Don’t let old dresses collect dust in your closet—transform them into something fresh and stylish. Start with simple DIY hacks, such as adding embellishments like lace, beads, or patches to give your dress a new look. Shortening a maxi dress to create a chic midi or mini dress is another great way to revamp your wardrobe. For a more dramatic transformation, consider dyeing your dress in a bold new color or experimenting with creative cuts. With a little creativity, you can breathe new life into old favorites and create one-of-a-kind pieces.",
      date: "20 August 2021",
      comments: 0,
    },
    {
      id: 6,
      image: "/images/blog6.png",
      title: "The Evolution of Evening Dresses Through the Decades",
      tags: ["Fashion History", "Trends", "Style"],
      description:
        "Evening dresses have undergone remarkable transformations over the decades, reflecting societal trends and cultural shifts. In the 1920s, flapper-style dresses with intricate beading and shorter hemlines became a symbol of rebellion and liberation. The 1950s brought a return to glamour, with hourglass silhouettes and luxurious fabrics dominating the scene. Today, evening wear continues to evolve, blending timeless elegance with modern minimalism. From classic gowns inspired by old Hollywood to sleek, contemporary designs, evening dresses remain a testament to the ever-changing art of fashion.",
      date: "15 September 2021",
      comments: 0,
    },
  ]);

  // Update the comment count on the featured posts when the page loads
  useEffect(() => {
    const updatedPosts = posts.map((post) => {
      const storedCommentCount = localStorage.getItem(`commentCount-${post.id}`);
      const commentCount = storedCommentCount ? parseInt(storedCommentCount) : post.comments;
      return { ...post, comments: commentCount };
    });
    setPosts(updatedPosts);
  }, []); // Empty dependency array to run only once

  return (
    <div>
      <Header />
      <div className="bg-white py-12 px-12 md:px-40 border-t">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-blue-400 font-semibold text-base">Practice Advice</p>
        <h2 className="text-4xl font-bold text-gray-800 mt-2">
          Featured Posts
        </h2>
        <p className="text-gray-600 mt-4">
          Problems trying to resolve the conflict between <br /> the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Posts Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative w-full h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-sm"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold uppercase px-2 py-1 rounded">
                New
              </span>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={tag === "Google" ? "text-blue-400" : ""}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                {post.title}
              </h3>
              <p className="text-gray-600 mt-2">
                {post.description.slice(0, 100)}...
              </p>

              {/* Footer Section */}
              <div className="mt-6 flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <ClockIcon className="h-4 w-4 text-blue-400" />
                  <p>{post.date}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <ChatBubbleLeftEllipsisIcon className="h-4 w-4 text-green-800" />
                  <p>{post.comments}</p>
                </div>
              </div>

              {/* Learn More */}
              <a
                href={`/blogs/${post.id}`}
                className="mt-4 inline-flex items-center font-medium text-sm"
              >
                Learn More 
                <span className="ml-1 text-blue-400">{">"}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
}
