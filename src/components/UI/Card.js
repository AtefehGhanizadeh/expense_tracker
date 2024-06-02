function Card(props){
    const classes='bg-color'+' '+props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;