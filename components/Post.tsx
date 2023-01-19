import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Post.module.css";
import { RiArrowRightUpLine } from "react-icons/ri";
type postsProps = {
  post: {};
  frontmatter: any;
};

export default function Post({ post }: postsProps) {
  return (
    <div className={styles.card}>
      <Image
        width='400'
        height='200'
        src={post.frontmatter.cover_image}
        alt='Cover image food'
        className='blogpost-featuredimage'
      />

      <div className={styles.blogpost_metadata}>
        Posted on {post.frontmatter.date}
      </div>

      <h3 className={styles.heading3}>{post.frontmatter.title}</h3>

      <p className={styles.excerpt_text}>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`} legacyBehavior>
        <a className={styles.readmore_cta}>
          <span>Read More</span>
          <RiArrowRightUpLine className={styles.readmore_icon} />
        </a>
      </Link>
    </div>
  );
}
