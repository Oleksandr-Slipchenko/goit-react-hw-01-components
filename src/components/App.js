import React from 'react';
import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistics from './Statistics/Statistics';
import statisticalData from './Statistics/statistical-data.json';
import FriendList from './FriendList/FriendList';
// import FriendListItem from './FriendList/FriendListItem';
import friends from './FriendList/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}

        //  Пример выше можно сделать через распыление

        // {...user}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      {/* <FriendList>
        <FriendListItem friends={friends} />
      </FriendList> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
