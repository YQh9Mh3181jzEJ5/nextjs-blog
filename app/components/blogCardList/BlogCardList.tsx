import BlogCard from "../blogCard/BlogCard";

const BlogCardList = () => {
  return (
    <div className="container flex flex-col items-center gap-4 bg-blue-900">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default BlogCardList;
