//console.log('haha');

import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx'

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

ReactDOM.render(<App/>, document.getElementById('app'));


