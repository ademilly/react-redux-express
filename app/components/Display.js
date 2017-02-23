import React from 'react';
import { connect } from 'react-redux';

import { switchText } from '../actions';

const mapStateToProps = (state) => {
    return {
        text: state.value
    };
};

let Display = (props) => (
    <div onClick={
        () => {
            props.dispatch(switchText(props.text))
        }
    } style={ props.style }>
        <h1>{ props.text }, World!</h1>
    </div>
);
Display = connect(mapStateToProps)(Display);

export default Display;
