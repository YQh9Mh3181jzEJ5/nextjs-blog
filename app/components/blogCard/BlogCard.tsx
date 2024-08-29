import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const BlogCard = () => {
  return (
    <Card className="w-2/3">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corporis
        quo necessitatibus nulla quidem distinctio quas quaerat, saepe voluptas
        eveniet voluptatum ex dolorem consequuntur cum ea aliquam fugiat
        accusamus pariatur.
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link
          href="/blog-posts/1"
          className="text-blue-500 hover:text-blue-400"
        >
          Read More...
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
