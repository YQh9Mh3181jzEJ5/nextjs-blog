"use server";
import { z } from "zod";
import { formSchema } from "../blog-posts/create/page";
import prisma from "@/lib/prismaClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const postBlog = async ({
  username,
  title,
  content,
}: z.infer<typeof formSchema>) => {
  await prisma.post.create({
    data: {
      username,
      title,
      content,
    },
  });

  revalidatePath("/");
  redirect("/");
};
