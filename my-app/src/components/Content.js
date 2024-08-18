import React, { Component } from 'react'
import savedPosts from '../posts.json'
import css from './css/Content.modules.css'
import PostItem from './PostItem'
import Loader from './Loader'

export class Content extends Component {

    constructor(props) {
      super(props)
      this.state = {
        isLoaded: true
      }
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState(prevState => { 
          return {isLoaded: prevState.isLoaded === 'true' ? 'false' : 'true'}
      })}, 2000);
    }

    componentDidUpdate() {
        console.log('isLoaded has changed state');
    }
    
  render() {
    return (
            <div className={css.Content}> 
              <div className={css.TitleBar}>
                  <h1>My Photots</h1>
              </div> 
              <div>
                  {this.state.isLoaded} ? 
                  <PostItem posts={savedPosts.savedPosts} /> 
                  : <Loader />
              </div>
            </div>  
          )
  }
}

export default Content
