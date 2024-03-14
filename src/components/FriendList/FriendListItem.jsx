import clsx from 'clsx'
import css from './FriendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img
        className={clsx(css.friendAvatar)}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={clsx(css.friendName)}>{name}</p>
      <p className={clsx({ [css.online]: isOnline, [css.offline]: !isOnline })}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  )
}
export default FriendListItem
