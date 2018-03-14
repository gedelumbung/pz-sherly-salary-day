import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const viewport = document.getElementById('page-wrapper');

const app = document.createElement('div');

app.id = 'roots';

if (viewport) viewport.prepend(app);

ReactDOM.render(<App />, document.getElementById('roots'));
