import { useState } from 'react'
import { Wallet,Pizza, Plane, Home } from 'lucide-react'
import Card from '../UI/Card'
import TransactionsList from '../Transactions/TransactionsList'
import TransactionsFilter from './TransactionsFilter'
import BarChart from './BarChart'


const DUMMY_YEAR_ITEMS=[{
    amount: 30,
    category: "Food",
    type: "expense",
    note: "for food",
    date: "2021-06-05",
    year:"2021",
    month:6,
    icon:<Pizza size={25} strokeWidth={1.75}/>,
    id: 1,
  },
  {
    amount: 70,
    category: "Travel",
    type: "expense",
    note: "for travel",
    date: "2021-07-12",
    year:"2021",
    month:7,
    icon:<Plane size={25} strokeWidth={1.75}/>,
    id: 2,
  },
  
  {
    amount: 30,
    category: "Food",
    type: "expense",
    note: "for food",
    date: "2022-06-05",
    year:"2022",
    month:6,
    icon:<Pizza size={25} strokeWidth={1.75}/>,
    id: 3,
  },
  {
    amount: 100,
    category: "Food",
    type: "income",
    note: "for food",
    date: "2022-11-05",
    year:"2022",
    month:11,
    icon:<Wallet size={25} strokeWidth={1.75}/>,
    id: 4,
  },
  {
    amount: 300,
    category: "Food",
    type: "income",
    note: "for food",
    date: "2023-07-05",
    year:"2023",
    month:7,
    icon:<Wallet size={25} strokeWidth={1.75}/>,
    id: 5,
  },
  {
    amount: 30,
    category: "Home Rent",
    type: "expense",
    note: "for food",
    date: "2023-07-15",
    year:"2023",
    month:7,
    icon:<Home size={25} strokeWidth={1.75}/>,
    id: 6,
  }]
  

function YearTracker(){

    const [filteredYear, setFilteredYear] = useState('2023');
    const chartIncomeArray=[0,0,0,0,0,0,0,0,0,0,0,0]
    const chartExpenseArray=[0,0,0,0,0,0,0,0,0,0,0,0]

    const filteredExpenses=DUMMY_YEAR_ITEMS.filter(expense=>expense.date.slice(0,4)===filteredYear)
    
    filteredExpenses.forEach((expense)=>{
      if(expense.type==="income"){
        chartIncomeArray[expense.month]+=expense.amount
      }
    })
    filteredExpenses.forEach((expense)=>{
      if(expense.type==="expense"){
        chartExpenseArray[expense.month]+=expense.amount
      }
    })
    
    return(
        <div className='h-[100%] w-[60%] border-r-4 border-dashed border-r-gray hidden md:block'>
           <div className='h-[100%] w-[80%] flex flex-col mx-auto'>
              <div className='h-[2.5rem] mt-[3.5rem] mb-[1rem]'>
              <TransactionsFilter select={filteredYear} onFilter={setFilteredYear}/>
              </div>
              <div className='h-[80%] flex flex-col gap-y-4'>
              <Card className='h-[50%] rounded-md shadow-sm md:h-[40%]'>
                  <BarChart incomeArray={chartIncomeArray}  expenseArray={chartExpenseArray}/>
              </Card>
              <TransactionsList items={filteredExpenses}/>
              </div>
          </div>
            
        </div>
    )
}

export default YearTracker