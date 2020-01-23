export function openMenu() {
  return { type: "OPEN_MENU" }
}

export function closeMenu() {
  return { type: "CLOSE_MENU" }
}

export function openCard() {
  console.log("Im in open card")
  return { type: "OPEN_CARD" }
}

export function closeCard() {
  return { type: "CLOSE_CARD" }
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

    fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 150) + 1}`)
      .then(res => res.json())
      .then(user => {
        dispatch(updateUser(user))
      })
  }
}

// export function fetchUser() {
//   return function (dispatch) {
//     // run a fetch

//     fetch(`http://d07bedb4.ngrok.io/api/v1/users`)
//       .then(res => res.json())
//       .then(user => {
//         dispatch(updateUser(user[0]))
//       })
//   }
// }

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
        dispatch(updateCards(cards))
      })
  }
}

