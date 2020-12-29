import React from 'react';
import PropTypes from 'prop-types';

// class изменил на className

function FriendListItem({ friends }) {
  // const isOnline = true;
  return friends.map(friend => (
    <li className="item" key={friend.id}>
      <span className="status">
        {/* {isOnline ? span.status - green : span.status - red} */}
      </span>
      <img className="avatar" src={friend.avatar} alt="" width="48" />
      <p className="name">{friend.name}</p>
    </li>
  ));
}

FriendListItem.defaultProps = {
  avatar: '../friend-list/preview.jpg',
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendListItem;
