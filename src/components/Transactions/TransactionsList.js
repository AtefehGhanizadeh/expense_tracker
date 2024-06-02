import TransactionItem from './TransactionItem'
function TransactionsList(props){

    return(
        <div >
            <ul className='flex flex-col gap-4 list-none'>
                {props.items.map(item=> <li key={item.id}><TransactionItem  item={item}/></li>)}
            </ul>
        </div>
        
        
    )

}

export default TransactionsList