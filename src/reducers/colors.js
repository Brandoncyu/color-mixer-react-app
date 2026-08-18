import {
  TOGGLE_COLOR
} from '../actions/colors'

const initialColors = [
  { value: '#ff0000', name: 'Red', selected: false },
  { value: '#00ff00', name: 'Green', selected: false },
  { value: '#0000ff', name: 'Blue', selected: false }
]

function colors (state=initialColors, action) {
  switch (action.type){
    case TOGGLE_COLOR:
      const color = state[action.payload]
      color.selected = !color.selected
      return [ ...state ]

    default:
      return state
  }
}

export default colors
