import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Share/Header/Header';
import ContextAPI from '../ContextAPI/ContextAPI';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Home from '../Components/Home/Home/Home';
import Blogs from '../Components/Blogs/Blogs/Blogs';
import NotFound from '../Components/NotFound/NotFound';
import AddBlogs from '../Components/AddBlogs/AddBlogs';
import Details from '../Components/Blogs/BlogsDetails/Details';
import './Main.css'
import Update from '../Components/Blogs/UpdateBlogs/Update';

const Main = () => {
    return (
        <div className='Main'>
            <ContextAPI>
                <BrowserRouter>
                    <Header></Header>
                    <Switch>
                        <Route exact path={'/'}>
                            <Home></Home>
                        </Route>

                        <Route exact path={'/blogs'}>
                            <Blogs></Blogs>
                        </Route>

                        <Route exact path={'/add_blogs'}>
                            <AddBlogs></AddBlogs>
                        </Route>

                        <Route exact path={'/blogs/details/:id'}>
                            <Details></Details>
                        </Route>

                        <Route exact path={'/blogs/details/update/:id'}>
                            <Update></Update>
                        </Route>

                        <Route exact path={'/*'}>
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                </BrowserRouter>

            </ContextAPI>

        </div>
    );
};

export default Main;