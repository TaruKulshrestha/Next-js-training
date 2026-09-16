import { Skeleton } from "@nextui-org/react";

export default function CommentListLoading() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-16 w-full" />
      <Skeleton className="h-16 w-full" />
      <Skeleton className="h-16 w-full" />
    </div>
  );
}
