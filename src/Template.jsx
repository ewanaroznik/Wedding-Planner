import React from 'react';
import './css/style.css';
import './css/reset.css';
// import moment from 'moment';
import { Main } from './components/Main.jsx';
import { Link } from 'react-router';

export class Template extends React.Component {
  render(){
    return <div className="template-container">
        <header className="header">
            <div className="logo">.</div>
            <div className="quotation">Love is... the excitement of planning things together and the excitement of doing things together.</div>
        </header>
        <div>
            <h1>Menu</h1>
            <ul className="menu-list">
                <li>
                    <Link to="/">Main</Link>
                </li>
                <li>
                    <Link to="/tasks">Tasks</Link>
                </li>
            </ul>
            {this.props.children}
        </div>

        <Main />
        <footer>&copy; Ewa Narożnik</footer>
    </div>

  }
}
