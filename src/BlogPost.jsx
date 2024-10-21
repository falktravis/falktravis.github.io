import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import matter from 'gray-matter';
import { marked } from 'marked';

const BlogPost = () => {
  const { category, slug } = useParams();
  const [content, setContent] = useState('');
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    const loadMarkdown = async () => {
      const response = await fetch(`/posts/${category}/${slug}.md`); // Adjust path if necessary
      const raw = await response.text();
      const { data, content } = matter(raw);
      setContent(marked(content));
      console.log(marked(content))
      setMetadata(data);
    };

    loadMarkdown();
  }, [category, slug]);

  return (
    <div>
      <h1>{metadata.title}</h1>
      <p>{metadata.date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default BlogPost;