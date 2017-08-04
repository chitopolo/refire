import React, { Component, PropTypes } from 'react'
import {Button, Glyphicon} from 'react-bootstrap'

class MiTitulo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
    this.plusOne = this.plusOne.bind(this)
  }

  componentWillMount () {

  }

  componentDidMount () {

  }

  componentWillReceiveProps (nextProps) {

  }

  shouldComponentUpdate (nextProps, nextState) {
    return true
  }

  componentWillUpdate (nextProps, nextState) {

  }

  componentDidUpdate (prevProps, prevState) {

  }

  componentWillUnmount () {

  }

  plusOne(){
    this.setState({
      number: this.state.number+1
    })
  }


  render () {
    const style = { color: this.props.color };
    return (
      <div>
      <h1 style={style}>
        {this.props.titulo}  <Button onClick={this.plusOne} bsStyle="primary"><Glyphicon glyph="thumbs-up"/></Button>{this.state.number}
      </h1>
    </div>
    )
  }
}


export default MiTitulo

