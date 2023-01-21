import Head from "next/head";
import Post from "../components/Post";
import Hero from "../components/Hero";
import Filter from "../components/Filter";

import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../utils";
import fs from "fs";

import { useState } from "react";

type postsProps = {
  posts: [];
};

export default function Home({ posts }: postsProps) {
  const [postsRendered, setPostsRendered] = useState(posts);

  return (
    <div>
      <Head>
        <title>Cooking Blog by Dardan</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <Filter posts={posts} setPostsRendered={setPostsRendered} />

      <div className='postscontainer'>
        {postsRendered.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
