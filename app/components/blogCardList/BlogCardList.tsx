import { BlogData } from "@/app/types/types";
import BlogCard from "../blogCard/BlogCard";

interface BlogAllDataProps {
  blogAllData: BlogData[];
}

const BlogCardList = ({ blogAllData }: BlogAllDataProps) => {
  return (
    <div className="container flex flex-col items-center gap-4">
      {blogAllData.map((blogData: BlogData) => (
        <BlogCard key={blogData.id} blogData={blogData} />
      ))}
    </div>
  );
};

export default BlogCardList;
