import React, { Component } from 'react';
import './Blog.css';
import Posts from '../Posts/Posts';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import NewPost from '../NewPost/NewPost';
import {withRouter} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
class Blog extends Component {

    render () {
        console.log(this.props);
        
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
                <Route path="/new-post" exact component={NewPost} />      
                <Route path="/posts"  component={Posts} />    
                <Redirect from="/" to="/posts" />
                {/* <Route path="/"  component={Posts} />  */}
            </Switch>
            </div>

        );
    }
}

export default Blog;