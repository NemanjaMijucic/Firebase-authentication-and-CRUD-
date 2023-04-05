import React, { useRef, useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { db } from "../firebase";
import { collection, addDoc } from "@firebase/firestore";

const AddBook = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);

  const titleRef = useRef();
  const authorRef = useRef();
  const publisherRef = useRef();

  const submitBook = async (e) => {
    e.preventDefault();
    console.log(titleRef.current.value);
    console.log(authorRef.current.value);
    console.log(publisherRef.current.value);

    //conection to dabase and collection where we put data
    const booksCollectionRef = collection(db, "books");

    await addDoc(booksCollectionRef, {
      title: titleRef.current.value,
      author: authorRef.current.value,
      publisher: publisherRef.current.value,
    });
  };

  return (
    <Card>
      <Card.Body>
        <h2>Add book to database</h2>
        <Form onSubmit={submitBook}>
          <Form.Group id="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="title" ref={titleRef} />
          </Form.Group>
          <Form.Group id="Author">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" placeholder="author" ref={authorRef} />
          </Form.Group>
          <Form.Group id="Publisher">
            <Form.Label>Publisher</Form.Label>
            <Form.Control
              type="text"
              placeholder="publisher"
              ref={publisherRef}
            />
          </Form.Group>
          <Button type="submit" className="w-100 mt-4" disabled={loading}>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddBook;
