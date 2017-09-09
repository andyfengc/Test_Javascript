var React = require('react');
var ListItem = require('./listitem.jsx');

var persons = [
  {  "id" : 1, "name" : "kevin"}
  , {  "id" : 2, "name" : "andy"}
  , {  "id" : 3, "name" : "john"}
]

var List = React.createClass({
  render: function(){
    var listitems = persons.map(function(item){
      return <ListItem key={item.id} name={item.name}/>;
    });

    return (<ul>{listitems}</ul>);
  }
})

module.exports = List;
