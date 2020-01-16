const defaultState = {
  action: '',
  user: { name: 'Placeholder' },
  cards: []
}

const reducer = (prevState = defaultState, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return { ...prevState, action: 'openMenu' };
    case "CLOSE_MENU":
      return { ...prevState, action: 'closeMenu' };
    case "UPDATE_USER":
      return { ...prevState, user: action.payload };
    case "UPDATE_CARDS":
      return { ...prevState, cards: action.payload }
    default:
      return prevState;
  }
}

export default reducer