

import { createContext, useContext, useState } from "react";




// export const BlogPostContext =  createContext({});


// export function useBlogPosts() {
//     return useContext(BlogPostContext);
// }



export function BlogPostProvider({children}) {

  
    return (
        <BlogPostContext.Provider
        value={posts
          
        }>
            {children}
        </BlogPostContext.Provider>
    )
}

