import React from 'react'
import './styles/ReadingList.scss'

export default function ReadingList() {
    const books = [
        {
            title: 'The Stand',
            author: 'Stephen King',
        },
        {
            title: 'The Mom Test',
            author: 'Rob Fitzpatrick',
            blogPost: '/blog/books/the-mom-test',
        },
        {
            title: 'Ghenghis Lords of the Bow',
            author: 'Conn Iggulden',
        },
        {
            title: 'In The Plex',
            author: 'Steven Levy',
        },
        {
            title: 'The Hard Thing About Hard Things',
            author: 'Ben Horowitz',
        },
        {
            title: 'The Charisma Myth',
            author: 'Olivia Fox Cabane',
        },
        {
            title: 'The Lean Startup',
            author: 'Eric Ries',
        },
        {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
        },
        {
            title: 'Zero to One',
            author: 'Peter Thiel',
        },
        {
            title: 'The Seven Habbits of Highly Effective People',
            author: 'Stephen Covey',
        },
        {
            title: 'Facebook: The Inside Story',
            author: 'Steven Levy',
        },
        {
            title: 'Titan',
            author: 'Ron Chernow',
        }
    ]

  return (
    <main className='ReadingList'>
        <header>
            <h1>Reading List</h1>
            <p>A comprehensive list and ranking of all the books I've picked up in the last couple years.</p>
        </header>
        <section>
            {books.map((book, index) => (
                <div key={index}>
                    <div className="info">
                        <h2>{book.title} - {book.author}</h2>
                        {book.blogPost ? <a href={book.blogPost}>Blog Post</a> : null}
                    </div>
                    <p>{index + 1}</p>
                </div>
            ))}
        </section>
    </main>
  )
}
