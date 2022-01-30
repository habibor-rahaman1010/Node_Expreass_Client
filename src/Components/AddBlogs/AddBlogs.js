import React, { useRef, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AddBlogs = () => {
    const [description, setDescription] = useState('')
    const titleRef = useRef();
    const categoryRef = useRef();
    const authorRef = useRef()

    const textData = (event, editor) => {
        const data = editor.getData();
        setDescription(data);
    }
    const handleSubmitForm = (event) => {
        const title = titleRef.current.value;
        const category = categoryRef.current.value;
        const author = authorRef.current.value;
        const publish = new Date();
        const published = publish.toLocaleString();

        //blogs javascript
        class Blogs {
            title;
            category;
            author;
            description;
            published;

            constructor(title, category, author, description, published) {
                this.title = title;
                this.category = category;
                this.author = author;
                this.description = description;
                this.published = published;
            }
        }

        const newBlogs = new Blogs(
            title,
            category,
            author,
            description,
            published
        );

        fetch(`http://localhost:5000/post/blogs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBlogs),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert('Blog posted succesfully, and save your post in mongoDB database!');
                    event.target.reset();
                }
            })

        event.preventDefault();
    }

    return (
        <Container className=' w-50'>
            <h3>Add Blogs</h3>
            <Form onSubmit={handleSubmitForm}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control ref={titleRef} type="text" placeholder="Enter Title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Control ref={categoryRef} type="text" placeholder="Enter Category" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="Author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control ref={authorRef} type="text" placeholder="Enter Author" />
                </Form.Group>




                <CKEditor
                    editor={ClassicEditor}
                    onBlur={textData}
                >

                </CKEditor> <br />

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Post Piblish
                </Button>
            </Form>
        </Container>
    );
};

export default AddBlogs;