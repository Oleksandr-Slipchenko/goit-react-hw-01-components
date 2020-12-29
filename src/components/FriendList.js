import React from 'react';
import PropTypes from 'prop-types';

function FriendList({ children }) {
  return <ul className="friend-list">{children}</ul>;
}

FriendList.propTypes = {
  children: PropTypes.object.isRequired,
};

export default FriendList;
