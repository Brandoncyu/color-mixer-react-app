export const TOGGLE_COLOR = 'TOGGLE_COLOR'

export const toggleColor = (index) => {
  return {
    type: TOGGLE_COLOR,
    payload: index
  }
}
