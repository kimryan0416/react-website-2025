import React, { useState } from 'react';


import Profile from'./Profile';
import NavLink from './NavLink';
import { useMobile } from '../../hooks';

import {
	indexIcon,
	portfolioIcon,
	downloadIcon,
	menu,
} from '../../assets';

import { resume, cv } from "../../downloads";
import './Nav.css';

const Nav = () => {
	const [ open, setOpen ] = useState(false);
	//const [ location, setLocation ] = useState(window.location.href.split("#")[1].split("/")[1]);
	const [ location, setLocation ] = useState(window.location.href.split("/")[1]);
	const isMobile = useMobile();

	const extraClasses = {
		index:"",
		portfolio:"",
	}
	
	switch(location) {
		case "":
		  extraClasses.index = "CurrentLink";
		  break;
		case "portfolio":
		  extraClasses.portfolio = "CurrentLink";
		  break;
		default:
		  break;
	}

	const HandleLinkClick = (l='') => { 
		setLocation(l); 
		setOpen(false);
	}

	return (
		<header className="AppHeader">
			<nav className="AppNav">
				<Profile />
				<div className="NavLinks">
					<div className='NavLinksWrapper'>
						<NavLink to='' cName={extraClasses.index} desc="Why, hello there! Intro & Skill Set" callback={()=>{HandleLinkClick('')}}>
							<img src={indexIcon} alt="" className="NavIcon" />
							<span>Profile</span>
						</NavLink>
						<NavLink to='/portfolio' cName={extraClasses.portfolio} desc="All my public projects, from VR projects to web applications." callback={()=>{HandleLinkClick('portfolio')}}>
							<img src={portfolioIcon} alt="" className="NavIcon" />
							<span>Portfolio</span>
						</NavLink>
						<NavLink to={resume} cName='DownloadLink' desc="Download my Resume in PDF form." useA={true}>
							<img src={downloadIcon} alt="" className="NavIcon" />
							<span>Resume <span className="h8">(109 kB)</span></span>
						</NavLink>
						<NavLink to={cv} cName='DownloadLink' desc="Download my CV in PDF form." useA={true}>
							<img src={downloadIcon} alt="" className="NavIcon" />
							<span>CV <span className="h8">(121 kB)</span></span>
						</NavLink>
					</div>
				</div>
			</nav>
		</header>
	);
}

/*
const Nav = () => {
	const [ open, setOpen ] = useState(false);
	const [ location, setLocation ] = useState(window.location.href.split("#")[1].split("/")[1]);
	const isMobile = useMobile();

	const HandleClickOutside = () => { setOpen(false); }
	const ToggleMenu = () => { setOpen(!open); }
	const HandleLinkClick = (l='') => { 
		setLocation(l); 
		setOpen(false);
	}
	
	const ref = useOutsideClick(HandleClickOutside);

	const extraClasses = {
    index:"",
    portfolio:"",
    blog:"",
  }
  switch(location) {
    case "":
      extraClasses.index = "CurrentLink";
      break;
    case "portfolio":
      extraClasses.portfolio = "CurrentLink";
      break;
    case "blog":
      extraClasses.blog = "CurrentLink";
      break;
    default:
      break;
  }


  const mobileButton = (isMobile) 
  	? (
  		<div className="NavMobileButtonContainer" onClick={ToggleMenu}>
	  		<Image src={menu} width={24} height={24} />
  		</div>
  	)
  	: null;

	return (
		<header className={(isMobile) ? (open) ? "AppHeader Mobile Open" : "AppHeader Mobile" : "AppHeader"}>
			<nav ref={ref} className={(isMobile) ? (open) ? "AppNav Mobile Open" : "AppNav Mobile" : "AppNav"}>
				{mobileButton}
				<Profile />
				<div className="NavLinks">
					<div className='NavLinksWrapper'>
						<NavLink to='/' cName={extraClasses.index} desc="Why, hello there! Intro & Skill Set" callback={()=>{HandleLinkClick('')}}>
							<img src={indexIcon} alt="" className="NavIcon" />
							<span>Index</span>
						</NavLink>
						<NavLink to='/portfolio' cName={extraClasses.portfolio} desc="All my public projects, from VR projects to web applications." callback={()=>{HandleLinkClick('portfolio')}}>
							<img src={portfolioIcon} alt="" className="NavIcon" />
							<span>Portfolio</span>
						</NavLink>
						<NavLink to='/blog' cName={extraClasses.blog} desc="My blog, where I occasionally post updates and stuff." callback={()=>{HandleLinkClick('blog')}}>
							<img src={blogIcon} alt="" className="NavIcon" />
							<span>My Blog</span>
						</NavLink>
						<NavLink to={resume} cName='DownloadLink' desc="Download my resume in PDF form." useA={true}>
							<img src={downloadIcon} alt="" className="NavIcon" />
							<span>Resume <span className="h8">(57 kB)</span></span>
						</NavLink>
					</div>
				</div>
			</nav>
		</header>
	);
}
*/

export default Nav;