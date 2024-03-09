import css from './TransactionHistory.module.css'
const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={css.transactionTable}>
        <thead>
          <tr className={css.transactionHeader}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((transaction) => (
            <tr className={css.transactionBody} key={transaction.id}>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionHistory
