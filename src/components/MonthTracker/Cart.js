import { ArrowDown, ArrowUp } from 'lucide-react'

function Cart(props){
    return(
        <div className='flex flex-col text-center gap-4 w-[60%] h-[100%] justify-between p-4'>
            <p className='text-lg'>Total Balance</p>
            <p className='text-lg font-bold'>{`$${props.balance}`}</p>
            <div className='flex justify-between'>
                <div className='flex justify-between items-center'>
                    <ArrowUp color="#66ff00"/><span>{props.income}</span>
                </div>
                <div className='flex justify-between items-center'>
                    <ArrowDown color="#ff0000"/><span>{props.expenses}</span>
                </div>
            </div>
        </div>
    )
}

export default Cart