import BlogCardList from "./components/blogCardList/BlogCardList";
import { BlogData } from "./types/types";

async function getBlogAllData() {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  const blogAllData: BlogData[] = await response.json();

  return blogAllData;
}

export default async function Home() {
  const blogAllData = await getBlogAllData();
  return (
    <main className="flex min-h-screen justify-between gap-4 py-24">
      <BlogCardList blogAllData={blogAllData} />
    </main>
  );
}
