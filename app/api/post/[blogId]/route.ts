import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { blogId: string } }
) {
  const blogId = params.blogId;
  const blogDetailData = await prisma.post.findUnique({
    where: { id: parseInt(blogId) },
  });
  return NextResponse.json(blogDetailData);
}
