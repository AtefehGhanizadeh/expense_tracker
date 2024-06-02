
function TheButton(props){

    let className='text-center border-none text-5xl '+props.className

    function setFormVisibilityHandler(){
        props.onClick()
    }
    return<button className={className} onClick={setFormVisibilityHandler}>{props.children}</button>
}

export default TheButton