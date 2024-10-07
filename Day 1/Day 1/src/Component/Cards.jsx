import './Cards.css';
const Cards = (props) =>{
    return(
        <div className='Cards' onClick={props.fun} >
            <p > {props.name} </p>
        </div>
    )
}
export default Cards