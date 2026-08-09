import type { Metadata } from "next";

import { appConfig } from "@tkb/config";

export const metadata: Metadata = {
  title: `About | ${appConfig.brandName}`,
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold">About {appConfig.brandName}</h1>

        <p className="mt-6 text-muted-foreground">
          {appConfig.brandName} builds premium knives for everyday carry,
          hunting, outdoor use, and collecting. Every piece is made with
          an eye for craftsmanship, function, and materials that hold up
          to real use.
        </p>

        <p className="mt-4 text-muted-foreground">
          More of the story goes here — background, shop photos, and the
          people behind the builds.
        </p>
      </div>
    </main>
  );
}
