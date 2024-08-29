"use server";
import { z } from "zod";
import prisma from "@/lib/prismaClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { formSchema } from "../blog-posts/create/schema";

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
