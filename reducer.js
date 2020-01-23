const defaultState = {
  action: '',
  user: { name: 'Placeholder' },
  cards: [],
  cardInFullScreen: '',
  image: 'http://cdn3.whatculture.com/images/2019/03/9a76f69c21e1525a-600x338.png'
}

const reducer = (prevState = defaultState, action) => {
  console.log('action type', action.type)
  switch (action.type) {
    case "OPEN_MENU":
      return { ...prevState, action: 'openMenu' };
    case "CLOSE_MENU":
      return { ...prevState, action: 'closeMenu' };
    case "UPDATE_USER":
      return { ...prevState, user: action.payload, image: action.payload.sprites.front_shiny };
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