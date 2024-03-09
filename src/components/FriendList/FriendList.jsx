import FriendListItem from './FriendListItem'
import css from './FriendList.module.css'
const FriendList = ({ friends }) => {
  return (
    <div className={css.friendBox}>
      <ul className={css.friendsList}>
        {friends.map((friend) => (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FriendList
