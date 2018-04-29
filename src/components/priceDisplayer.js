import React,{PureComponent} from 'react'
import './priceDisplayer.css'
import { connect } from 'react-redux'

class PriceDisplayer extends PureComponent {

  render() {
    return (
      <div className="PriceDisplayer">
        <b>Price: {this.props.pizza[0]}</b>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pizza: state.pizza
  }
}

export default connect(mapStateToProps)(PriceDisplayer)
