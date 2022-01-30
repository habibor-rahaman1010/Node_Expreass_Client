import React from 'react';
import { Container, Row } from 'react-bootstrap';
import UseContextAPI from '../../../Hooks/UseContextAPI';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const { LoadAPI } = UseContextAPI();
    const { blogs } = LoadAPI();

    return (
        <Container>
            <h2>This is my blogs</h2>
            <Row xs={1} md={4}>
                {blogs.map((blog) => blog = <Blog blog={blog} key={blog._id}></Blog>)}
            </Row>
        </Container>
    );
};

export default Blogs;