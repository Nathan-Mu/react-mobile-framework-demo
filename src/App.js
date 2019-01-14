import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Menu} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Div100vh from 'react-div-100vh';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarVisible: 'hidden'
        };
        this.handleMenuToggle = this.handleMenuToggle.bind(this);
        this.handleMenuClose = this.handleMenuClose.bind(this);
    }

    handleMenuToggle() {
        let {sidebarVisible} = this.state;
        if (sidebarVisible === 'hidden') {
            sidebarVisible = 'visible';
        } else {
            sidebarVisible = 'hidden';
        }
        this.setState({sidebarVisible});
    }

    handleMenuClose() {
        this.setState({
            sidebarVisible: 'hidden'
        })
    }

    render() {
        return (
            <div>
                <div style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1}}>
                    <TopBar onMenuClick={this.handleMenuToggle}/>
                </div>

                <div style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    right: 0,
                    visibility: this.state.sidebarVisible,
                    zIndex: 2,
                    webkitTransition: 'width 2s'
                }}>
                    <SideBar onMenuClose={this.handleMenuClose}></SideBar>
                </div>

                <Body/>
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
                    onClick={this.props.onMenuClick}
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
            <div>
                <div style={{float: 'left', transition: 'left linear 1s', left: 0}}>
                    <Div100vh style={{height: '100rvh', width: '60vw', backgroundColor: 'blue'}}>
                    </Div100vh>
                </div>
                <div style={{float: 'left'}} onClick={this.props.onMenuClose}>
                    <Div100vh style={{height: '100rvh', width: '40vw', backgroundColor: 'green'}}>
                    </Div100vh>
                </div>
            </div>
        )
    }
}

class Body extends Component {
    render() {
        return (
            <Div100vh>
                <div>
                    <div style={{backgroundColor: 'red', height: '80px'}}></div>
                    <div style={{backgroundColor: 'blue', height: '80px'}}></div>
                    <div style={{backgroundColor: 'red', height: '80px'}}></div>
                    <div style={{backgroundColor: 'blue', height: '80px'}}></div>
                    <div style={{backgroundColor: 'red', height: '80px'}}></div>
                    <div style={{backgroundColor: 'blue', height: '80px'}}></div>
                    <div style={{backgroundColor: 'red', height: '80px'}}></div>
                    <div style={{backgroundColor: 'red', height: '80px'}}></div>
                    <div style={{backgroundColor: 'blue', height: '80px'}}></div>
                    <div style={{backgroundColor: 'red', height: '80px'}}></div>
                    <div style={{backgroundColor: 'blue', height: '80px'}}></div>
                    <div style={{backgroundColor: 'red', height: '80px'}}></div>
                    <div style={{backgroundColor: 'blue', height: '80px'}}></div>
                    <div style={{backgroundColor: 'red', height: '80px'}}></div>
                    <div style={{backgroundColor: 'red', height: '80px'}}></div>
                    <div style={{backgroundColor: 'blue', height: '80px'}}></div>
                    <div style={{backgroundColor: 'red', height: '80px'}}></div>
                    <div style={{backgroundColor: 'blue', height: '80px'}}></div>
                    <div style={{backgroundColor: 'red', height: '80px'}}></div>
                    <div style={{backgroundColor: 'blue', height: '80px'}}></div>
                    <div style={{backgroundColor: 'red', height: '80px'}}></div>
                </div>
            </Div100vh>
        )
    }
}

export default App;
