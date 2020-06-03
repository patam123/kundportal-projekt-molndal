import React, { Component } from 'react';
import Header from './header';
import CardSection from './cardsection';

class Card extends Component {
    render() {
        return (
            <div>
             
                <Header headText={this.props.headText} btnText={this.props.btnText} handleBtnClick="{}" />
                <CardSection content={this.props.firstSection} />
                
            </div>
        );
    }
}

export default Card;