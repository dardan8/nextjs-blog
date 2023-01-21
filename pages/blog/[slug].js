import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import styles from "../../styles/BlogPostLayout.module.css";

export default function PostPage({
  frontmatter: { title, date, cover_image, topic, excerpt },
  slug,
  content,
}) {
  return (
    <div className='container'>
      <Link href='/'>
        <button className='button-primary'>Go back</button>{" "}
      </Link>
      <div className={styles.blogheader}>
        <div className={styles.blogheader__left}>
          <h1>{title}</h1>
          <p> Posted on {date}</p>
          <p>{excerpt}</p>
        </div>
        <img
          src={`/nextjs-blog/${cover_image}`}
          className={styles.blogfeaturedimage}
        />
      </div>
      <div className='post-body'>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
