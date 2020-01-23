const defaultState = {
  action: '',
  user: { name: 'Placeholder' },
  cards: [],
  cardInFullScreen: ''
}

const reducer = (prevState = defaultState, action) => {
  console.log('action type', action.type)
  switch (action.type) {
    case "OPEN_MENU":
      return { ...prevState, action: 'openMenu' };
    case "CLOSE_MENU":
      return { ...prevState, action: 'closeMenu' };
    case "UPDATE_USER":
      return { ...prevState, user: action.payload };
    case "UPDATE_CARDS":
      return { ...prevState, cards: action.payload };
    case "OPEN_CARD":
      console.log("I am at the reducer for open card")
      return { ...prevState, cardInFullScreen: 'openCard' };
    case "CLOSE_CARD":
      return { ...prevState, cardInFullScreen: 'closeCard' };
    default:
      console.log("Default state")
      return prevState;
  }
}

export default reducer