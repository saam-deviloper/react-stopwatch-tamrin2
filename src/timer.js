import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'

var interval;
class Timer extends React.Component{
    constructor(){
        super()
        this.state = {
            secound : 10,
            Minutes : 0,
            hour : 0
        }
    }
    startinterval = ()=>{
        interval = setInterval(()=>{
            this.setState({
                secound : this.state.secound -1
            })
        } , 1000)
    }
    stopinterval = ()=>{
        clearInterval(interval);
    }
    componentDidUpdate(){
        if(this.state.secound == 0){
            this.stopinterval();
        }
    }
    render(){
        return(
            <div>
                <h2 className="timer">
                    {this.state.secound}
                </h2>
                
                <button className="button1" onClick={this.startinterval}>start</button>
                <button className="button2" onClick={this.stopinterval}>stop</button>
                
            </div>
        )
    }
}
export default Timer;