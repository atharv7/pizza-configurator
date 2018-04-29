import React,{PureComponent} from 'react'
import { connect } from 'react-redux'
import {BaseSelector,SauceSelector} from '../components/index'

class Customizer extends PureComponent {
  render() {
    return (
      <div>
        <BaseSelector />
        <SauceSelector />
      </div>
    )
  }
}

export {Customizer}
