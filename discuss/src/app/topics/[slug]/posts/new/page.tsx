interface PostCreatePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PostCreatePage({ params }: PostCreatePageProps) {
  const { slug } = await params;

  return <div>Create Post Page — {slug}</div>;
}
