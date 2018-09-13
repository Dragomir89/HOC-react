import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'
import Private from './components/Private'
import Public from './components/Public'
import actions from './actions/index'
import { connect } from 'react-redux'


class App extends Component {
  constructor(props){
    super(props)

    this.handleBtnClick = this.handleBtnClick.bind(this)
  }

  handleBtnClick() {
    this.props.changeAuth(!this.props.auth)
  }

  rednerBtn(){
    let btnText = 'Sing In'
    if(this.props.auth){
      btnText = 'Sing Out' 
    }
    return(<button onClick={ this.handleBtnClick } >{btnText}</button>)
  }

  renderHeader() {
    return(
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to='/post'>Post</Link>
        </li>
        <li>
          {this.rednerBtn()}
        </li>
      </ul>
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Hello App</h1>
        {this.renderHeader()}
        <Route path='/post' component={Private}/>
        <Route path='/' exact component={Public}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch){
  return{
    changeAuth: (params)=>{dispatch(actions.changeAuth(params))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
