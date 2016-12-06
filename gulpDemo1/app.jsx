var HelloReact = React.createClass({
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
        return <form onSubmit={this.handleSubmit}>
            <input ref="helloInput" type="text" defaultValue="pls input"/>
            <input type="submit" value="Sub"/>
        </form>;
    }
});

React.render(<HelloReact></HelloReact>, document.getElementById("container"));