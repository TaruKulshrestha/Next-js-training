import { redirect } from "next/navigation";
import { Suspense } from "react";
import PostList from "@/components/posts/post-list";
import PostListLoading from "@/components/posts/post-list-loading";
import { fetchPostsBySearchTerm } from "@/db/queries/posts";
import paths from "@/paths";

interface SearchPageProps {
  searchParams: Promise<{
    term?: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = await searchParams;

  if (!term) {
    redirect(paths.home());
  }

  return (
    <div>
      <h1 className="text-xl m-2">Results for {term}</h1>
      <Suspense fallback={<PostListLoading />}>
        <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
      </Suspense>
    </div>
  );
}
