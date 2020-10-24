import React from 'react'
import axios from 'axios';
import {Link, Route, Switch} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { ListContext } from 'antd/lib/list';


class App extends React.Component {
    state = {
        posts: []
    }

    getAllPostsFromApi = () => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({posts: response.data})
            })
    }

    componentDidMount() {
        this.getAllPostsFromApi();
    }

    render() {
        return (
            <Switch>

                <Route  path='/' render={props => <PostsList {...props} posts={this.state.posts}/>}  exact/>
                <Route path='/:postId' render={props => <PostsShow {...props}/>} exact/>
            </Switch>
        );
    }
}

const PostsList = props => {
    return (<p>
        {props.posts.map(post => <li key={post.id}>  <Link to={`/${post.id}`}>  {post.id} = {post.title}  </Link>   </li>)}
    </p>)
}




class PostsShow extends React.Component {

    state = {
        post : {}
    }

    async componentDidMount() {
        const data = await this.getPostById(this.props.match.params.postId).then(r => r.data);
        this.setState({post: data})
    }

    getPostById = postId => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => {
                this.setState({post: res.data})
            });
    }

    getPostById = async postId => {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    }

    render() {
        return (<p>
                ID:
                 {this.state.post && this.state.post.id}
                <br/>
                Title:
                {this.state.post && this.state.post.title}
                <br/>
                Body:
                {this.state.post && this.state.post.body}
            </p>

    
            
        );
    }
}

export default App;