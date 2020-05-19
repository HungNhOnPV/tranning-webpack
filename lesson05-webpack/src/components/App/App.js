import React, { Component } from 'react';
import './App.css';
import Menu from './../Menu/Menu'
import routers from './../../routers';
import { BrowserRouter as Routers, Switch, Route, HashRouter } from 'react-router-dom';

class App extends Component {

    showContentMenus = routers => {
        let result = null;
        if(routers.length > 0) {
            result = routers.map((router, index) => {
                return (<Route
                        key={index}
                        path={router.path}
                        exact={router.exact}
                        component={router.main}
                        ></Route>);
            });
        }
        return <Switch>{result}</Switch>
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Menu />
                    <div className="container">
                        <div className="row">
                            {this.showContentMenus(routers)}
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;
