const defaultState = {
  action: '',
  name: ''
}

const reducer = (prevState = defaultState, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return { ...prevState, action: 'openMenu' };
    case "CLOSE_MENU":
      return { ...prevState, action: 'closeMenu' };
    case "UPDATE_NAME":
      return { ...prevState, name: action.name }
    default:
      return prevState;
  }
}

export default reducer