export function openMenu() {
  return { type: "OPEN_MENU" }
}

export function closeMenu() {
  return { type: "CLOSE_MENU" }
}

export function updateUser(user) {
  return {
    type: "UPDATE_USER",
    payload: user
  }
}

export function fetchUser() {
  return function (dispatch) {
    // run a fetch

    fetch(`http://localhost:3000/api/v1/users`)
      .then(res => res.json())
      .then(user => {
        dispatch(updateUser(user[0]))
      })
  }
}

export function updateCards(cards) {
  return {
    type: "UPDATE_CARDS",
    payload: cards
  }
}

export function fetchCards() {
  return function (dispatch) {
    // run a fetch

    fetch(`http://localhost:3000/api/v1/cards`)
      .then(res => res.json())
      .then(cards => {
        console.log("CARDS", cards)
        dispatch(updateCards(cards))
      })
  }
}