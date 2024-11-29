const path = require("path");

import { getStaticProps } from "@/lib/posts";

// export default function Page() {
//   return <h1>Hello, Next.js!</h1>;
// }

export default async function Home() {
  const allPostsData = await getStaticProps();
  console.log("allPostsData: ", allPostsData);

  return (
    <section>
      <h2>Blog</h2>
      {
        <ul>
          {/* {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))} */}
        </ul>
      }
    </section>
  );
}

export const metadata = {
  title: "Your Home Page Title",
  description: "Your home page description",
};
