import './header.css';

const myheader = ['Home','About','Friends','Notifications']
const Header = () =>{
    return(
        <ul className='header'>
            {
                myheader.map((item)=>{
                    return(
                        <li>{item}</li>
                    )
                })
            }
        </ul>
    )
}
export default Header