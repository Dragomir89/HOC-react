import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import { createStore} from 'redux'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers'


let store = createStore(reducers,{})

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path='/' component={App} />
        </BrowserRouter>
    </Provider>, document.getElementById('root'))
registerServiceWorker()
