import React from 'react';
import './css/reset.css';
import './css/style.css';
import { IndexLink } from 'react-router';

export class Template extends React.Component {
  render(){
    return <div className="template-container">
        <header className="header">
            <div className="logo"></div>
            <div className="quotation">Love is... the excitement of planning things together and the excitement of doing things together.
            (author: unknown)</div>
        </header>
        <div className="menu">
            <h2>Go to ...</h2>
            <ul className="menu-list">
                <li>
                    <IndexLink to="/" activeClassName="active">Main</IndexLink>
                </li>
                <li>
                    <IndexLink to="/tasks" activeClassName="active">Tasks</IndexLink>
                </li>
                <li>
                    <IndexLink to="/notes" activeClassName="active">Notes</IndexLink>
                </li>
            </ul>
            {this.props.children}
        </div>

        <footer>&copy; Ewa Narożnik</footer>
    </div>

  }
}
