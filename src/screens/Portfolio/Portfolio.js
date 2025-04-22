// Package Imports
import { 
	Routes,
	Route,
	Link,
} from "react-router-dom";

// Components, Hooks, Projects, and CSS
import { 
	Divider, 
	Image, 
	Button,
	ExtURL,
	Date,
	ScrollToTop,
	WithRouter
} from "../../components";
import { useMobile } from '../../hooks';
import projects_dict from "./Projects";
import "./Portfolio.css";

// Portfolio - controls the routing
const Portfolio = () => {
	return (
		<>
		<ScrollToTop />
		<Routes>
			<Route path="/research"	element={<PortfolioPage page="Research"><Research /></PortfolioPage>} />
			<Route path="/work"		element={<PortfolioPage page="Work Experience"><Work /></PortfolioPage>} />
			<Route path="/projects" element={<PortfolioPage page="Projects"><Projects /></PortfolioPage>} />
			{projects_dict.all.map(p=>{
				return (
					<Route 
						path={`/${p.url}`}
						element={<PortfolioItemContent header={p.header} content={p.content} />}
					/>
				)
			})}
			<Route path="/" element={<PortfolioHome />} />
		</Routes>
		</>
	);

}

// Controls content on the home page
const PortfolioHome = () => {
	const oneplace = projects_dict.work.filter(p=>p.key==="oneplace")[0];
	const tucanfitness = projects_dict.work.filter(p=>p.key==="tucanfitness")[0];
	return (
		<>
			<h1>Portfolio</h1>
			<Divider space={32} />
			<p>This is a list containing my prior work experience, coding projects, and research experience. Work experiences involve websites for clients, while personal projects are attempts to expand my knowledge about web programming, virtual reality, or <span className='no-br'>or prototyping.</span></p>
			<Divider space={8} />
			<p><i>NOTE: Some portfolio items are cross-referenced between work experiences, projects, and research experiences. In other words, some items may appear more than once.</i></p>
			<Divider space={32} />
			<div className="Portfolio">
				<div className="PortfolioPages">
					<div className="PortfolioPageLink">
						<Link to="/portfolio/research">
							<h3>Research</h3>
							<p className="h7">Research papers or reports I've previously written during my degree programs. Three involve <strong>Virtual Reality</strong> and another two involve <strong>User Experiences</strong>.</p>
							<p className="h7 a">- Click here if you're interested in my research experience.</p>
						</Link>
					</div>
					<Divider space={16} />
					<div className="PortfolioPageLink">
						<Link to="/portfolio/work">
							<h3>Work Experience</h3>
							<p className="h7">Particular experiences working in universities, startups, and companies. I've worked in <strong>research internships</strong>, <strong>contract positions</strong>, and <strong>startup companies</strong>.</p>
							<p className="h7 a">- Click here if you're looking for my professional experiences.</p>
						</Link>
					</div>
					<Divider space={16} />
					<div className="PortfolioPageLink">
						<Link to="/portfolio/projects">
							<h3>Personal Projects</h3>
							<p className="h7">A collection of personal projects that I had the pleasure of working in during my free time. Subtopics include <strong>Virtual Reality prototypes</strong>, <strong>web projects</strong>, <strong>games/hardware</strong>.</p>
							<p className="h7 a">- Click here if you're interested in the various projects I've participated in or developed.</p>
						</Link>
					</div>
					<Divider space={16} />
				</div>
				<div className="PortfolioResources">
					<h5>Downloadable Resources</h5>
					<Divider space={8} />
					<p className="h7">Thanks to the various work experiences and projects, I've amassed a collection of tools and artifacts to help structure my development process in UX-heavy projects. I've made them available at the link below, for anybody curious!</p>
					<Divider space={16} />
					<ExtURL href="https://drive.google.com/drive/folders/1ASUIEqFgnIcWpw2DQM48Okq1c-1PLm8x?usp=sharing"><Button>UX Design Resources</Button></ExtURL>
					<Divider space={16} />
					<p className="h7"><strong>Related experiences:</strong></p>
					<Divider space={8} />
					<Link to="/portfolio/oneplace">
						<div className="PortfolioMiniItem">
							<Image width={32} height={32} src={oneplace.thumbnail} alt="" />
							<Divider horizontal={true} space={8} />
							<p className="h8">{oneplace.title}</p>
						</div>
					</Link>
					<Link to="/portfolio/tucanfitness">
						<div className="PortfolioMiniItem">
							<Image width={32} height={32} src={tucanfitness.thumbnail} alt="" />
							<Divider horizontal={true} space={8} />
							<p className="h8">{tucanfitness.title}</p>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
}

// Controls what appears on the Research, Work, and Personal Projects pages
const PortfolioPage = (props) => {
	const isMobile = useMobile();
	let backLink = <h6><Link to="/portfolio">&#8678; Back to Portfolio</Link></h6>;
	if (isMobile) backLink = null;
	return (
		<>
			<div className="PortfolioHeader">
				<div className="PortfolioHeaderLinks">
					{backLink}
					<div className="PortfolioHeaderOtherLinks">
						<h6>{props.page==="Research"
							? <span className="PortfolioCurrentOtherLink">Research</span>
							: <Link to="/portfolio/research">Research</Link>
						}</h6>
						<h6>{props.page==="Work Experience"
							? <span className="PortfolioCurrentOtherLink">Work</span>
							: <Link to="/portfolio/work">Work</Link>
						}</h6>
						<h6>{props.page==="Projects"
							? <span className="PortfolioCurrentOtherLink">Projects</span>
							: <Link to="/portfolio/projects">Projects</Link>
						}</h6>				
					</div>
				</div>
				<h2>{props.page}</h2>
			</div>
			<Divider space={32} />
			{props.children}
		</>
	);
}

// Component for displaying portfolio items in `PortfolioPage`
const PortfolioItem = (props) => {
	const data = props.data;
	const thumbnailStyle = (data.thumbnailStyle != null) ? data.thumbnailStyle : null;
	const thumbnailImageStyle = (data.thumbnailImageStyle != null) ? data.thumbnailImageStyle : null;
	return (
		<Link to={props.linkTo}>
			<div className="PortfolioItem">
				<Image 
					width={160} 
					height={160} 
					cName="PortfolioItemImageWrapper" 
					src={data.thumbnail} 
					alt="" 
					style={thumbnailStyle}
					imageStyle={thumbnailImageStyle}
				/>
				<Divider space={8} />
				<p className="h7"><strong>{data.title}</strong></p>
				<p className="linkSuggestion">Click to read more</p>
			</div>
		</Link>
	);
}

// Displays content specific to Research
const Research = () => {
	return (
		<div className="PortfolioItems">
			{projects_dict.research.map((p,i)=>{
				return <PortfolioItem key={`research_${i}`} data={p} linkTo={`/portfolio/${p.url}`} />
			})}
		</div>
	);
}

// Displays content specific to Work
const Work = () => {
	return (
		<>
			<p>Particular experiences working in universities, startups, and companies. I've worked in <strong>research internships</strong>, <strong>contract positions</strong>, and <strong>startup companies</strong>.</p>
			<Divider space={24} />
			<div className="PortfolioItems">
				{projects_dict.work.map((p,i)=>{
					return <PortfolioItem key={`work_${i}`} data={p} linkTo={`/portfolio/${p.url}`}/>
				})}
			</div>
		</>
	);
}

// Displays content specific to Projects
const Projects = () => {
	return (
		<>
			{projects_dict.projects.map((p,i)=>{
				return (
					<>
						<h4>{p.type}</h4>
						{p.description}
						<Divider space={24} />
						<div key={`projects_${i}`} className="PortfolioItems">
							{p.items.map((p2,i2)=>{
								return <PortfolioItem key={`projects_${i}_${i2}`} data={p2} linkTo={`/portfolio/${p2.url}`} />
							})}
						</div>
						<Divider space={24} />
					</>
				)
			})}
		</>
	);
}

// Displays what appears specifically for each portfolio item itself.
// Has to receive the header and contents items specifically via `props`.
const PortfolioItemContent = (props) => {	
	const { 
		id,
		title,
		icon_url,
		description,
		status,
		dates,
		external_links,
		platforms,
		skills,
	} = props.header;
	
	// Dates
	let dates_content = null;
	if (dates && dates.length > 0) {
		dates_content = dates.map((date_period,date_period_index)=>{
			const dts = (date_period.dates.length === 2)
				? <>
						{ (typeof date_period.dates[0] === "object")
							? <Date top={date_period.dates[0].year} bottom={date_period.dates[0].day} _width={60} />
							: <p>{date_period.dates[0]}</p>
						}
						<Divider horizontal space={8} />
						<p>-</p>
						<Divider horizontal space={8} />
						{
							(typeof date_period.dates[1] === "object")
								? <Date top={date_period.dates[1].year} bottom={date_period.dates[1].day} _width={60} /> 
								: <p>{date_period.dates[1]}</p>
						}
					</>
				: <Date top={date_period.dates[0].year} bottom={date_period.dates[0].day} _width={60} />
			return (
				<div key={date_period_index} className='DatePeriodContainer'>
					{
						date_period.header != null &&
						<p><strong>{date_period.header}:</strong></p>
					}
					<div className={(date_period.header != null)?'DateContainer':'DateContainer'}>{dts}</div>
					<Divider space={16} />
				</div>
			)
		});
	}

	// External Links
	let external_links_content = null;
	if (external_links) {
		let el = external_links.reduce((accumulator,l,i)=>{
			if (l.text && l.text.length > 0 && l.url && l.url != null) {
				accumulator.push(<p><ExtURL key={`${id}_external-link_${i}`} href={l.url}>{l.text}</ExtURL></p>)
			}
			return accumulator;
		},[]);
		if (el.length > 0) external_links_content = el
	}


	// Platforms
	let platforms_content = null;
	if (platforms && platforms.length > 0) {
		platforms_content = <div><p><strong>Platforms:</strong></p><ul>{platforms.map((p,i)=><li key={`${id}_platform_${i}`}>{p}</li>)}</ul><Divider space={16} /></div>
	}

	// Skills & Topics
	let skills_content = null;
	if (skills && skills.length > 0) {
		skills_content = <div><p><strong>Skills:</strong></p><ul>{skills.map((s,i)=><li key={`${id}_skill_${i}`}>{s}</li>)}</ul></div>
	}

	return (
		<div className='PortfolioDisplay'>
			<div className="PortfolioContent">
				<div className="PortfolioContentHeader">
					<div className='PortfolioContentHeaderImage'>
						<Image src={icon_url} width={150} height={150} alt="" round cName="PortfolioThumbnail" />
						<PortfolioStatus status={status} />
					</div>
					<div className='PortfolioContentHeaderMain'>
						<h3>{title}</h3>
						<Divider space={8} />
						<p><i>{description}</i></p>
						{external_links_content}	
						<Divider space={16} />
						{dates_content}
						{platforms_content}
						{skills_content}
					</div>
				</div>
							
				<Divider space={24} />
				
				<div className="PortfolioMain">
					{props.content}
					{props.children}
				</div>
			</div>
		</div>
	);
}

// Component just for printing the status of portfolio items
const PortfolioStatus = (props) => {
	switch(props.status) {
		case 'Ongoing':
			return <p className="PortfolioStatus Ongoing">Ongoing</p>;
		case 'On-Hold':
			return <p className="PortfolioStatus OnHold">On-Hold</p>;
		case 'Completed':
			return <p className="PortfolioStatus Completed">Completed</p>;
		default:
			return null;
	}
}

export default WithRouter(Portfolio);