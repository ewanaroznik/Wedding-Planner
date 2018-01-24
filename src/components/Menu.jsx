import React from 'react';


export class Menu extends React.Component{

    render() {
        return (
            <ul className="menu-list">
                <li>Tasks</li>
                <li>Budget</li>
                <li>Notes</li>
                <li>Guests</li>
            </ul>
        )
    }
}