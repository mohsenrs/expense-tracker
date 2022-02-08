import './App.css'
import Addtransaction from './components/Addtransaction'
import Balance from './components/Balance'
import Header from './components/Header'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import { GlobalContextProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalContextProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <Addtransaction />
      </div>
    </GlobalContextProvider>
  )
}

export default App
