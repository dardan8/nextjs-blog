import Link from "next/link";
import Image from "next/image";
type postsProps = {
  post: {};
  frontmatter: any;
};

export default function Post({ post }: postsProps) {
  return (
    <div className='card'>
      <Image
        width='350'
        height='150'
        src={post.frontmatter.cover_image}
        alt='Cover image food'
      />

      <div className='post-date'>Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`} legacyBehavior>
        <a className='btn'>Read More</a>
      </Link>
    </div>
  );
}
