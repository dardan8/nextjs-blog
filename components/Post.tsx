import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Post.module.css";
import { RiArrowRightUpLine } from "react-icons/ri";

type postsProps = {
  post: {
    slug: string;
    frontmatter: any;
  };
};

export default function Post({ post }: postsProps) {
  return (
    <Link href={`/blog/${post.slug}`} legacyBehavior>
      <div className={styles.card}>
        <Image
          width='400'
          height='200'
          src={`/nextjs-blog/${post.frontmatter.cover_image}`}
          alt='Cover image food'
          className='blogpost-featuredimage'
        />

        <div className={styles.blogpost_metadata}>
          <p>Posted on {post.frontmatter.date}</p>
          <p>{post.frontmatter.topic}</p>
        </div>
        <h3 className={styles.heading3}>{post.frontmatter.title}</h3>

        <p className={styles.excerpt_text}>{post.frontmatter.excerpt}</p>

        <span className={styles.readmore_cta}>
          Read More
          <RiArrowRightUpLine className={styles.readmore_icon} />
        </span>
      </div>
    </Link>
  );
}
