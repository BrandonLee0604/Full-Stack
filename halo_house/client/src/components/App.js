import React from 'react';
import { Router } from 'react-router-dom';

import Header from './Header';
import history from '../history';

const App = () => {
    return (
        <div className="ui container">
            {/* Use our history instead of default internal history object */}
            <Router history={history}>
                <div>
                    <Header />
                    {/* Use Switch to prevent from showing multiple components below */}
                </div>
            </Router>
        </div >
    );
}

export default App;