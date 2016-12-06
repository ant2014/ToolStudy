var HelloReact = React.createClass({displayName: "HelloReact",
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function(){
        return {
            text: '',
        };
    },
    handleSubmit: function(event){
        event.preventDefault();
        var newInput = React.findDOMNode(this.refs.helloInput).value;
        alert(newInput);
    },
    render: function(){
        console.log(this.state);
        return React.createElement("form", {onSubmit: this.handleSubmit}, 
            React.createElement("input", {ref: "helloInput", type: "text", defaultValue: "pls input"}), 
            React.createElement("input", {type: "submit", value: "Sub"})
        );
    }
});

React.render(React.createElement(HelloReact, null), document.getElementById("container"));