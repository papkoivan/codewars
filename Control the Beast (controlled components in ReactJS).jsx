const React = require("react");

class Beast extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: props.name === undefined ? 'Yeti' : props.name
    }

    this.handleChange.bind(this)
  }

  handleChange (value) {
    this.setState({
      name: value
    })
  }

  render(){
    return <input type="text" onChange={(e) => this.handleChange(e.target.value)} value={this.state.name} id="controlledName" />
  }
}
