import './header.scss'
import Barnav from '../barnav'

export default function Header(){

    return (        
        <header>
            <Barnav />
            <h1 className="header">Pocket's Astronomy</h1>
            <div className="subheading">Online resources</div>
        </header>
    )
}