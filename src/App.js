import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './timer';
import Hello from './well';
import './style.css'

class Appc extends React.Component{
    render(){
        return(
            <div className="well">
                <Hello/>
                <Timer/>
            </div>
        )
    }
}
export default Appc;