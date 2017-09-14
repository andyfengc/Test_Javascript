var React = require('react');
var ReactDom = require('react-dom');
var List = require('./components/list.jsx');
var SampleForm = require('./components/sample-form.jsx');
import Countdown from './components/countdown.jsx';
import Countdown2 from './components/countdown2.jsx';
import Countdown3 from './components/countdown3.jsx';

ReactDom.render(<List/>, document.getElementById('persons'));
ReactDom.render(<SampleForm></SampleForm>, document.getElementById('sampleForm'));
ReactDom.render(<Countdown/>, document.getElementById('countdown'));
ReactDom.render(<Countdown2/>, document.getElementById('countdown2'));
ReactDom.render(<Countdown3/>, document.getElementById('countdown3'));
