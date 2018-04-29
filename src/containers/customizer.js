import React,{PureComponent} from 'react'
import {BaseSelector,SauceSelector,PriceDisplayer,ToppingSelector,DeliverySelector} from '../components/index'

class Customizer extends PureComponent {
  render() {
    return (
      <div>
        <PriceDisplayer />
        <BaseSelector />
        <SauceSelector />
        <ToppingSelector />
        <DeliverySelector />
      </div>
    )
  }
}

export {Customizer}
