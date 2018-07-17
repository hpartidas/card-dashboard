import React, { Component } from 'react';
import Card from './Card';

import '../resources/Cards.css';

import categories from '../mock/categories';

class Cards extends Component {
    render(){
        return (
            <div className="card-container">
                { Object.entries(categories).map((category) => { return <Card key={category[0]} name={category[0]} />}) }
            </div>
        );
    }
}

export default Cards;