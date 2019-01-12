import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Menu} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Div100vh from 'react-div-100vh';

class App extends Component {
    render() {
        return (
            <div>
                <div style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1}}>
                    <TopBar/>
                </div>

                <div style={{position: 'relative', left: 0, top: 0, right: 0, backgroundColor: 'red'}}>
                    <SideBar></SideBar>
                </div>

                <div>

                </div>
            </div>
        );
    }
}

class TopBar extends Component {
    render() {
        return (
            <Menu>
                <Menu.Item
                    name='editorials'
                    onClick={this.handleItemClick}
                >
                    open
                </Menu.Item>
            </Menu>
        )
    }
}

class SideBar extends Component {
    render() {
        return (
            <Div100vh>
            </Div100vh>
        )
    }
}

export default App;
