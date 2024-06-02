
import LimitChart from './LimitChart'

function Limit(props){
    return(
        <div className='p-4 flex flex-col w-[40%] min-w-[104px] text-sm items-center justify-between border-l-2 border-l-gray border-dashed '>
            <div className='w-[100%] h-[55%] '>
                <LimitChart limit={props.expense}></LimitChart> 
            </div>
            <div className=' text-center h-[35%] flex flex-col items-center justify-between'>
                <p className='text-[0.75rem]'>Monthly expense limit</p>
                <div> 
                    <span className='text-red text-[0.75rem]'>{`$${props.expense}`}</span>
                    <span className='text-[0.75rem]'>of $1000</span>
                 </div>
               
            </div>
        </div>
    )
}

export default Limit