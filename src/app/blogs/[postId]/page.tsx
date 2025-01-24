"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ClockIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";

// Define a type for Post data
interface Post {
  id: number;
  image: string;
  title: string;
  tags: string[];
  description: string;
  date: string;
  comments: { username: string; avatar: string; text: string }[];
}

const posts: Post[] = [
    {
      id: 1,
      image: "/images/blog-1.png",
      title: "10 Ways to Style a Little Black Dress for Any Occasion",
      tags: ["Fashion", "Trending", "Style"],
      description:
        "The little black dress (LBD) is a timeless wardrobe essential, and its versatility makes it perfect for any event. For a casual day out, pair your LBD with sneakers and a denim jacket for an effortlessly chic vibe. Swap the sneakers for strappy sandals, add a bold necklace, and you’re ready for a lunch date. Want to make it work for the office? Throw on a structured blazer, classic pumps, and a leather tote to keep it professional yet stylish.\n\nFor evening occasions, amp up the glamour with statement earrings, metallic heels, and a sleek clutch. If you're heading to a formal event, opt for a floor-length black dress and accessorize with pearls or diamonds for a touch of elegance. Experiment with layering too—pair your LBD with a turtleneck underneath during colder months or a lightweight scarf for a breezy summer night.",
      date: "22 April 2021",
      comments: [],
    },
    {
      id: 2,
      image: "/images/blog-2.png",
      title: "Best Dresses for Summer Weddings",
      tags: ["Weddings", "Trending", "Summer"],
      description:
        "Summer weddings call for light, breathable fabrics and bright or pastel hues that capture the season's warmth. Maxi dresses with floral prints are a classic choice, offering a flowy and romantic vibe perfect for an outdoor garden wedding. For a beach ceremony, opt for lightweight chiffon or linen dresses in breezy silhouettes to stay cool and stylish.\n\nIf the wedding theme is formal, a sleek satin or silk dress in soft pastel shades like blush, mint, or lavender will give you an elegant look. Don’t forget to accessorize thoughtfully—minimalist jewelry and strappy sandals pair perfectly with summer dresses. Remember, summer weddings are all about finding the balance between comfort and sophistication.",
      date: "15 May 2021",
      comments: [],
    },
    {
      id: 3,
      image: "/images/blog-3.png",
      title: "Runway to Real Life: Making Designer Dresses Work for You",
      tags: ["Fashion", "Designer", "Style"],
      description:
        "Designer dresses often exude drama and creativity, but translating those bold runway looks into everyday wear can be a challenge. Start by simplifying the look—strip away the over-the-top accessories and style the dress with neutral pieces. For example, a statement dress with extravagant ruffles can be balanced with sleek, minimal shoes and a plain handbag for a polished look.\n\nAnother tip is to use layering strategically. Pair a daring designer dress with a tailored blazer, belt it to define your waist, or wear it with subtle leggings or tights for a more approachable feel. By blending statement pieces with casual or understated wardrobe staples, you can seamlessly bring high fashion into your everyday life.",
      date: "01 June 2021",
      comments: [],
    },
    {
      id: 4,
      image: "/images/blog-4.png",
      title: "Sustainable Dresses: How to Shop Responsibly",
      tags: ["Sustainability", "Fashion", "Eco-friendly"],
      description:
        "Sustainability is becoming increasingly important in fashion, and shopping for eco-friendly dresses is a great way to reduce your environmental impact. Look for brands that prioritize organic or recycled fabrics, such as organic cotton, bamboo, or Tencel. These materials not only have a lower environmental footprint but are also incredibly comfortable to wear.\n\nAnother key tip is to invest in quality over quantity. A well-made dress may cost more upfront but will last much longer, saving you money in the long run and reducing waste. Shopping secondhand or supporting local, ethical brands is another excellent way to embrace sustainability while looking fabulous.",
      date: "10 July 2021",
      comments: [],
    },
    {
      id: 5,
      image: "/images/blog-5.png",
      title: "How to Transform an Old Dress Into Something New",
      tags: ["DIY", "Fashion", "Upcycling"],
      description:
        "Don’t let old dresses collect dust in your closet—transform them into something fresh and stylish. Start with simple DIY hacks, such as adding embellishments like lace, beads, or patches to give your dress a new look. Shortening a maxi dress to create a chic midi or mini dress is another great way to revamp your wardrobe.\n\nFor a more dramatic transformation, consider dyeing your dress in a bold new color or experimenting with creative cuts. For example, turning a plain sleeveless dress into an off-shoulder piece or adding bell sleeves can completely change its vibe. With a little creativity, you can breathe new life into old favorites and create one-of-a-kind pieces.",
      date: "20 August 2021",
      comments: [],
    },
    {
      id: 6,
      image: "/images/blog-6.png",
      title: "The Evolution of Evening Dresses Through the Decades",
      tags: ["Fashion History", "Style", "Trends"],
      description:
        "Evening dresses have undergone remarkable transformations over the decades, reflecting societal trends and cultural shifts. In the 1920s, flapper-style dresses with intricate beading and shorter hemlines became a symbol of rebellion and liberation. The 1950s brought a return to glamour, with hourglass silhouettes, full skirts, and luxurious fabrics dominating the fashion scene.\n\nFast forward to the 1980s, when bold colors, puffed sleeves, and dramatic embellishments took center stage. Today, evening wear continues to evolve, blending timeless elegance with modern minimalism. From classic gowns inspired by old Hollywood to sleek, contemporary designs, evening dresses remain a testament to the ever-changing art of fashion.",
      date: "15 September 2021",
      comments: [],
    },
  ];



// Function to get a post by ID
async function getPostById(id: string): Promise<Post | undefined> {
  return posts.find((post) => post.id === parseInt(id));
}

export default function BlogDetail({ params }: { params: Promise<{ postId: string }> }) {
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Post["comments"]>([]);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);

  useEffect(() => {
    async function fetchPost() {
      const { postId } = await params; // Unwrap the Promise
      if (!postId) return;

      const fetchedPost = await getPostById(postId);
      if (!fetchedPost) notFound();
      setPost(fetchedPost);

      // Load comments from localStorage
      const storedComments = localStorage.getItem(`comments-${postId}`);
      setComments(storedComments ? JSON.parse(storedComments) : []);
    }

    fetchPost();
  }, [params]);

  // Handle comment form submission
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() === "" || username.trim() === "" || !avatar) return;

    // Create a URL for the uploaded avatar
    const avatarUrl = URL.createObjectURL(avatar);

    const updatedComments = [...comments, { username, avatar: avatarUrl, text: newComment }];
    setComments(updatedComments);
    setNewComment("");
    setUsername("");
    setAvatar(null);

    // Save comments to localStorage
    localStorage.setItem(`comments-${post?.id}`, JSON.stringify(updatedComments));

    // Update the comment count on the previous page (localStorage)
    const storedCommentCount = localStorage.getItem(`commentCount-${post?.id}`);
    const newCount = storedCommentCount ? parseInt(storedCommentCount) + 1 : 1;
    localStorage.setItem(`commentCount-${post?.id}`, newCount.toString());
  };

  if (!post) return null;

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 md:px-40">
      {/* Back Button */}
      <div className="mb-8">
        <a
          href="/"
          className="text-[#45bbed] font-medium text-sm inline-flex items-center hover:underline"
        >
          &larr; Back to All Posts
        </a>
      </div>

      {/* Blog Header Section */}
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        <div className="relative w-full h-48 md:h-64">
          <Image
            src={post.image}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-t-md"
          />
        </div>
        <div className="p-6 md:p-12">
          <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
            <div className="flex items-center space-x-2">
              <ClockIcon className="h-4 w-4 text-blue-400" />
              <p>{post.date}</p>
            </div>
            <div className="flex items-center space-x-2">
              <ChatBubbleLeftEllipsisIcon className="h-4 w-4 text-green-800" />
              <p>{comments.length} comments</p>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">{post.title}</h1>
          <div className="flex flex-wrap space-x-2 mb-6">
            {post.tags.map((tag: string, index: number) => (
              <span key={index} className="bg-blue-100 text-[#45bbed] text-xs font-medium px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed text-base">{post.description}</p>
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-white shadow-md rounded-md overflow-hidden mt-8 p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Comments</h2>
        {comments.length > 0 ? (
          <ul className="space-y-4">
            {comments.map((comment, index) => (
              <li key={index} className="p-4 bg-gray-100 rounded-md text-gray-700">
                <div className="flex items-center mb-2 space-x-4">
                  <Image src={comment.avatar} alt={comment.username} width={40} height={40} className="rounded-full" />
                  <span className="font-bold text-gray-800">{comment.username}</span>
                </div>
                <p>{comment.text}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}

        {/* Comment Form */}
        <form onSubmit={handleCommentSubmit} className="mt-6 space-y-4">
          <input
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#45bbed] focus:outline-none"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#45bbed] focus:outline-none"
            onChange={(e) => setAvatar(e.target.files ? e.target.files[0] : null)}
          />
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-[#45bbed] focus:outline-none"
            rows={4}
            placeholder="Write your comment here..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-[#45bbed] text-white rounded-md hover:bg-[#45bbed] transition"
          >
            Submit Comment
          </button>
        </form>
      </div>
    </div>
  );
}
