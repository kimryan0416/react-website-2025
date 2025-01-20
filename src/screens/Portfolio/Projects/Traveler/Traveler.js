import { thumbnail } from "./assets";
import { Divider } from '../../../../components';

const header = {
    "id": "Traveler",
    "title": "The Traveler",
    "icon_url": thumbnail,
    "description": "A game designed for NYU Game Design 2024 - Final Project.",
    "status": "Completed",
    "dates":[
        {
            header:null,
            dates:[
                {year:"2024",day:"Oct. 21"},
                {year:"2024",day:"Dec. 16"}
            ]
        }
    ],
    "latest_version": "V1.1.2",
    "external_links": [
        {
            "text": "Itch.io - Public Version + Mac/Windows Downloads",
            "url": "https://rk2546.itch.io/traveler"
        },
        {
            "text": "Design Deck - About the Game",
            "url": "https://docs.google.com/presentation/d/1fLuKE6fqECENl7czr9zUusEN2NKTjbXVQssqDn3HcBg/edit?usp=sharing"
        },
        {
            "text": "Progress Reports",
            "url": "https://docs.google.com/presentation/d/1V_SX9GWN5SN0PDuXjbvXqXRVVuW-Jh9tIEDGWsZJNrc/edit?usp=sharing"
        },
    ],
    "platforms": ["HTML","Mac OSX","Windows"],
    "skills": [
        "Video games",
        "Level Design",
        "Proceducal Content Generation (PCG)",
        "Resources",
        "Orienteering",
        "Perlin Noise",
        "Unity3D",
    ],
    "categories": ["Personal Projects"],
    "sub_category": "Games"
};

const content = <>
    <p><i>Hearing rumors of lands brimming with power, the Traveler decides to verify if the rumors are true...But the land is… empty! And storm clouds approach from the distance! However, glowing gems dot the landscape. Upon touching one, the Traveler feels the winds flow around him. Special powers are hidden in these gems! As the Traveler, you must use your powers to collect all four major gems around the land!</i></p>
    <Divider space={16} />
    <p>"The Traveler" is an Adventure-Art Simulation game that sees the player navigating through strange lands rumored to contain powerful energy. Instead, empty lands greet the Traveler, with strange gems dotting the landscape and storm clouds approaching from the distance. As the eponymous "Traveler," the player is tasked with gathering the three Major Gems that convey special powers to the player before they are swept away by the harsh weather.</p>
    <Divider space={8} />
    <p>A game designed for <strong>NYU Game Design 2024 - Final Project.</strong></p>
    <Divider space={16} />
    <h3><strong>Teammates</strong></h3>
    <Divider space={8} />
    <ul>
        <li><i><u>Ryan Kim (me)</u></i> - Team Leader, Terrain Generation, System Design</li>
        <li><i><u>Zhongyu Zhang</u></i> - Character Movements and Interactions, Dialogue System</li>
        <li><i><u>Guan-Cheng Lin</u></i> - Game Aesthetics, Particle System, Music/SFX</li>
        <li><i><u>Harsh Jalutharia</u></i> - Landmark Generation, Pathing System, SFX Manager</li>
    </ul>
    <Divider space={16} />
    <h3><strong>How to Play</strong></h3>
    <Divider space={8} />
    <p><strong>Player objective:</strong> Pick up the 4 major gems scattered throughout the region. There are 2 Gem Types:</p>
    <Divider space={8} />
    <ul>
        <li><strong>Major Gems</strong> = powerups</li>
        <li><strong>Small gems</strong> = more stamina (optional)</li>
    </ul>
    <Divider space={8} />
    <p>Each Major Gem gives you powers!</p>
    <Divider space={8} />
    <ul>
        <li><strong>Boosting</strong> - Accelerate along the ground!</li>
        <li><strong>Gliding</strong> - Slow down your descent to gain horizontal distance!</li>
        <li><strong>Flight</strong> - Fly upward and high, then glide!</li>
    </ul>
    <Divider space={16} />
    <h3><strong>Goals</strong></h3>
    <Divider space={16} />
    <h4><i><u>Vision</u></i></h4>
    <Divider space={8} />
    <p>Players navigating a very naturalistic world, with a main collectathon-esque mechanic and basic narrative as drivers for people to explore and engage with this world.</p>
    <Divider space={16} />
    <h4><i><u>Developer Goals</u></i></h4>
    <Divider space={8} />
    <ul>
        <li>
            Focus on the aesthetic feeling of "taking a journey" - the journey is more important than the destination.
            <ul>
                <li>Gameplay mechanics must be smooth and intuitive. They must also reduce as much cognitive friction when navigating this world.</li>
                <li>Hyper-focus on visual and auditory aesthetics - these should encourage the player to look around and get immersed in the environment.</li>
            </ul>
        </li>
        <li>
            Focus on the interplay between relaxation and tension
            <ul>
                <li>The player at the beginning should be relaxed and eager to explore. As time goes on, tension increases with the introduction of visual and ambience changes - increasingly worse weather, BGM changes.</li>
                <li>
                    With every Major Gem collected, the player should be given a new mechanic or enhancement of an existing mechanic, the positive of which allows the player to overcome previous obstacles.
                    <ul>
                        <li>The first Major Gem at the beginning allows the player to "boost" while on the ground This makes traversal easier and thus allows for further objectives to be achievable.</li>
                        <li>The second Major Gem allows the player to "glide" in the air, allowing for players to more quickly avoid the hills and valleys on the ground and quickly traverse the map.</li>
                        <li>The third Major Gem allows the player to "fly" vertically upward, granting the player vertical height. This helps the player navigate taller mountains near the edges of the map.</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
    <Divider space={16} />
    <h3><strong>Genre and Categorization</strong></h3>
    <Divider space={8} />
    <ul>
        <li><i><u>Open World</u></i> - The player should, in theory, be allowed to explore the world as much or as little as they want.</li>
        <li><i><u>Aventure + Art</u></i> - the player gets to navigate this visually appealing world. There is a general sense of exploration as a result of the power-ups the player has access to + the gem collection requiring players to actively look around. The visual and auditory ambience is the focal point of the overall experience.</li>
        <li><i><u>PCG + Terrain Generation</u></i> - The world is aimed to be pseudo-randomly generated. The experience won’t be exactly the same for everyone. This not only circumvents limitations due to WebGL but also is a challenge to the developers to focus on meaningful randomization that doesn’t punish the player too much with off-putting world generation.</li>
    </ul>
</>

const TravelerData = {
	umbrella:"Games",
	key:"traveler",
	thumbnail:thumbnail,
	title:"The Traveler",
	url:"traveler",
    header:header,
	content:content
}

export default TravelerData;