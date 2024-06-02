
function TransactionItem(props) {
  return (
    <div className='flex justify-between items-center h-[5rem] rounded-md bg-color shadow-sm px-[15px] py-[20px]'>
      <div className="w-[32px] h-[32px] lg:w-[40px] lg:h-[40px] bg-secondaryColor rounded-[50%] flex justify-center items-center text-primaryColor">
        {props.item.icon}
      </div>
      <div className="flex flex-col text-center gap-1 md:w-[80%] md:flex-row md:justify-between md:items-center">
        <p className="text-sm font-bold md:text-base">{props.item.category}</p>
        <div className="flex flex-col text-center ">
          <span className={`text-sm md:text-base ${props.item.type==='income'?'text-green':'text-red'}`}>{props.item.amount}</span>
          <span className="text-sm md:text-base text-gray">{props.item.date}</span>
        </div>
      </div>
      {/* <p>{props.item.note}</p> */}
    </div>
  );
}

export default TransactionItem;

