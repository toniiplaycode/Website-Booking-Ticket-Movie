const MobileNav = () => {
    return(
        <>
        <div className="mobile-nav-menu">
            <button
                className="btn-menu-close">
                    x
            </button>
    
            <ul className="mobile-nav-items">
                <li className="mobile-nav-list-item">
                <button
                    className="mobile-nav-item"
                >
                    Home
                </button>
                </li>
                <li className="mobile-nav-list-item">
                <button
                    className="mobile-nav-item"
                >
                    Showtimes
                </button>
                </li>
                <li className="mobile-nav-list-item">
                <button
                    className="mobile-nav-item"
                >
                    About Us
                </button>
                </li>
    
                <li className="mobile-nav-list-item">
                <button
                    className="mobile-nav-item"
                >
                    Sign Up
                </button>
                </li>
                <li className="mobile-nav-list-item">
                <button
                    className="mobile-nav-item"
                >
                    Sign in
                </button>
                </li>
    
            </ul>
            </div>
        </>
    )
}

export default MobileNav;