import React from 'react';
import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
// import FriendListItem from './FriendList/FriendListItem';
import friends from './components/FriendList/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

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
