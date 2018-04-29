import React,{PureComponent} from 'react'
import {BaseSelector,SauceSelector,PriceDisplayer,ToppingSelector,DeliverySelector} from '../components/index'
import './customizer.css'

class Customizer extends PureComponent {
  render() {
    return (
      <div className="Customizer">
        <BaseSelector />
        <SauceSelector />
        <ToppingSelector />
        <DeliverySelector />
        <PriceDisplayer />
      </div>
    )
  }
}

export {Customizer}
