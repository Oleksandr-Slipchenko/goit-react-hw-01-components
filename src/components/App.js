import React from 'react';
import Profile from './Profile';
import user from '../social-profile/user.json';
import Statistics from './Statistics';
import statisticalData from '../statistics/statistical-data.json';
import FriendList from './FriendList';
import friends from '../friend-list/friends.json';
import FriendListItem from './FriendListItem';

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList>
        <FriendListItem friends={friends} />
      </FriendList>
    </>
  );
}
