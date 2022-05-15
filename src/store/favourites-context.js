import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (meetupId) => {},
  itemIsFavourite: (meetupId) => {},
})

export function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([])

  function addFavouriteHandler(favouriteMeetup) {
    setUserFavourites((prevUserFavourites) => prevUserFavourites.concat(favouriteMeetup))
  }

  function removeFavouriteHandler(meetupId) {
    setUserFavourites(prevUserFavourites => {
      return prevUserFavourites.filter((meetup) => meetup.id !== meetupId)
    })
  }

  function itemIsFavourite(meetupId) {
    return userFavourites.some(meetup => meetupId === meetup.id)
  }

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavourite
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  )
}

export default FavouritesContext