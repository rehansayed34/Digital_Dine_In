import React from 'react'

export default function Navbaradmin() {
    return (
        <div id="navb">
            <nav className="navbar fixed-top navbar-expand-lg" id="mynav">
                <div className="container-fluid">
                    <h1 className="navbar-brand">House of Flavours</h1>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/admin">My Menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/orderspage" >Orders</a>
                            </li>
                
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

