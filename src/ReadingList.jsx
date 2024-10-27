import React from 'react'
import './styles/ReadingList.scss'
import { Link } from 'react-router-dom'

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
            title: 'Deep Work',
            author: 'Cal Newport',
        },
        {
            title: 'The Charisma Myth',
            author: 'Olivia Fox Cabane',
        },
        {
            title: 'The Truth About Crypto',
            author: 'Ric Edelman',
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
            title: 'Facebook: The Inside Story',
            author: 'Steven Levy',
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
            title: 'How to Win Friends and Influence People',
            author: 'Dale Carnegie',
        },
        {
            title: 'Shadow and Bone',
            author: 'Leigh Bardugo',
        },
        {
            title: 'The Prince',
            author: 'Niccolo Machiavelli',
        },
        {
            title: 'The Four Hour Work Week',
            author: 'Tim Ferriss',
        },
        {
            title: 'Titan',
            author: 'Ron Chernow',
        },
        {
            title: 'How to Talk to Anyone',
            author: 'Leil Lowndes',
        },
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
                        {book.blogPost ? <Link to={book.blogPost}>Blog Post</Link> : null}
                    </div>
                    <p>{index + 1}</p>
                </div>
            ))}
        </section>
    </main>
  )
}
