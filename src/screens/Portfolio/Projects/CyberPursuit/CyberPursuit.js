import { thumbnail } from "./assets";
import { Divider } from '../../../../components';

const header = {
    "id": "CyberPursuit",
    "title": "Cyber Pursuit",
    "icon_url": thumbnail,
    "description": "A game designed for NYU Game Design 2024 - Week 4: Level Design.",
    "status": "Completed",
    "dates":[
        {
            header:null,
            dates:[
                {year:"2024",day:"Sep. 30"},
                {year:"2024",day:"Oct. 6"}
            ]
        }
    ],
    "latest_version": "V1.0",
    "external_links": [
        {
            "text": "Itch.io - Public Version",
            "url": "https://iam331.itch.io/cyber-pursuit"
        },
        {
            "text": "Design Deck - About the Game",
            "url": "https://docs.google.com/presentation/d/11Kr5U6psDm8jFk5SQaLNlMFwPmC6XV6F3h166crPvuM/edit?usp=sharing"
        }
    ],
    "platforms": ["HTML"],
    "skills": [
        "Video games",
        "Level Design",
        "Unity2D",
        "C#",
        "GIMP"
    ],
    "categories": ["Personal Projects"],
    "sub_category": "Games"
};

const content = <>
    <p>Go through the city to find you stolen car! Beware of obstacles, including fires and people... A game designed for <strong>NYU Game Design 2024 - Week 4: Level Design.</strong></p>
    <Divider space={16} />
    <h3><strong>Teammates</strong></h3>
    <Divider space={8} />
    <ul>
        <li><i><u>Ryan Kim (me)</u></i> - Asset Organization, Scene Generation, HP system</li>
        <li><i><u>Zhongyu Zhang</u></i> - Player Mechanics/Movement/Scene Interaction</li>
        <li><i><u>Ian Alexander Mccullough</u></i> - Asset Collection, Audio Design, UI, Testing</li>
    </ul>
    <Divider space={16} />
    <h3><strong>How to Play</strong></h3>
    <Divider space={8} />
    <ol>
        <li>Use W and D to move left and right on the screen.</li>
        <li>Press Space to jump.</li>
        <li>Press and hold S while moving to slide for a distance.</li>
        <li>While in the air in front of a billboard, press and hold W to wall-run for a distance. You can jump off a billboard for extra distance in the air during a wall-run.</li>
        <li>If you fall or lose too much health, you will restart at the closest checkpoint billboard.</li>
    </ol>
    <Divider space={16} />
    <h3><strong>Game Engine</strong></h3>
    <Divider space={8} />
    <ul>
        <li>Unity2D</li>
    </ul>
</>

const CyberPursuitData = {
	umbrella:"Games",
	key:"cyberpursuit",
	thumbnail:thumbnail,
	title:"Cyber Pursuit",
	url:"cyber_pursuit",
    header:header,
	content:content
}

export default CyberPursuitData;