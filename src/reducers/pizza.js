const pizza = [0,0,0,false,false,false,false,false,false,false,false] //[price,base,sauce,toppings[1 to 7],turbodrone]
const basePrice = [6.45,8.99,11.49,13.49]
const saucePrice = [0,0,1,1.5]
const toppingPrice = 0.5

export default function(state = pizza, {type,payload} = {}) {
  switch(type) {

    case 'BASE_SELECTOR':
      state[1]=parseInt(payload)
      state[0]=basePrice[state[1]-1]
      return state

    case 'SAUCE_SELECTOR':
      state[2]=parseInt(payload)
      return state

    case 'TOPPING_SELECTOR':
      state[parseInt(payload)+2]=true
      return state

    case 'TOPPING_DESELECTOR':
      state[parseInt(payload)+2]=false
      return state

    case 'TURBO_SELECTOR':
      state[10]=true
      return state

    case 'TURBO_DESELECTOR':
      state[10]=false
      return state


    default:
      return state

  }
}
