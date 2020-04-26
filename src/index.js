import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import 'bootswatch/dist/lux/bootstrap.min.css';
import List from './containers/list';


const App = ()=>{
    return (
        <main className="bg-light">
            <div className="container">
                <List/>
            </div>
        </main>
    )
}



ReactDOM.render(<App/>, document.getElementById('root'));