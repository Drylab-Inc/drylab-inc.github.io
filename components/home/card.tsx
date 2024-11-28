import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";

export function CardSecond({
  title,
  description,
  demo,
  large,
}: {
  title: string;
  description: string;
  demo: ReactNode;
  large?: boolean;
}) {
  return (
    <div
      className={`relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md ${
        large ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex h-60 items-start justify-start pb-10">{demo}</div>
      <div className="mx-auto max-w-lg text-center">
        <h1 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent [text-wrap:balance] md:text-3xl md:font-normal">
          <ReactMarkdown>{title}</ReactMarkdown>
        </h1>
        <div className="prose-sm mt-3 leading-normal text-gray-500 [text-wrap:balance] md:prose">
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => (
                <a
                  target="_blank"
                  {...props}
                  className="font-medium text-gray-800 underline transition-colors"
                />
              ),
              code: ({ node, ...props }) => (
                <code
                  {...props}
                  // @ts-ignore (to fix "Received `true` for a non-boolean attribute `inline`." warning)
                  inline="true"
                  className="rounded-sm bg-gray-100 px-1  py-0.5 font-mono font-medium text-gray-800"
                />
              ),
            }}
          >
            {description}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export function Card({
  title,
  description,
  demo,
  large,
}: {
  title: string;
  description: string;
  demo: React.ReactNode;
  large?: boolean;
}) {
  return (
    <div
      className={`relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md ${
        large ? "md:col-span-2" : ""
      }`}
    >
      {/* Background demo element */}
      <div className="absolute inset-0 z-10 flex items-start justify-center md:pb-6">
        {demo}
      </div>

      {/* Content overlay */}
      <div className="relative z-20 flex h-full flex-col justify-end p-6">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-2xl font-bold text-transparent [text-wrap:balance] hover:underline md:text-4xl">
            <ReactMarkdown>{title}</ReactMarkdown>
          </h2>
          <div className="prose-lg mt-4 leading-normal text-gray-600 [text-wrap:balance]">
            <ReactMarkdown
              components={{
                a: ({ node, ...props }) => (
                  <a
                    target="_blank"
                    {...props}
                    className="font-medium text-gray-800 underline transition-colors"
                  />
                ),
                code: ({ node, ...props }) => (
                  <code
                    {...props}
                    // @ts-ignore (to fix "Received `true` for a non-boolean attribute `inline`." warning)
                    inline="true"
                    className="rounded-sm bg-gray-100 px-1 py-0.5 font-mono font-medium text-gray-800"
                  />
                ),
              }}
            >
              {description}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
