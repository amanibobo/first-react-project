import GTLOGO from '../assets/Georgia_Tech_Yellow_Jackets_logo.svg.png'

function NavBar() {

    return (
        <nav>
            <img src={GTLOGO} className='nav--icon' />
            <h3 className='nav--logo_text'>GeorgiaTechFacts</h3>
            <h4 className='nav--title'>GT - Project 1</h4>
        </nav>
    )

}
export default NavBar