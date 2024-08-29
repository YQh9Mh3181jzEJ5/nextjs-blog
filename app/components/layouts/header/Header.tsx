import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3 md:py-6">
        <div className="flex items-center justify-between">
          {/* Title */}
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            My Web-Dev Blog
          </Link>
          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <div className="space-x-6">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
            </div>
            <Link
              className="bg-black py-2 px-4 text-white rounded-md font-medium hover:bg-gray-800 transition-colors"
              href="/bbs-posts/create"
            >
              Create Post
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
