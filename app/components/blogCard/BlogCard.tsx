import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { BlogData } from "../../types/types";
import { formatDate } from "@/app/utils/formatDate";

interface BlogDataProps {
  blogData: BlogData;
}

const BlogCard = ({ blogData }: BlogDataProps) => {
  const { title, content, createdAt, username, id } = blogData;
  return (
    <Card className="w-2/3">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-sm text-gray-500 flex flex-col">
          <span>{username}</span>
          <span>{formatDate(createdAt)}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex justify-between">
        <Link
          href={`/blog-posts/${id}`}
          className="text-blue-500 hover:text-blue-400"
        >
          もっと見る
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
