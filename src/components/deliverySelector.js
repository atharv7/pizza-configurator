import React,{PureComponent} from 'react'
import './deliverySelector.css'
import { connect } from 'react-redux'

class DeliverySelector extends PureComponent {
  constructor(props) {
    super(props)
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }
  onChangeHandler(e) {
    if(e.target.checked===true)
    {
      this.props.dispatch ({
        type:'TURBO_SELECTOR',
        payload:e.target.value
      })
    } else {
      this.props.dispatch({
          type:'TURBO_DESELECTOR',
          payload:e.target.value
      })
    }
  }

  render() {
    return (
      <div className="DeliverySelector">
        <h1>Want your Pizza 'On The Fly'??</h1>
        <label>
          <input type="checkbox" value="1" name="delivery_selector" onChange={this.onChangeHandler}/>
          <b>Turbo Drone Delivery</b>
        </label>
      </div>
    )
  }
}

const mapStateToProps = (state,props) => {
  return {
    pizza: state.pizza
  }
}

export default connect(mapStateToProps)(DeliverySelector)
