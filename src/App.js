import React from 'react';

// import Profile from './components/Profile/Profile';
import Profile from './components/Profile/index';

// import Statistics from './components/Statistics/Statistics';
import Statistics from './components/Statistics/index';

// import FriendList from './components/FriendList/FriendList';
import FriendList from './components/FriendList/index';
// import FriendListItem from './FriendList/FriendListItem';

// import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import TransactionHistory from './components/TransactionHistory/index';

import user from './components/data/user.json';
import statisticalData from './components/data/statistical-data.json';
import friends from './components/data/friends.json';
import transactions from './components/data/transactions.json';

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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
