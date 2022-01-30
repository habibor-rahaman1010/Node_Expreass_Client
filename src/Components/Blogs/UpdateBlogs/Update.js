import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Update = () => {
    const [description, setDescription] = useState('');
    const [details, setDetails] = useState({ title: '', category: '', author: '', description: '' });
    const { id } = useParams()

    useEffect(() => {
        const detailsAPI = `http://localhost:5000/blogs/details/${id}`;
        fetch(detailsAPI)
            .then((res) => res.json())
            .then((data) => setDetails(data))
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    console.log(description)

    const textData = (event, editor) => {
        const data = editor.getData();
        setDescription(data);
        const updateDescription = description;
        const updateBlogs = { ...details }
        updateBlogs.description = updateDescription
        setDetails(updateBlogs)
    }


    const updateTitleHandler = (event) => {
        const updateTitle = event.target.value;
        const updateBlogs = { title: updateTitle, category: details?.category, author: details?.author, description: details?.description };
        setDetails(updateBlogs)
    }

    const updateCategoryHandler = (event) => {
        const updateCategory = event.target.value;
        const updateBlogs = { ...details }
        updateBlogs.category = updateCategory
        setDetails(updateBlogs)
    }

    const updateAuthorHandler = (event) => {
        const updateAuthor = event.target.value;
        const updateBlogs = { ...details }
        updateBlogs.author = updateAuthor
        setDetails(updateBlogs)
    }



    const handleSubmitForm = (event) => {
        const updateAPI = `http://localhost:5000/blogs/details/update/${id}`;
        fetch(updateAPI, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details)

        })
            .then((res) => res.json())
            .then((data) => {
                if (data.matchedCount > 0) {
                    alert('Post Updated Succesfully!')
                }
            })
            .catch((err) => {
                console.log('Somthing went worng', err)
            })
        event.preventDefault();
    }


    return (
        <Container className=' w-50'>
            <h3>this is my update user {id}</h3>
            <h3>Add Blogs</h3>
            <Form onSubmit={handleSubmitForm}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control onChange={updateTitleHandler} value={details.title} type="text" placeholder="Enter Title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Control onChange={updateCategoryHandler} value={details.category} type="text" placeholder="Enter Category" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="Author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control onChange={updateAuthorHandler} value={details.author} type="text" placeholder="Enter Author" />
                </Form.Group>

                <CKEditor
                    editor={ClassicEditor}
                    data={details.description}
                    onChange={textData}

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

export default Update;