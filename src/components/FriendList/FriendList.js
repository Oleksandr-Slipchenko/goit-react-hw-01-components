import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  if (friends.length === 0) return null;
  return <ul className={s.friend}>{friends.map(FriendListItem)}</ul>;
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FriendList;

// Мой вариант ДЗ без подключения FriendListItem

// function FriendList({ friends }) {
//   if (friends.length === 0) return null;
//   return (
//     <ul className={s.friend}>
//       {friends.map(friendListItem => (
//         <li className={s.item} key={friendListItem.id}>
//           <span
//             className={s.status}
//             style={{
//               backgroundColor: friendListItem.isOnline ? 'green' : 'red',
//             }}
//           ></span>
//           <img
//             className={s.avatar}
//             src={friendListItem.avatar}
//             alt=""
//             width="48"
//             style={{
//               border: friendListItem.isOnline
//                 ? 'solid 2px green'
//                 : 'solid 2px red',
//             }}
//           />
//           <p className={s.name}>{friendListItem.name}</p>
//         </li>
//       ))}
//     </ul>
//   );
// }
