import React, { Component } from 'react';
import grey from './grey.png';
import content from '../content';
export default class ActingPage extends Component {
    render() {
        const imgFiles = content.pages.acting.images;
        const images = imgFiles.map((imgF, i) =>
            <figure key={i}>
                <img src={imgF || grey} alt={`Acting Picture ${i + 1}`} />
            </figure>);
        return (
            <article className="acting">
                {images}
            </article>
        );
    }
}

