import React from 'react';

import Display from './Display';

const displayStyle = {
    fontFamily: "'Sansita', sans-serif",
    backgroundColor: '#ecf0f1',
    width: '200px',
    height: '90px',
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    margin: 'auto',
    textAlign: 'center',
    borderRadius: '1px',
    border: ['1px', 'solid', 'rgba(0, 0, 0, 0.1)'].join(' '),
    boxShadow: [
        ['0', '2px', '4px', '0', 'rgba(0, 0, 0, 0.15)'].join(' '),
        ['0', '3px', '8px', '0', 'rgba(0, 0, 0, 0.05)'].join(' ')
    ]
}

const App = (props) => (
    <Display style={ displayStyle } />
);

export default App;
