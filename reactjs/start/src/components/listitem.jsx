var React = require('react');
var ListItem = React.createClass({
  render: function(){
    return (
      <li>
        {this.props.name}
      </li>
    );
  }
})

module.exports = ListItem;
