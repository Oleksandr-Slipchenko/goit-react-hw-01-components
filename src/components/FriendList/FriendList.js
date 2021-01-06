import React from 'react';
import PropTypes from 'prop-types';
// import './FriendList.module.css';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={s.friend}>
      {friends.map(FriendListItem => (
        <li className="item" key={FriendListItem.id}>
          <span
            className="status"
            style={{
              backgroundColor: FriendListItem.isOnline ? 'green' : 'red',
            }}
          >
            isOnline?
          </span>
          <img
            className="avatar"
            src={FriendListItem.avatar}
            alt=""
            width="48"
          />
          <p className="name">{FriendListItem.name}</p>
        </li>
      ))}
    </ul>
  );
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

// Для подключения children (FriendListItem)

// function FriendList({ children }) {
//   return <ul className="friend-list">{children}</ul>;
// }
