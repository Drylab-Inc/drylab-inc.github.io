import { Card } from "@/components/home/card";
// import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import Link from "next/link";
import { nFormatter } from "@/lib/utils";
import Cells from "@/public/commandK.png";
import Browser from "@/public/browser.png";
import Niove from "@/public/niove.png";

export default async function Home() {
  return (
    <>
      <div className="z-10 w-full max-w-6xl  px-5 pb-10 pt-24 xl:px-0">
        <a
          href="https://twitter.com/drylab_bio"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <Twitter className="h-5 w-5 text-[#1d9bf0]" />
          <p className="text-sm font-semibold text-[#1d9bf0]">
            Introducing Drylab
          </p>
        </a>
        <h1
          className="animate-fade-up bg-gradient-to-br from-foreground to-foreground/30 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Your research deserves better software
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-foreground/30 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          We engineer intelligent software platforms that amplify the pace of
          scientific research by making sophisticated tools intuitive and
          user-friendly.
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-foreground bg-foreground px-5 py-2 text-sm text-background transition-colors hover:bg-background hover:text-foreground"
            href="mailto:hi@effie.bio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Contact Us</p>
          </a>
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-secondary bg-background px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://github.com/steven-tey/precedent"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <Github /> */}
            <p>
              Learn More
              {/* <span className="hidden sm:inline-block">Star on</span> GitHub{" "}
              <span className="font-semibold">{nFormatter(stars)}</span> */}
            </p>
          </a>
        </div>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title!}
            description={description}
            demo={
              title === "Beautiful, reusable components" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
            large={large}
          />
        ))}
      </div>

      <h1
        className="animate-fade-up bg-gradient-to-br from-foreground to-foreground/30 bg-clip-text pt-80 text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-5xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        Products
      </h1>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {apps.map(({ title, description, demo }) => (
          <Card
            key={title}
            title={title!}
            description={description}
            demo={
              title === "Beautiful, reusable components" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
          />
        ))}
      </div>

      <h1
        className="animate-fade-up bg-gradient-to-br from-foreground to-foreground/30 bg-clip-text pt-80 text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-5xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        Contact Us
      </h1>
      <p
        className="mt-6 max-w-xl animate-fade-up text-center text-foreground/30 opacity-0 [text-wrap:balance] md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        Want to enhance a specific research tool or reimagine your scientific
        software landscape? Let us Know.
      </p>
      <div
        className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 pb-32 opacity-0"
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      >
        <a
          className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border  border-foreground bg-foreground px-5 py-2 text-sm text-background transition-colors hover:bg-foreground/30 hover:text-foreground"
          href="mailto:hi@effie.bio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Contact Us</p>
        </a>
      </div>
    </>
  );
}

const features = [
  {
    title: "Beautiful, functional software",
    description:
      "Breaking free from legacy scientific software. Intuitive interfaces, beautiful design.",
    large: true,
    demo: <Image alt="" src={Cells} height={400} />,
  },
  {
    title: "Performance first",
    description: "Science moves fast. Your software should too.",
    demo: <WebVitals />,
  },
];

const apps = [
  {
    title: "[Vasco](https://vasco.drylab.bio)",
    description: "Redefining genomic browsing with unparalleled utility",
    demo: (
      <Link href="https://vasco.drylab.bio)">
        <Image alt="" src={Browser} height={200} className="pt-4" />
      </Link>
    ),
  },
  {
    title: "Coming soon: Niove",
    description:
      "Complex image processing, rendered elegantly simple. ImageJ reimagined.",
    demo: <Image alt="" src={Niove} height={400} />,
  },
  {
    title: "Many more to come",
    description:
      "After something specific? [Make a Request](mailto:hi@effie.bio)",
    demo: (
      <div className="p-24">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-plus"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      </div>
    ),
  },
];
