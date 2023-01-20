import React from 'react'
import styles from "../styles/Filter.module.css"


const Filter = ({posts, setPostsRendered}) => {

const topics = [];
    for (let i=0; i<posts.length; i++) {
    topics[i] = posts[i].frontmatter.topic;} 
    
    const filteredTopics = [... new Set(topics)];

  const filterPosts = (e) => {

    // console.log(e.target.innerHTML);

    const filteredPosts = posts.filter(post => post.frontmatter.topic === e.target.innerHTML);
    setPostsRendered(filteredPosts);
  }

  const viewAllPosts = () => {
    setPostsRendered(posts);
  }
  

  return (
    <div className={styles.filtercontainer}>
        <ul className={styles.filteritems}>
    <li className={styles.filteritem} onClick={viewAllPosts}>View All</li>
        {filteredTopics.map((topic, index) => (
          <li key={index} className={styles.filteritem}>
            <span onClick={filterPosts}>{topic}</span>
          </li>   
        ))}
   </ul>
    </div>
  )
}

export default Filter