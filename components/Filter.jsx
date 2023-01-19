import React from 'react'
import styles from "../styles/Filter.module.css"
const Filter = ({posts}) => {
  return (
    <div className={styles.filtercontainer}>
        <ul className={styles.filteritems}>
        {posts.map((post, index) => (
          <li key={index} className={styles.filteritem}>
            {post.frontmatter.topic}
          </li>   
        ))}
   </ul>
    </div>
  )
}

export default Filter