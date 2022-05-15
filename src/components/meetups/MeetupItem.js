import Card from '../ui/Card'
import React from 'react'
import classes from './MeetupItem.module.css'
import { useContext } from 'react'
import FavouritesContext from '../../store/favourites-context'

const MeetupItem = ({ image, title, description, address, id}) => {
  const favouritesCtx = useContext(FavouritesContext)

  const itemIsFavourite = favouritesCtx.itemIsFavourite(id)

  function toggleFavouriteStatusHandler() {
    if (itemIsFavourite) {
      favouritesCtx.removeFavourite(id)
    } else {
      favouritesCtx.addFavourite({
        id: id,
        title: title,
        description: description,
        address: address,
      })
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>{itemIsFavourite ? 'Remove From Favourites' : 'To Favourites'}</button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem