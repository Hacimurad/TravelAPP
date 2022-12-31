import React, { Component } from 'react'
import { Text, View } from 'react-native'
import style from './styles'

export class Title extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: 'Default ClassTitle',
        }
    }

    componentDidMount() {

    }
    componentDidUpdate() {

    }
    componentWillUnmount() {
        
    }

    onTextPress = () => {
        this.setState({
            text: 'New Text',
        })
    }

  render() {
    return (
        <Text onPress={this.onTextPress} style={style.title}>{this.state.text}</Text>
    )
  }
}

export default Title