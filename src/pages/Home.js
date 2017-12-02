import React, { Component } from 'react';
import home from './home.jpg';

export default class HomePage extends Component {
    render() {
        return (
            <article className="home">
                <figure>
                    <img src={home} alt="Home Image" />
                </figure>
            </article>
        );
    }
}

