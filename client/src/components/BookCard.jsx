import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import axios from "axios";

const BookCard = ({ url }) => { // Destructure 'url' from props
  
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get(url); // Use 'url' from props
        console.log(response.data.data);
        setBooks(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getBooks();
  }, [url]); // Include 'url' in the dependency array

  return (
    <>
      <div className='flex gap-6'>
        {books.map((book) => (
          <Card style={{ margin: '10px' }} className='w-[22rem]' key={book._id}>
            <Card.Img variant="top" src={book.books.image} className='h-[22rem]' />
            <Card.Body className='h-full'>
              <Card.Text className='fst-italic md:text-lg capitalize text-sm'>
                <strong className='px-2'>Title:</strong>{book.books.title}
                <br />
                <strong className='px-2'>Author:</strong>{book.books.author}
                <br />
                <strong className='px-2'>Genre:</strong>
                {book.books.genre.map((genre, index) => (
                  <span key={index}>
                    {genre}
                    {index !== book.books.genre.length - 1 ? ', ' : ''}
                  </span>
                ))}
                <br />
                <strong className='px-2'>Description:</strong>{book.books.description}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default BookCard;
