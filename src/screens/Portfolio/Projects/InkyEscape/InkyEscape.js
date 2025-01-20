import { thumbnail } from "./assets";
import { Divider } from '../../../../components';

const header = {
    "id": "InkyEscape",
    "title": "Inky Escape",
    "icon_url": thumbnail,
    "description": "A game designed for NYU Game Design 2024 - Week 5: Resource Systems.",
    "status": "Completed",
    "dates":[
        {
            header:null,
            dates:[
                {year:"2024",day:"Oct. 7"},
                {year:"2024",day:"Oct. 14"}
            ]
        }
    ],
    "latest_version": "V1.0",
    "external_links": [
        {
            "text": "Itch.io - Public Version",
            "url": "https://scuffedpotatoes.itch.io/inky-escape"
        },
        {
            "text": "Design Deck - About the Game",
            "url": "https://docs.google.com/presentation/d/1ThLTzpoFYqUpRgSgNgfX93vHWW8nVPZDqaWfsPArP3s/edit?usp=sharing"
        }
    ],
    "platforms": ["HTML"],
    "skills": [
        "Video games",
        "Level Design",
        "Tilemaps",
        "Unity2D",
        "C#"
    ],
    "categories": ["Personal Projects"],
    "sub_category": "Games"
};

const content = <>
    <p>Escape the test rooms by painting the walls... and swimming through them! A game designed for <strong>NYU Game Design 2024 - Week 5: Resource Systems.</strong></p>
    <Divider space={16} />
    <h3><strong>Teammates</strong></h3>
    <Divider space={8} />
    <ul>
        <li><i><u>Ryan Kim (me)</u></i> - Level Design, Player Movement, Interactables, Ink Painting Mechanism</li>
        <li><i><u>Zhuohang Zhuang</u></i> - Ink Reservoir System, Ink Shooting Mechanism, Interactables</li>
        <li><i><u>Matthew Ma</u></i> - User Interface, QOL changes, Sound Assets, Debugging</li>
    </ul>
    <Divider space={16} />
    <h3><strong>How to Play</strong></h3>
    <Divider space={8} />
    <ol>
        <li><strong>Move</strong> - A and D</li>
        <li><strong>Jump</strong> - Space</li>
        <li><strong>Mouse LMB</strong> - Shoot Ink</li>
        <li><strong>Left Shift</strong> - Swim on the Painted Wall</li>
    </ol>
    <Divider space={16} />
    <h3><strong>Game Engine</strong></h3>
    <Divider space={8} />
    <ul>
        <li>Unity2D</li>
    </ul>
</>

const InkyEscapeData = {
	umbrella:"Games",
	key:"inkyescape",
	thumbnail:thumbnail,
	title:"Inky Escape",
	url:"inky_escape",
    header:header,
	content:content
}

export default InkyEscapeData;