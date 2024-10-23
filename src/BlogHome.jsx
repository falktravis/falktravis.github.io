import { useState, useEffect } from 'react'
import './styles/BlogHome.scss'
import { Link, useLocation } from 'react-router-dom'
import matter from 'gray-matter'; // Import gray-matter here

const categoryClick = (category) => {
  console.log(category);
}

export default function BlogHome() {
  const location = useLocation(); // Access the current URL
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state
  const [isList, setIsList] = useState(true);
  const [subPage, setSubPage] = useState(null);
  const [postName, setPostName] = useState(null);

  const secondaryPost = (category, slug, className) => {
    const post = posts[category][slug];
    return (
      <Link className={`secondaryPost ${className}`} to={`/blog/${category}/${slug}`}>
        <h3>{post.title}</h3>
        <div className="subheading">
          <p id='category'>{post.category}</p>
          <p id='date'>{post.date}</p>
        </div>
        <p>{post.description}</p>
      </Link>
    );
  }
  
  const highlightPost = (category, slug) => {
    const post = posts[category][slug];
    return (
      <Link className="highlightPost" to={`/blog/${category}/${slug}`}>
        <img src={post.image} alt={post.alt} />
        <div className="text">
          <h3>{post.title}</h3>
          <div className="subheading">
            <p id='category'>{post.category}</p>
            <p id='date'>{post.date}</p>
          </div>
          <p>{post.description}</p>
        </div>
      </Link>
    );
  }

  useEffect(() => {
    const importAllPosts = async () => {
      // Import all markdown files from the specified directory
      const postModules = import.meta.glob('../public/blog/**/*.md');
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
      console.log(postList)
      setPosts(postList);
      setLoading(false);
    };

    importAllPosts();
  }, []);

  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    if (pathSegments[2]) {
      setSubPage(pathSegments[2]);
    }else{
      setSubPage(null);
    }
  }, [location]);

  if(loading){
    return <div>Loading...</div>
  }

  return (
    <>
        <main>
            <div className="head">
              <div className="searchContainer">
                <input type="text" placeholder="Search..." />
              </div>
              <div className="path">
                  <Link to='/blog'>Home</Link>
                  {subPage != null ? (
                      <>
                        <p> &#62; </p>
                        <Link to={`/blog/${subPage}`}>{subPage.charAt(0).toUpperCase() + subPage.slice(1)}</Link>
                        {postName != null ? (
                            <>
                              <p> &#62; </p>
                              <p>{postName}</p>
                            </>
                          ) : null
                        }
                      </>
                    ) : null
                  }
              </div>
            </div>
            <div className="mainDisplay">
              {subPage == null ? (
                <div className="popularContainer">
                  <div className="popularDisplay">
                    {highlightPost("books", "test")}
                    {secondaryPost("books", "test", '')}
                    {secondaryPost("books", "test", '')}
                    {secondaryPost("books", "test", "final")}
                  </div>
                </div>
              ) : (
                <div className="listings">
                  <ul>
                  {subPage == 'all' ? (Object.keys(posts).map((category) => (
                    Object.keys(posts[category]).map((slug) => {
                      const post = posts[category][slug];
                      return (
                          <li key={slug}>
                            <Link to={`/blog/${category}/${slug}`}>
                            <h3>{post.title}</h3>
                            <div className="subheading">
                              <p id='category'>{post.category}</p>
                              <p id='date'>{post.date}</p>
                            </div>
                            <p>{post.description}</p>
                            </Link>
                          </li>
                      );
                    })
                  ))) : (
                    Object.keys(posts[subPage]).map((slug) => {
                      const post = posts[subPage][slug];
                      return (
                        <li key={slug}>
                          <Link to={`/blog/${subPage}/${slug}`}>
                          <h3>{post.title}</h3>
                          <div className="subheading">
                            <p id='category'>{post.category}</p>
                            <p id='date'>{post.date}</p>
                          </div>
                          <p>{post.description}</p>
                          </Link>
                        </li>
                    )}))}
                  </ul>
                </div>
              )}
              <div className="categories">
                <div className="header">
                  <h2>Categories</h2>
                </div>
                <ul>
                  <li><Link to='/blog/all'>All Posts</Link></li>
                  <li><Link to='/blog/devlogs'>Devlogs</Link></li>
                  <li><Link to='/blog/books'>Books</Link></li>
                  <li><Link to='/blog/productivity'>Productivity</Link></li>
                  <li><Link to='/blog/other'>Other</Link></li>
                </ul>
              </div>
            </div>
        </main>
    </>
  )
}
