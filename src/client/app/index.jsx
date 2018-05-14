//console.log('haha');

import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx'



const element = (
    <div tabIndex="0">
        <h1>Hello, luqing</h1>
    </div>
);

const h1 = (

    <h1 tabIndex="2"> wo my god</h1>

);


function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );

    ReactDOM.render(element, document.getElementById('time'));

}

setInterval(tick,1000);




class  App extends React.Component{
    render(){

        return (
            <div>
            <p> Hello world! </p>;
                <AwesomeComponent />
            </div>
        )
    }

}

render(<App/>, document.getElementById('app'));

ReactDOM.render(element, document.getElementById('root'));

ReactDOM.render(h1,document.getElementById('h1'));



function Welcome(pros){
    return <h1>Hello,{pros.name}</h1>;
}
const welcome = <Welcome name="Sara" />;

ReactDOM.render(
    welcome,
    document.getElementById('welcome')
);



class Clock extends React.Component{

    constructor(props){
        super(props);
        this.state = {date: new Date()};

    }


    componentDidMount(){
        this.timerID =setInterval(
            () => this.tick(),
            1000
        );

    }


    componentWillUnmount(){
        clearInterval(this.timerID);

    }


    tick(){

        this.setState({
            date: new Date()
        });
    }




    render(){
        return(
            <div>
                <h1> Hello, world!</h1>
                <h2> It is {this.state.date.toLocaleString()}.</h2>
            </div>

        );
    }

}

ReactDOM.render(
  <Clock />,
    document.getElementById('clock')

);

































