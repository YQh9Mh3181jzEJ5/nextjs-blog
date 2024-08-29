import BlogCardList from "./components/blogCardList/BlogCardList";
import { BlogData } from "./types/types";
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
async function getBlogAllData() {
  const response = await fetch(`${apiUrl}/api/post`, {
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
