import React from 'react';
import PropTypes from "prop-types";

import './styles.css';

const Blocks = ({ blocks }) => {

    function formatId(id) {
        const idString = id + "";
        if (idString.length < 3) {
            if (idString.length === 1) {
                return `00${idString}`;
            } else {
                return `0${idString}`;
            }
        }
        return idString;
    }

    return (
        <div className="blocks-container">
            { blocks && blocks.map(block => (
                <div key={block.id} className="block-row">
                    <div className="block-id">{formatId(block.id)}</div>
                    <div className="block-text">{block.attributes.data} </div>
                </div>
            ))}
        </div>
    );
};

Blocks.propTypes = {
    blocks: PropTypes.array
};

export default Blocks;