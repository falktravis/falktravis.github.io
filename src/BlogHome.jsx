import { useState, useEffect } from 'react'
import './styles/BlogHome.scss'
import { Link } from 'react-router-dom'
import matter from 'gray-matter'; // Import gray-matter here

const categoryClick = (category) => {
  console.log(category);
}

export default function BlogHome() {
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state

  const secondaryPost = (category, slug) => {
    const post = posts[category][slug];
    return (
      <Link className="secondaryPost" to={`/posts/${category}/${slug}`}>
        <h3>{post.title}</h3>
        <div className="subheading">
          <p>{post.category}</p>
          <p>{post.date}</p>
        </div>
        <p>{post.description}</p>
      </Link>
    );
  }
  
  const highlightPost = (category, slug) => {
    const post = posts[category][slug];
    return (
      <Link className="highlightPost" to={`/posts/${category}/${slug}`}>
        <img src={post.image} alt={post.alt} />
        <div className="text">
          <h3>{post.title}</h3>
          <div className="subheading">
            <p>{post.category}</p>
            <p>{post.date}</p>
          </div>
          <p>{post.description}</p>
        </div>
      </Link>
    );
  }

  useEffect(() => {
    const importAllPosts = async () => {
      // Import all markdown files from the specified directory
      const postModules = import.meta.glob('../public/posts/**/*.md');
      const postList = {};

      for (const path in postModules) {
        const post = await postModules[path]();
        console.log(post)
        
        // Extract slug (filename without extension) and category from the path
        const slug = path.split('/').pop().replace('.md', '');
        const category = path.split('/')[3]; // Adjust this based on your folder structure

        // Initialize category key in the dictionary if it doesn't exist
        if (!postList[category]) {
          postList[category] = {};
        }

        // Add the parsed data to the list of posts
        print
        postList[category][slug] = {...(post.attributes), slug, category };
      }

      // Set the state with the list of parsed posts
      setPosts(postList);
      setLoading(false);
    };

    importAllPosts();
  }, []);

  if(loading){
    return <div>Loading...</div>
  }

  return (
    <>
        <main>
            <div className="searchContainer">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="mainDisplay">
              <div className="popularContainer">
                <div className="header">
                  <h2>Editors Choice</h2>
                </div>
                <div className="popularDisplay">
                  {highlightPost("Books", "test")}
                  <div className="secondaryPostsContainer">
                      {secondaryPost("Books", "test")}
                      {secondaryPost("Books", "test")}
                      {secondaryPost("Books", "test")}
                  </div>
                </div>
              </div>
              <div className="categories">
                <div className="header">
                  <h2>Categories</h2>
                </div>
                <ul>
                  <li><button onClick={categoryClick('devlogs')}>Devlogs</button></li>
                  <li><button onClick={categoryClick('books')}>Books</button></li>
                  <li><button onClick={categoryClick('productivity')}>Productivity</button></li>
                  <li><button onClick={categoryClick('other')}>Other</button></li>
                </ul>
              </div>
            </div>
            <div className="listings">
              <div className="header">
                <h2>All Posts</h2>
              </div>
              <ul>
              {Object.keys(posts).map((category) => (
                Object.keys(posts[category]).map((slug) => {
                  const post = posts[category][slug];
                  return (
                      <li key={slug}>
                        <Link to={`/posts/${category}/${slug}`}>
                        <h3>{post.title}</h3>
                        <div className="subheading">
                          <p>{post.category}</p>
                          <p>{post.date}</p>
                        </div>
                        <p>{post.description}</p>
                        </Link>
                      </li>
                  );
                })
              ))}
              </ul>
            </div>
        </main>
    </>
  )
}
