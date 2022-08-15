import s from './Header.module.css';

console.log(s);

function Header (){
    return (
        <header className={`${s.header}`}>
            <div className="container">
                <div className={`${s.headerBar}`}>
                    <img className={`${s.logo}`}
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png"
                         alt="pic"/>
                </div>

            </div>
        </header>

    )
}

export default Header;