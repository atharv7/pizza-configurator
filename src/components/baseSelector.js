import React,{PureComponent} from 'react'
import './baseSelector.css'
import { connect } from 'react-redux'

class BaseSelector extends PureComponent {
  constructor(props) {
    super(props)
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }
  onChangeHandler(e) {
    this.props.dispatch({
      type:'BASE_SELECTOR',
      payload:e.target.value
    })
  }

  render() {
    return (
      <div className="BaseSelector">
        <h1>Step 1: Select a Base!</h1>
        <label>
          <input type="radio" value="1" name="base_selector" onChange={this.onChangeHandler}/>
          <b>20cm NY Style</b>
        </label>
        <label>
          <input type="radio" value="2" name="base_selector" onChange={this.onChangeHandler}/>
          <b>25cm NY Style</b>
        </label>
        <label>
          <input type="radio" value="3" name="base_selector" onChange={this.onChangeHandler}/>
          <b>30cm NY Style</b>
        </label>
        <label>
          <input type="radio" value="4" name="base_selector" onChange={this.onChangeHandler}/>
          <b>35cm NY Style</b>
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

export default connect(mapStateToProps)(BaseSelector)
