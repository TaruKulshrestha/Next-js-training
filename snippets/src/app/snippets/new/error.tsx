"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2 className="text-xl font-bold">Something went wrong!</h2>
      <p className="my-2">{error.message}</p>
      <button onClick={reset} className="p-2 border rounded">
        Try again
      </button>
    </div>
  );
}
