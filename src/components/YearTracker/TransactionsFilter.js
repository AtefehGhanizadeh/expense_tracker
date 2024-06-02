function TransactionsFilter(props){ 

    return(
    <div>
        <div className='flex justify-between items-center'>
            <label className='text-base lg:text-lg'>Filter by year</label>
            <select value={props.select} onChange={(e)=>props.onFilter(e.target.value)} className='bg-secondaryColor px-2 py-1 lg:px-6 outline-none rounded-md  '>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
            </select>
        </div>
        
    </div>

    )
}

export default TransactionsFilter