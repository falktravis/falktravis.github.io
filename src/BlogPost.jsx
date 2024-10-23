import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import matter from 'gray-matter';
import { marked } from 'marked';
import profilePic from '/images/FavIcon.png';
import './styles/BlogPost.scss';
import {Helmet} from "react-helmet";

const BlogPost = () => {
  const location = useLocation(); // Access the current URL
  const { category, slug } = useParams();
  const [content, setContent] = useState('');
  const [metadata, setMetadata] = useState({});
  const [subPage, setSubPage] = useState(null);
  const [toc, setToc] = useState([]);

  useEffect(() => {
    const loadMarkdown = async () => {
      // Fetch raw markdown content from the file
      const rawMarkdown = await fetch(`/blog/${category}/${slug}.md`).then(res => res.text());

      // Array to hold the TOC items
      const newToc = [];

      // Custom marked renderer to handle heading elements
      const renderer = new marked.Renderer();

      // Override heading rendering
      renderer.heading = (element) => {
        console.log(element);
        let text = element.text
        let level = element.depth
        // Create a slug for the heading to use as an anchor
        const slugifiedText = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

        // Add the heading to TOC only for level 2 and 3
        if (level === 2 || level === 3) {
          newToc.push({ text, level, slug: slugifiedText });
          return `<h${level} id="${slugifiedText}">${text}</h${level}>`; // Return heading with id
        }

        // Default heading handling if not part of TOC
        return `<h${level}>${text}</h${level}>`;
      };

      // Parse the markdown content
      const { data, content } = matter(rawMarkdown);
      const parsedContent = marked(content, { renderer });

      // Set the content and the TOC
      setMetadata(data);
      setContent(parsedContent);
      setToc(newToc);
    };

    loadMarkdown();
  }, [category, slug]);

  // Smooth scroll function
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    if (pathSegments[2]) {
      setSubPage(pathSegments[2]);
    }else{
      setSubPage(null);
    }
  }, [location]);

  return (
    <main>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>
      <div className="path">
        <Link to='/blog'>Home</Link>
        {subPage != null ? (
            <>
              <p> &#62; </p>
              <Link to={`/blog/${subPage}`}>{subPage}</Link>
              <p> &#62; </p>
              <p>{metadata.title}</p>
            </>
          ) : null
        }
      </div>
      <div className="contentContainer">
        <div className="content">
          {metadata.image ? <img src={metadata.image} alt={metadata.alt} /> : null}
          <div className="title">
            <h1>{metadata.title}</h1>
            <div className="author">
              <img src={profilePic} alt="Travis Falk Profile Photo" />
              <div className="subheader">
                <h2>Travis Falk</h2>
                <p>{metadata.length} - {metadata.date}, {metadata.timestamp}</p>
              </div>
            </div>
          </div>
          <p id='description'>{metadata.description}</p>
          <div
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        <aside className="info">
        {toc.length > 0 && (
            <div className="toc">
              <ul>
                {toc.map((item, index) => (
                  <li key={index} id={"level" + item.level}>
                    <a
                      href={`#${item.slug}`}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default link behavior
                        scrollToElement(item.slug); // Smooth scroll to the heading
                      }}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
      </aside>
      </div>
    </main>
  );
};

export default BlogPost;