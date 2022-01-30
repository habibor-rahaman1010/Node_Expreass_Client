import { useEffect, useState } from 'react';

const LoadAPI = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const URL = `http://localhost:5000/all/blogs`;
        fetch(URL)
            .then((res) => res.json())
            .then((data) => setBlogs(data))
    }, [])

    return {
        blogs,
    };
};

export default LoadAPI;