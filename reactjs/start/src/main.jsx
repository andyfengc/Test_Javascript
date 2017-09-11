var React = require('react');
var ReactDom = require('react-dom');
var List = require('./components/list.jsx');
var SampleForm = require('./components/sample-form.jsx');

ReactDom.render(<List/>, document.getElementById('persons'));
ReactDom.render(<SampleForm></SampleForm>, document.getElementById('sampleForm'));
