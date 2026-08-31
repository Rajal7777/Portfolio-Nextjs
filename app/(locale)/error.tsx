"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="flex max-w-md flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-semibold">
          Something went wrong!
        </h2>

        <p className="text-sm text-muted-foreground">
          We couldn&apos;t load this page. Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
          Try again
        </button>
      </div>
    </div>
  );
}