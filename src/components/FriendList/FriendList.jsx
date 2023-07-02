import PropTypes from 'prop-types';
import css from './Friends.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.FriendList}>
      {friends.map(friend => (
        <li className={css.FriendItem} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
