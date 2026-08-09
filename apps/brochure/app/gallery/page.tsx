import type { Metadata } from "next";

import { appConfig } from "@tkb/config";

export const metadata: Metadata = {
  title: `Gallery | ${appConfig.brandName}`,
};

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Gallery</h1>

        <p className="mt-2 text-muted-foreground">
          A look at finished pieces and past custom builds.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex aspect-square items-center justify-center rounded-2xl border bg-muted/30 text-sm text-muted-foreground"
          >
            Photo coming soon
          </div>
        ))}
      </div>
    </main>
  );
}
