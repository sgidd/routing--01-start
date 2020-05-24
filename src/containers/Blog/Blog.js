import React, { Component } from 'react';
import './Blog.css';
import Posts from '../Posts/Posts';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
// import NewPost from '../NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('../NewPost/NewPost');
})

class Blog extends Component {
    
    state ={
        auth: true
    }
    render () {
        return (
            <div className="Blog">
                <header >
                    <nav>
                        <ul>
                            <li><NavLink 
                            to="/posts" 
                            exact
                            activeClassName="my-active" //it wont be applied as class not defined 
                            activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline'
                            }}>Home</NavLink></li>

                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash:'#submit',
                                search:'?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>

            {/* <Route path="/" exact render={() => <h1>Home</h1> } />
            <Route path="/"  render={() => <h1>Home 2</h1> } /> */}
            
            {/*205 <Route path="/" exact    component={Posts} />
            <Route path="/new-post" exact component={NewPost} />
            <Route path="/posts/:id" component={FullPost} /> */}

            <Switch>
               {/* {this.state.auth ? <Route path="/new-post" exact component={NewPost} />  : null }     */}
               {this.state.auth ? <Route path="/new-post" exact component={AsyncNewPost} />  : null }    
                <Route path="/posts"  component={Posts} />    
                <Route render={() => <h1>Page Not Found!</h1>} />
                {/* <Redirect from="/" to="/posts" /> */}
                {/* <Route path="/"  component={Posts} />  */}
            </Switch>
            </div>

        );
    }
}

export default Blog;