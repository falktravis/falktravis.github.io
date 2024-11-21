import React from 'react'
import './styles/ReadingList.scss'
import { Link } from 'react-router-dom'

export default function ReadingList() {
    const books = [
        {
            title: 'Steve Jobs',
            author: 'Walter Isaacson',
            blogPost: '/blog/books/steve-jobs',
        },
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
            title: 'The Psychology of Money',
            author: 'Morgan Housel',
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
            title: 'Getting Things Done',
            author: 'David Allen',
        },
        {
            title: 'Facebook: The Inside Story',
            author: 'Steven Levy',
        },
        {
            title: 'Benjamin Franklin: The Original American',
            author: 'H.W. Brands',
        },
        {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
        },
        {
            title: 'The 21 Irrefutable Laws of Leadership',
            author: 'John Maxwell',
        },
        {
            title: 'The Truth About Crypto',
            author: 'Ric Edelman',
        },
        {
            title: 'Ready Player One',
            author: 'Ernest Cline',
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
            title: 'Ready player two',
            author: 'Ernest Cline',
        },
        {
            title: 'Rich Dad Poor Dad',
            author: 'Robert Kiyosaki',
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
            title: 'Auto-Biography of Benjamin Franklin',
            author: 'Benjamin Franklin',
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
