// === WORK ====
import MIMOData from "./MIMO/MIMO";
import UMichInternData from "./UMichIntern/UMichIntern";
import TucanFitnessData from "./TucanFitness/TucanFitness";
import OnePlaceData from "./OnePlace/OnePlace";
import ECornellData from "./ECornell/ECornell";
import ICHDData from "./ICHD/ICHD"

// === VR and Web Projects ===
import EasierVRAssetsData from "./EasierVRAssets/EasierVRAssets";
//import EasierXRAssetsData from "./EasierXRAssets/EasierXRAssets";
import CSGY6613Project from "./CSGY6613Project/csgy6613project";
import OrbitData from "./Orbit/Orbit";
import TosteData from "./Toste/Toste";
import SMPData from "./SMP/SMP";

// === Games ===
import TravelerData from "./Traveler/Traveler";
import OrientationData from "./Orientation/Orientation";
import InkyEscapeData from "./InkyEscape/InkyEscape";
import CyberPursuitData from "./CyberPursuit/CyberPursuit";
import BulletSpaceData from "./BulletSpace/BulletSpace";
import HorrorHospitalData from "./HorrorHospital/HorrorHospital";
import TriHopData from "./TriHop/TriHop";
import EmbarkmentData from "./Embarkment/Embarkment";

// === Hardware ===
import PentatonicData from "./Pentatonic/Pentatonic";

// === Research ===
import StreetGazeEEGData from "./StreetSimGazeEEG/StreetGazeEEG";
import BoundarySPHData from "./BoundarySPH/BoundarySPH";
import MovementEEGData from "./MovementEEG/MovementEEG";
import VerisimilitudeData from "./Verisimilitude/Verisimilitude";
import MoLData from "./MoL/MoL";
import VRKeyboardData from "./vrKeyboard/vrKeyboard";
import LivestreamsData from "./Livestreams/Livestreams";
import ServiceSearchData from "./ServiceSearch/ServiceSearch";

const projects = {
	work:[
		MIMOData,
		UMichInternData,
		TucanFitnessData,
		OnePlaceData,
		ECornellData,
		ICHDData,
	],
	projects:[
		{
			type:"Virtual Reality and Web Projects",
			description:<p>Projects concerning Virtual Reality, HTML, CSS, JavaScript, PHP, and SQL. VR projects are conducted with <a href="https://www.oculus.com/quest/" target="_blank" rel="noopener noreferrer">Meta Quest platforms</a> and programmed in C#/C Sharp with <a href="https://unity.com/" target="_blank" rel="noopener noreferrer">Unity3D</a>.</p>,
			items:[
				EasierVRAssetsData,
				//EasierXRAssetsData,
				CSGY6613Project,
				OrbitData,
				TosteData,
				SMPData,
			],
		},
		{
			type:"Games",
			description:<p>I've worked on one game so far. "Embarkment" was written with Java. All other projects were created in <a href="https://unity.com/" target="_blank" rel="noopener noreferrer">Unity2D/3D</a> and distributed on <a href="https://rk2546.itch.io/" target="_blank" rel="noopener noreferrer">itch.io</a>.</p>,
			items:[
				TravelerData,
				OrientationData,
				InkyEscapeData,
				CyberPursuitData,
				BulletSpaceData,
				HorrorHospitalData,
				TriHopData,
				EmbarkmentData,
			]
		},
		/*
		{
			type:"Web Projects",
			description:<p>As someone who has worked extensively with web programming, I have worked on various projects ranging from browser web apps to JavaScript programs. Work experience and skillset includes HTML, CSS, JavaScript, PHP, SQL, and Python.</p>,
			items:[
				CSGY6613Project,
				SMPData,
				TosteData,
				ICHDData,
			]
		},
		*/
		{
			type:"Hardware",
			//description:<p>I've also had the opportunity to work with hardware and electronics. While I only have a college course's worth of knowledge, I understand the fundamentals behind electronics and C.</p>,
			description:null,
			items:[
				PentatonicData,
			]
		}
	],
	research:[
		StreetGazeEEGData,
		//MovementEEG,
		BoundarySPHData,
		VerisimilitudeData,
		MoLData,
		VRKeyboardData,
		LivestreamsData,
		ServiceSearchData,
	],
	all:[
		BoundarySPHData,
		BulletSpaceData,
		CSGY6613Project,
		CyberPursuitData,
		ECornellData,
		EasierVRAssetsData,
		//EasierXRAssetsData,
		EmbarkmentData,
		HorrorHospitalData,
		ICHDData,
		InkyEscapeData,
		LivestreamsData, 
		MoLData,
		MIMOData,
		//MovementEEG,
		OnePlaceData,
		OrbitData,
		OrientationData,
		PentatonicData,
		SMPData,
		ServiceSearchData,
		StreetGazeEEGData,
		TosteData,
		TravelerData,
		TriHopData,
		TucanFitnessData,
		UMichInternData,
		VRKeyboardData,
		VerisimilitudeData,
	]
}

export default projects;