import React, { Component } from 'react';
import grey from './grey.png'
import content from '../content';

export default class PhotographyPage extends Component {
    render() {
        const imgFiles = content.pages.photography.images;
        const images = imgFiles.map((img, i) =>
            <figure className="col-4" key={i} >
                <img src={img || grey} alt={`Photgraphy Picture ${i + 1}`} />
            </figure>);
        return (
            <article className="photography">
                {images}
            </article>
        );
    }
}
