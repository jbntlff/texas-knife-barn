import type { Metadata } from "next";
import Image from "next/image";

import { appConfig } from "@tkb/config";

export const metadata: Metadata = {
  title: `About | ${appConfig.brandName}`,
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="text-3xl font-bold">Our Story</h1>

      <div className="mt-6 grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border lg:order-1">
          <Image
            src="/images/poor-hammer.jpeg"
            alt="Glowing forged steel being shaped under a power hammer"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="lg:order-2">
          <p className="text-muted-foreground">
            {appConfig.brandName} was built around a simple idea:{" "}
            <strong className="font-semibold text-foreground">
              a good knife should be more than something you buy—it should
              be something you appreciate.
            </strong>
          </p>

          <p className="mt-4 text-muted-foreground">
            We have always believed there is something special about a
            well-made knife. The balance in the hand, the feel of the
            handle, the shape of the blade, the character of the steel, and
            the small details that make each piece unique all come together
            to create something that is both functional and personal.
          </p>

          <p className="mt-4 text-muted-foreground">
            Our roots are in Texas, where hard work, self-reliance,
            craftsmanship, and a connection to the outdoors are part of the
            culture. Those values are at the heart of {appConfig.brandName}.
          </p>
        </div>
      </div>

      <div className="mt-10 grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-xl font-semibold">The Craft</h2>

          <p className="mt-4 text-muted-foreground">
            We focus on knives that combine{" "}
            <strong className="font-semibold text-foreground">
              function, craftsmanship, and distinctive design
            </strong>
            . Our collection includes Legacy Series knives, Performance Series
            designs, and Signature Series pieces, giving customers an
            opportunity to find a knife that fits the way they intend to use
            it.
          </p>

          <p className="mt-4 text-muted-foreground">
            For us, handcrafted doesn&rsquo;t mean simply making something by
            hand. It means paying attention to the details that matter.
          </p>

          <p className="mt-4 text-muted-foreground">
            Blade geometry. Steel selection. Handle materials. Fit and
            finish. Balance. Ergonomics.
          </p>

          <p className="mt-4 text-muted-foreground">
            Every one of these elements contributes to the finished knife.
          </p>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border">
          <Image
            src="/images/the-craft.jpg"
            alt="Handcrafted folding knife with an engraved bolster and mother-of-pearl handle"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-10 grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border lg:order-1">
          <Image
            src="/images/milinski-lab.jpeg"
            alt="Knife blade blanks and hand tools laid out on a maker's workbench"
            fill
            className="object-cover"
          />
        </div>

        <div className="lg:order-2">
          <h2 className="text-xl font-semibold">Made to Be Yours</h2>

          <p className="mt-4 text-muted-foreground">
            One of the things that makes a handcrafted knife special is its
            individuality.
          </p>

          <p className="mt-4 text-muted-foreground">
            Different steels, Damascus patterns, handle materials, finishes,
            and configurations can transform the same basic design into
            something completely different. We appreciate that individuality
            and believe a knife should have a personality of its own.
          </p>

          <p className="mt-4 text-muted-foreground">
            Whether you&rsquo;re looking for a dependable hunting knife, an
            everyday carry, a working blade, or a distinctive piece for your
            collection, we want you to find something that feels like{" "}
            <strong className="font-semibold text-foreground">
              your knife
            </strong>
            .
          </p>
        </div>
      </div>

      <div className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold">More Than a Knife</h2>

        <p className="mt-4 text-muted-foreground">
          We understand that many people who buy a quality knife
          aren&rsquo;t simply looking for another tool.
        </p>

        <p className="mt-4 text-muted-foreground">
          A knife can become part of a hunt, a camping trip, a day on the
          ranch, a working life, or a family tradition. It can be something
          handed from one generation to the next.
        </p>

        <p className="mt-4 text-muted-foreground">
          That&rsquo;s why we take the selection of the knives we offer
          seriously.
        </p>

        <p className="mt-4 text-muted-foreground">
          We want {appConfig.brandName} to be a place where people who
          appreciate knives can discover something special—whether they are
          experienced collectors or simply looking for their first really
          good knife.
        </p>
      </div>

      <div className="mt-10 grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-xl font-semibold">Our Promise</h2>

          <p className="mt-4 text-muted-foreground">
            We&rsquo;re committed to offering knives that represent the
            qualities we value most:
          </p>

          <p className="mt-4 text-lg font-semibold text-foreground">
            Quality. Craftsmanship. Function. Character.
          </p>

          <p className="mt-4 text-muted-foreground">
            We&rsquo;re proud of our Texas roots, proud of the makers whose
            work we represent, and proud to build a company around something
            we genuinely appreciate.
          </p>

          <p className="mt-4 text-muted-foreground">
            Welcome to{" "}
            <strong className="font-semibold text-foreground">
              {appConfig.brandName}
            </strong>
            .
          </p>
        </div>

        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border">
          <Image
            src="/images/Brian-Joel-Bill.jpeg"
            alt={`The people behind ${appConfig.brandName}`}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-10 max-w-3xl">
        <p className="text-lg font-semibold text-foreground">
          Built with purpose. Crafted with character. Made to last.
        </p>
      </div>
    </main>
  );
}
