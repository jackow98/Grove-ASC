import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Route path="/" exact component={Home}/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App