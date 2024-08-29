import { BlogData } from "@/app/types/types";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { formatDate } from "@/app/utils/formatDate";

async function getDetailBlogData(id: number) {
  const response = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store",
  });

  const blogDetailData: BlogData = await response.json();

  return blogDetailData;
}

const BlogDetailPage = async ({ params }: { params: { blogId: number } }) => {
  const blogDetailData = await getDetailBlogData(params.blogId);
  const { title, content, username, createdAt } = blogDetailData;

  return (
    <div className="container mx-auto max-w-4xl pt-24 px-4 space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="space-y-2">
          <CardTitle className="text-3xl font-bold text-gray-800">
            {title}
          </CardTitle>
          <CardDescription className="text-sm text-gray-500 flex flex-col">
            <span>{username}</span>
            <span>{formatDate(createdAt)}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>{content}</CardContent>
      </Card>
      <Link href="/" className="inline-block">
        <Button variant="outline" className="flex items-center space-x-2">
          <ArrowLeft size={16} />
          <span>戻る</span>
        </Button>
      </Link>
    </div>
  );
};

export default BlogDetailPage;
