import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "@firebase/firestore";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const Books = () => {
  const [books, setBooks] = useState([]);

  //function collection() creates conection to database collection from where we call data
  const booksCollectionRef = collection(db, "books");

  //function for changing item in database
  const changePublisher = async (id, publisher) => {
    //this one doc() is used to select specific collection in database and item
    const changedPublisher = doc(db, "books", id);
    const newPublisher = { publisher: "Vulkan" };
    //this ona changes  item which is passed by doc function
    await updateDoc(changedPublisher, newPublisher);
  };

  const deleteBook = async (id) => {
    //this one doc() is used to select specific collection in database and item
    const deletedBook = doc(db, "books", id);
    //this one deletes specific item which is passed by doc function
    await deleteDoc(deletedBook);
  };

  useEffect(() => {
    const getBooks = async () => {
      //function getDocs() returns documents from specific collection
      const data = await getDocs(booksCollectionRef);
      console.log(data);
      setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(books);
    };

    getBooks();
  }, []);

  return (
    <div>
      <h2>Books in database: </h2>
      <ListGroup>
        {books.map((book) => {
          return (
            <ListGroup.Item
              className="d-flex-column justify-content-between align-items-start mt-2 mb-4"
              key={book.id}
            >
              <h3>{book.title}</h3>
              <div>
                <p>{book.author}</p>
              </div>
              <Badge>{book.publisher}</Badge>
              <Button
                variant="info"
                className="mx-4"
                size="sm"
                onClick={() => changePublisher(book.id, book.publisher)}
              >
                Change publisher
              </Button>
              <Button
                variant="danger"
                className="mx-4"
                size="sm"
                onClick={() => deleteBook(book.id)}
              >
                Delete
              </Button>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default Books;
