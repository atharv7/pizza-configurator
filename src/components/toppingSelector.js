import React,{PureComponent} from 'react'
import './toppingSelector.css'
import { connect } from 'react-redux'

class ToppingSelector extends PureComponent {
  constructor(props) {
    super(props)
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }
  onChangeHandler(e) {
    if(e.target.checked===true)
    {
      const topcount = this.props.pizza.filter((value,index)=>index>2&&index<10).filter(value=>value===true).length
      if(topcount===3){
        alert('Only 3 toppings allowed!')
        e.target.checked=false
      } else {
        this.props.dispatch
        ({
          type:'TOPPING_SELECTOR',
          payload:e.target.value
        })
      }
    } else {
      this.props.dispatch
      ({
        type:'TOPPING_DESELECTOR',
        payload:e.target.value
      })
    }
  }

  render() {
    return (
      <div>
        <label>
          <input type="checkbox" value="1" name="topping_selector" className="ToppingSelector" onChange={this.onChangeHandler}/>
          <b>Pineapple</b>
        </label>
        <label>
          <input type="checkbox" value="2" name="topping_selector" className="ToppingSelector" onChange={this.onChangeHandler}/>
          <b>Corn</b>
        </label>
        <label>
          <input type="checkbox" value="3" name="topping_selector" className="ToppingSelector" onChange={this.onChangeHandler}/>
          <b>Olives</b>
        </label>
        <label>
          <input type="checkbox" value="4" name="topping_selector" className="ToppingSelector" onChange={this.onChangeHandler}/>
          <b>Red Onions</b>
        </label>
        <label>
          <input type="checkbox" value="5" name="topping_selector" className="ToppingSelector" onChange={this.onChangeHandler}/>
          <b>Spinach</b>
        </label>
        <label>
          <input type="checkbox" value="6" name="topping_selector" className="ToppingSelector" onChange={this.onChangeHandler}/>
          <b>Cherry Tomatoes</b>
        </label>
        <label>
          <input type="checkbox" value="7" name="topping_selector" className="ToppingSelector" onChange={this.onChangeHandler}/>
          <b>Cottage Cheese</b>
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

export default connect(mapStateToProps)(ToppingSelector)
