import React from 'react'
import PropTypes from 'prop-types'
import styles from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    return (
<table className={styles.transactionHistory}>
  <thead>
    <tr>
      <th className={styles.title}>Type</th>
      <th className={styles.title}>Amount</th>
      <th className={styles.title}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map((item) => (
        <tr className={styles.line} key={item.id}>
      <td className={styles.item}>{item.type}</td>
      <td className={styles.item}>{item.amount}</td>
      <td className={styles.item}>{item.currency}</td>
    </tr>
  ))}
  </tbody>
</table>
)
}

TransactionHistory.protoTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired
}


export default TransactionHistory