const defaultState = {
  action: '',
  user: { name: 'Placeholder' },
  cards: [],
  cardInFullScreen: '',
  image: 'http://cdn3.whatculture.com/images/2019/03/9a76f69c21e1525a-600x338.png',
  ability: '',
  selectedCards: []
}

const reducer = (prevState = defaultState, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return { ...prevState, action: 'openMenu' };
    case "CLOSE_MENU":
      return { ...prevState, action: 'closeMenu' };
    case "UPDATE_USER":
      return { ...prevState, user: action.payload, image: action.payload.sprites.front_shiny, ability: action.payload.abilities[0].ability.name };
    case "UPDATE_CARDS":
      return { ...prevState, cards: [...prevState.cards, action.payload] };
    case "OPEN_CARD":
      return { ...prevState, cardInFullScreen: 'openCard' };
    case "CLOSE_CARD":
      return { ...prevState, cardInFullScreen: 'closeCard' };
    case "SELECT_CARD":
      console.log('Im here at the reducer', action.payload.name)
      return { ...prevState, selectedCards: [...prevState.selectedCards, action.payload] }
    default:

      return prevState;
  }
}

export default reducer