import React, { Component }  from 'react';

import '../resources/Card.css'

class Card extends Component {
    render() {
        let name = this.props.name;
        return (
            <div className="card">
                <h2>{name}</h2>
            </div>
        );
    }
}

export default Card;