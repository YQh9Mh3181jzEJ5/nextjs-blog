import { PrismaClient } from "@prisma/client/extension";
import BlogCardList from "./components/blogCardList/BlogCardList";
import prisma from "../lib/prismaClient";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  return (
    <main className="flex min-h-screen justify-between gap-4 py-24">
      <BlogCardList />
    </main>
  );
}
