import React from 'react';
import PropTypes from 'prop-types';

function Items(props) {
    const { items = [] } = props;

    if (!items.length) {
        // No Items on the list, render an empty message
        return <span className="empty-message">No items in list</span>;
    }

    if (items.length === 1) {
        // One Item in the list, render a span
        return <span className="item-message">{items[0]}</span>;
    }

    // Multiple items on the list, render a list
    return (
        <ul>
            {items.map(item => <li key={item} className="item-message">{item}</li>)}
        </ul>
    );
}


Items.propTypes = {
    items: PropTypes.array,
};

Items.defaultProps = {
    items: [],
};

export default Items;