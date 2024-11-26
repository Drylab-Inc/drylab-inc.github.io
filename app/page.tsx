import { Card } from "@/components/home/card";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import Link from "next/link";
import { nFormatter } from "@/lib/utils";
import Cells from "./../public/cells.png";
import Browser from "./../public/browser.png";
import Niove from "./../public/niove.png";

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
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Your research deserves better software
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          Our vision is to increase the rate of discovery by improving <br />{" "}
          every scientific software niche.
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            href="#contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Contact Us</p>
          </a>
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
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
        className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text pt-80 text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-5xl md:leading-[5rem]"
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
        className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text pt-80 text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-5xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        Contact Us
      </h1>
      <p
        className="mt-6 max-w-xl animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        Need a software interface for your workflow, or legacy scientific
        software modernized?
      </p>
      <div
        className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 pb-32 opacity-0"
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      >
        <a
          className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border  border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
          href="#contact"
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
      "Keyboard shortcuts and beautiful design for incredible user experience.",
    large: true,
    demo: <Image alt="" src={Cells} height={400} />,
  },
  {
    title: "Performance first",
    description:
      "The days of slow, legacy scientific software are finally over.",
    demo: <WebVitals />,
  },
];

const apps = [
  {
    title: "[Vasco](https://vasco.drylab.bio)",
    description: "The most complete genome utilities & browser",
    demo: (
      <Link href="https://vasco.drylab.bio)">
        <Image alt="" src={Browser} height={200} className="pt-4" />
      </Link>
    ),
  },
  {
    title: "Coming soon: Niove",
    description:
      "Powerful, user-friendly image processing software with a gentle learning curve",
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