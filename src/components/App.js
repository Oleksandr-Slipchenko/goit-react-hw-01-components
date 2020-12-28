import React from 'react';
import Profile from './Profile';
import user from '../social-profile/user.json';
import Statistics from './Statistics';
import statisticalData from '../statistics/statistical-data.json';

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
    </>
  );
}
