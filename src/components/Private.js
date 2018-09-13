import React, { Component } from 'react'
import { connect } from 'react-redux'
import requireAuth from './requireAuth'

class CommentBox extends Component {
    
    
    render(){
        return(
            <div><h1>Private Page</h1></div> 
        )
    }
}

export default connect(null)( requireAuth(CommentBox))
