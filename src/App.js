import React from 'react'
import Container from './Container/Container'
import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics'
import FriendList from './FriendList/FriendList'
import TransactionHistory from './TransactionHistory/TransactionHistory'
import user from './dbJsons/user.json'
import statisticalData from './dbJsons/statistical-data.json';
import friendList from './dbJsons/friends.json'
import transactions from './dbJsons/transactions.json'
import './App.css'

const App = () => {
    return <Container>
        <h1>HW #1</h1>
        <h2>Task 1 - Profile</h2>
        <Profile
            src={user.avatar}
            name={user.name}
            tag={user.tag}
            location={user.location}
            stats={user.stats}
        />
        <h2>Task 2 - Statistics</h2>
        <Statistics title="Upload stats" stats={statisticalData} />
        <h2>Task 3 - Friends</h2>
        <FriendList friends={friendList} />
        <h2>Task 3 - Transaction History</h2>
        <TransactionHistory items={transactions} />
    </Container>
}

export default App