import { thumbnail } from "./assets";
import { Divider } from '../../../../components';

const header = {
    "id": "Orientation",
    "title": "Orientation",
    "icon_url": thumbnail,
    "description": "A game designed for NYU Game Design 2024 - Week 6: PCG.",
    "status": "Completed",
    "dates":[
        {
            header:null,
            dates:[
                {year:"2024",day:"Oct. 15"},
                {year:"2024",day:"Oct. 20"}
            ]
        }
    ],
    "latest_version": "V1.3",
    "external_links": [
        {
            "text": "Itch.io - Public Version",
            "url": "https://rk2546.itch.io/orientation"
        },
        {
            "text": "Design Deck - About the Game",
            "url": "https://docs.google.com/presentation/d/1xA1R1VgSZHk39DoLt_6FAnG0RU7CoCSwa8zJLhIj22A/edit?usp=sharing"
        }
    ],
    "platforms": ["HTML"],
    "skills": [
        "Video games",
        "Level Design",
        "Proceducal Content Generation (PCG)",
        "Orienteering",
        "Perlin Noise",
        "Unity3D",
    ],
    "categories": ["Personal Projects"],
    "sub_category": "Games"
};

const content = <>
    <p>"Orienteering" is a sport where participants must navigate within a geographic region armed with only a map and their wits. In this game, you must use your own map to 1) identify where you are, and 2) reach the destination marked as a red dot on your map. Good luck! A game designed for <strong>NYU Game Design 2024 - Week 6: PCG.</strong></p>
    <Divider space={16} />
    <h3><strong>Teammates</strong></h3>
    <Divider space={8} />
    <ul>
        <li><i><u>Ryan Kim (me)</u></i> - Map Generation, Start Menu UI</li>
        <li><i><u>Novan Yang</u></i> - In-Game UI, Health and Stamina, SFX</li>
        <li><i><u>Chunze Jiang</u></i> - Start/Destination Spawning, Player Movement</li>
    </ul>
    <Divider space={16} />
    <h3><strong>How to Play</strong></h3>
    <Divider space={8} />
    <ol>
        <li>WASD to move around</li>
        <li>Space to Jump</li>
        <li>Hold Left-Shift to view your map</li>
        <li>Press Q to open the menu</li>
    </ol>
    <Divider space={8} />
    <p>Be careful of your Stamina - if it sinks too low, you can't move. Likewise, keep an eye on your health bar! Take too much damage, and it's game over.</p>
    <Divider space={16} />
    <h3><strong>Resources and Credits</strong></h3>
    <Divider space={16} />
    <h4><i><u>Software</u></i></h4>
    <ul><li><i><u>Game Engine</u></i> - Unity3D</li></ul>
    <Divider space={16} />
    <h4><i><u>Sound Effects</u></i></h4>
    <Divider space={8} />
    <ul>
        <li><i><u>BGM</u></i> - "celestial arp loop c 01.wav" by CarlosCarty (<a href="https://freesound.org/people/CarlosCarty/sounds/572560/" target="_blank" rel="noopener noreferrer">https://freesound.org/people/CarlosCarty/sounds/572560/</a>)</li>
        <li><i><u>Breath SFX</u></i> - "Man breathing regularly then faster” by exe2be" (<a href="https://freesound.org/people/exe2be/sounds/512741/" target="_blank" rel="noopener noreferrer">https://freesound.org/people/exe2be/sounds/512741/</a>)</li>
        <li><i><u>Footstep SFX</u></i> - "Footsteps_Mountain_Boots_Frozen_Grass_Mono.wav" by Nox_Sound (<a href="https://freesound.org/people/Nox_Sound/sounds/546604/" target="_blank" rel="noopener noreferrer">https://freesound.org/people/Nox_Sound/sounds/546604/</a>)</li>
        <li><i><u>Map SFX</u></i> - "pulldown-map01.wav" by randomsoundsguy (<a href="https://freesound.org/people/randomsoundsguy/sounds/519242/" target="_blank" rel="noopener noreferrer">https://freesound.org/people/randomsoundsguy/sounds/519242/</a>)</li>
        <li><i><u>Hurt SFX</u></i> - "Bone Cracking 2.wav" by DalomarGrimm (<a href="https://freesound.org/people/DalomarGrimm/sounds/7720/" target="_blank" rel="noopener noreferrer">https://freesound.org/people/DalomarGrimm/sounds/7720/</a>)</li>
        <li><i><u>Ambience SFX</u></i> - "birds.wav" by itsemilagain (<a href="https://freesound.org/people/itsemilagain/sounds/74676/" target="_blank" rel="noopener noreferrer">https://freesound.org/people/itsemilagain/sounds/74676/</a>)</li>
    </ul>
    <Divider space={16} />
    <h4><i><u>Models and Textures</u></i></h4>
    <Divider space={8} />
    <ul>
        <li><i><u>Trees</u></i> - <a href="https://poly.pizza/m/2Qo-fmVKuSG" target="_blank" rel="noopener noreferrer">Pine Tree</a> by <a href="https://poly.pizza/u/Danni Bittman" target="_blank" rel="noopener noreferrer">Danni Bittman</a> [<a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">CC-BY</a>] via Poly Pizz</li>
        <li><i><u>Skyboxes</u></i> - "Skybox Series Free" by Avionx (<a href="https://assetstore.unity.com/packages/2d/textures-materials/sky/skybox-series-free-103633" target="_blank" rel="noopener noreferrer">https://assetstore.unity.com/packages/2d/textures-materials/sky/skybox-series-free-103633</a>)</li>
    </ul>
</>

const OrientationData = {
	umbrella:"Games",
	key:"orientation",
	thumbnail:thumbnail,
	title:"Orientation",
	url:"orientation",
    header:header,
	content:content
}

export default OrientationData;