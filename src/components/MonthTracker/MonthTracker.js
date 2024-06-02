import Cart from "./Cart"
import Limit from "./Limit"
import TransactionsList from '../Transactions/TransactionsList'
import TheButton from '../UI/TheButton' 
import {useState } from "react"
import TransactionForm from './NewTransaction/TransactionForm'
import Card from '../UI/Card'
import { Wallet, Pizza ,Plus} from "lucide-react"

const currDate=new Date().toISOString().slice(0,10)

const DUMMY_MONTH_ITEMS=[
  {
    amount: 700,
    category: "Food",
    type: "income",
    note: "for food",
    date: currDate,
    icon:<Wallet size={25} strokeWidth={1.75} />,
    id: 1,
  },
  {
    amount: 30,
    category: "Food",
    type: "expense",
    note: "for food",
    date: currDate,
    icon:<Pizza size={25} strokeWidth={1.75}/>,
    id: 2,
  },
]

function MonthTracker(){
  const [transactionsList, setNewTransaction] = useState(DUMMY_MONTH_ITEMS);
  const[formVisibality,setFormVisibility]=useState(false)
  const newArray=transactionsList.slice(0,4)

  let income=0
  let expense=0
  let balance=0

  transactionsList.forEach(item=>{
  if(item.type==='income'){
    income+=Math.floor(item.amount)
  }
  else{
    expense+=Math.floor(item.amount)
  }
})
      
balance=income-expense



function addTransaction(item){

    setNewTransaction((prevState) => {
      return [item, ...prevState];
    });
    setFormVisibility(false)
    }

  function showForm(){
      setFormVisibility(true)

  }
  function hideForm(){
    setFormVisibility(false)

}

  if(formVisibality){
    return(
      <div className="w-[100%] h-[100%] md:w-[40%] md:h-[100%] relative">
        <TransactionForm hideFormHandler={hideForm} onAddItem={addTransaction}/>
      </div>
    )
  }


  return (
      <div className="w-[100%] h-[100%] md:w-[40%] md:h-[100%]">
        <div className="flex justify-center h-[100%] md:border-l-4 md:border-dashed md:border-l-gray bg-primaryColor" >
          <div className="w-[90%] h-[80%] gap-4 flex flex-col mt-[7rem] mb-[1rem]">
            <Card className="flex h-[40%] rounded-md #4c1d95" >
              <Cart income={income} expenses={expense} balance={balance}/>
              <Limit expense={expense}/>
            </Card>
          <TransactionsList items={newArray}/> 
          <TheButton onClick={showForm} className='bg-color fixed w-[30px] h-[70px] right-0 bottom-4 rounded-l-lg' ><Plus size={32} strokeWidth={1.75}/></TheButton>
          </div>
          
        </div>
          
      </div>
      
      
  )
}
export default MonthTracker