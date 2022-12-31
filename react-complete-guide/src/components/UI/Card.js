import './Card.css'
const Card=(props)=>{
  //card 가 어디가서든 적용되게 하는 것
  const classes='card ' +props.className;
  return(
    <div className={classes}>
      {props.children}
    </div>
  )
}

export default Card;
