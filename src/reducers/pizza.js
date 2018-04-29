const pizza = [0,0,0,false,false,false,false,false,false,false,false] //[price,base,sauce,toppings[1 to 7],turbodrone]
const basePrice = [6.45,8.99,11.49,13.49]
const saucePrice = [0,0,1,1.5]
const toppingPrice = 0.5

const totalPrice = (state) => {
  const topquantity = state.filter((value,index)=>index>2&&index<10).filter(value=>value===true).length
  const turbochosen = state[10]
  const price = (basePrice[state[1]-1] + ((state[2]!==0)?saucePrice[state[2]-1]:0) + topquantity*toppingPrice)*((turbochosen)?1.1:1)
  return +(Math.round(price + "e+2")  + "e-2")

}
export default function(state = pizza, {type,payload} = {}) {

  payload=parseInt(payload)
  switch(type) {
    case 'BASE_SELECTOR':
      state[1]=payload
      state[0]=totalPrice(state)
      return state

    case 'SAUCE_SELECTOR':
      state[2]=payload
      state[0]=totalPrice(state)
      return state

    case 'TOPPING_SELECTOR':
      state[payload+2]=true
      state[0]=totalPrice(state)
      return state

    case 'TOPPING_DESELECTOR':
      state[payload+2]=false
      state[0]=totalPrice(state)
      return state

    case 'TURBO_SELECTOR':
      state[10]=true
      state[0]=totalPrice(state)
      return state

    case 'TURBO_DESELECTOR':
      state[10]=false
      state[0]=totalPrice(state)
      return state


    default:
      return state

  }
  alert('hi')
}
