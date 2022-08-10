




function Header (){
    return (
        <header className={"header"}>
            <div className="container">
                <div className={"header__bar"}>
                    <img className={"logo"}
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png"
                         alt="pic"/>
                    {/*<input type="text" className={"header__search"}/>*/}
                </div>

            </div>
        </header>

    )
}

export default Header;