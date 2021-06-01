import React  from 'react';
import SignUp from './signUp';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";


const Header = () => {
	const { user } = useSelector(state => state.auth);
	const { isLoggedIn } = useSelector(state => state.auth);
    return (
	<div>
		<div className="header blue-skin header-transparent change-logo">
				<div className="container">
					<nav id="navigation" className="navigation navigation-landscape">
						<div className="nav-header">
							<a className="nav-brand static-logo" href="/"><img src="../img/logodar.png" className="logo" width="37%" hight="20%" alt=""/></a>
							<a className="nav-brand fixed-logo" href="/"><img src="../img/logodar.png" className="logo" alt="" /></a>
							<div className="nav-toggle"></div>
						</div>
						<div className="nav-menus-wrapper">
							{!isLoggedIn &&
							<ul className="nav-menu">
								<li><a href="/register" data-bs-toggle="modal" data-bs-target="#signup">Sign Up</a></li>
							</ul>
							}
							
							
							<ul className="nav-menu nav-menu-social align-to-right">
								{user && user.message.role === 'Agent' &&
									<li>
										<a href="/add-property" className="text-success"><img src="../img/submit.svg" width="20" alt="" className="mr-2" />Add Property</a>
									</li>
								}
								
								{!isLoggedIn &&
									<li className="add-listing light">
										<a href="/login" data-bs-toggle="modal" data-bs-target="#login"><img src="../img/user-dark.svg" width="12" alt="" className="mr-2" />Sign In</a>
									</li>
								}
								
							</ul>
						</div>
					</nav>
				</div>
			</div>
	</div>

    )
}
export default Header;