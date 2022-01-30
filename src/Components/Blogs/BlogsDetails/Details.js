import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Details = () => {
    const [details, setDetails] = useState({});
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const detailsAPI = `http://localhost:5000/blogs/details/${id}`;
        fetch(detailsAPI)
            .then((res) => res.json())
            .then((data) => setDetails(data))
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const deleteClickHandler = (id) => {
        const proceed = window.confirm('Are You sure, You Want to Delete a Blogs?')
        if (proceed) {
            const deleteAPI = `http://localhost:5000/delete/blogs/${id}`
            fetch(deleteAPI, {
                method: 'DELETE'
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert('Blogs Post Deleteed Succesfully!')
                    }
                })
        }
    }

    const updateClickHandler = (id) => {
        history.push(`/blogs/details/update/${id}`)
    }
    return (
        <Container>
            <Card>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body className='mx-5 my-4'>
                    <Card.Title>{details.title}</Card.Title> <br /> <br />
                    <Card.Text>
                        <div dangerouslySetInnerHTML={{ __html: details?.description }}></div>
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <Button onClick={() => { deleteClickHandler(details._id) }} className='btn btn-danger'>Delete Post</Button>
                        <Button onClick={() => { updateClickHandler(details._id) }} className='bnt btn-success'>Update Post</Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Details;