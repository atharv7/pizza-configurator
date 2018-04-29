export const pizza = [0,0,false,false,false,false,false,false,false,false] //[base,sauce,toppings[1 to 7],turbodrone]

export default function(state = pizza, {type,payload} = {}) {
  switch(type) {

    case 'BASE_SELECTOR':
      state[0]=payload
      return state

    case 'SAUCE_SELECTOR':
      state[1]=payload
      return state

    case 'TOPPING_SELECTOR':
      state[1]=payload
      return state

    case 'TURBO_SELECTOR':
      state[1]=payload
      return state

    default:
      return state

  }
}
