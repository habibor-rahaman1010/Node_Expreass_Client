import React from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Blog = ({ blog }) => {
    const history = useHistory();
    const buttonHandlerClick = (id) => {
        history.push(`/blogs/details/${id}`)
    }
    return (
        <Container>
            <Col>
                <Card>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>
                            <div dangerouslySetInnerHTML={{ __html: blog?.description?.slice(0, 250) + '.....' }}></div>
                        </Card.Text>
                        <p>Publihed: {blog.published}</p>
                        <Button onClick={() => { buttonHandlerClick(blog._id) }} variant="primary">Read More...</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    );
};

export default Blog;