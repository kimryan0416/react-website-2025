import { thumbnail } from "./assets";
import { Divider } from '../../../../components';

const header = {
    "id": "BulletSpace",
    "title": "Bullet Space",
    "icon_url": thumbnail,
    "description": "A game designed for NYU Game Design 2024 - Week 3: Depth.",
    "status": "Completed",
    "dates":[
        {
            header:null,
            dates:[
                {year:"2024",day:"Sep. 23"},
                {year:"2024",day:"Sep. 29"}
            ]
        }
    ],
    "latest_version": "V1.0",
    "external_links": [
        {
            "text": "Itch.io - Public Version",
            "url": "https://rk2546.itch.io/bullet-space"
        },
        {
            "text": "Design Deck - About the Game",
            "url": "https://docs.google.com/presentation/d/1FRU5c8FjjCtQgKMwpy_xLrZGuNq2pPS-hm9OXIlqhRw/edit?usp=sharing"
        }
    ],
    "platforms": ["HTML"],
    "skills": [
        "Video games",
        "Bullet Hell",
        "Danmaku",
        "Unity2D",
        "C#",
        "GIMP"
    ],
    "categories": ["Personal Projects"],
    "sub_category": "Games"
};

const content = <>
    <p>You're an intrepid explorer of the Intergalactic Navy, tasked with clearing out hostile alien ships! Clear out all the enemies to win, while avoiding their deadly attacks. A game designed for <strong>NYU Game Design 2024 - Week 3: Depth.</strong></p>
    <Divider space={16} />
    <h3><strong>Teammates</strong></h3>
    <Divider space={8} />
    <ul>
        <li><i><u>Ryan Kim (me)</u></i> - Enemy AI and spawning, difficulty balance</li>
        <li><i><u>Henry Kam</u></i> - Player input, bullet logic and interactions, audio and textures</li>
        <li><i><u>Jeffrey Park</u></i> - User interface, backend logic</li>
    </ul>
    <Divider space={16} />
    <h3><strong>How to Play</strong></h3>
    <Divider space={8} />
    <ol>
        <li>Use WASD to move around the screen.</li>
        <li>Press and hold SPACE to fire.</li>
        <li>Avoid enemy bullets while also trying to destroy as many enemy ships as possible.</li>
    </ol>
    <Divider space={16} />
    <h3><strong>Resources & Credits</strong></h3>
    <Divider space={16} />
    <h4><i><u>Software</u></i></h4>
    <Divider space={8} />
    <ul>
        <li><i><u>Game Engine</u></i> - Unity2D</li>
    </ul>
    <Divider space={16} />
    <h4><i><u>Sound Effects</u></i></h4>
    <Divider space={8} />
    <ul>
        <li><i><u>Shooting Sound Effects</u></i> - <a href="https://pixabay.com/sound-effects/search/shoot/" target="_blank" rel="noopener noreferrer">https://pixabay.com/sound-effects/search/shoot/</a></li>
        <li><i><u>Background Music</u></i> - <a href="https://incompetech.com/music/royalty-free/index.html?isrc=USUAN2300011&Search=Search" target="_blank" rel="noopener noreferrer">"Mesmerizing Galaxy"</a> by Kevin Macleod</li>
    </ul>
    <Divider space={16} />
    <h4><i><u>Textures</u></i></h4>
    <Divider space={8} />
    <ul>
        <li><i><u>Ship Sprites</u></i> - <a href="https://digital-realms.itch.io/2d-retro-spaceship-sprites" target="_blank" rel="noopener noreferrer">"2D Spaceship sprites"</a> by Digital Realms</li>
        <li><i><u>Bullet Sprites & Player Ship</u></i> - <a href="https://25349023.itch.io/pixel-bullet" target="_blank" rel="noopener noreferrer">Pixel bullet mini pack</a> by Sky</li>
        <li><i><u>Space Background</u></i> - <a href="https://digitalmoons.itch.io/free-space-background" target="_blank" rel="noopener noreferrer">"Free Space Background"</a> by Digital Moons</li>
        <li><i><u>Text Font</u></i> - <a href="https://www.dafont.com/electronic-highway-sign.font" target="_blank" rel="noopener noreferrer">"Electronic Highway Sign SDF"</a> by Ash Pikachu Font</li>
    </ul>
</>

const BulletSpaceData = {
	umbrella:"Games",
	key:"bulletspace",
	thumbnail:thumbnail,
	title:"Bullet Space",
	url:"bullet_space",
    header:header,
	content:content
}

export default BulletSpaceData;