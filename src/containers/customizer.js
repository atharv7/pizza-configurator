import React,{PureComponent} from 'react'
import { connect } from 'react-redux'
import {BaseSelector} from '../components/index'

class Customizer extends PureComponent {
  render() {
    return (<BaseSelector />)
  }
}

export {Customizer}
