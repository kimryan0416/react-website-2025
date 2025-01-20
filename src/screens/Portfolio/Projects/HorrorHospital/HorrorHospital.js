import { thumbnail } from "./assets";
import { Divider } from '../../../../components';

const header = {
    "id": "HorrorHospital",
    "title": "Horror Hospital",
    "icon_url": thumbnail,
    "description": "A game designed for NYU Game Design 2024 - Week 2: Game Feel.",
    "status": "Completed",
    "dates":[
        {
            header:null,
            dates:[
                {year:"2024",day:"Sep. 16"},
                {year:"2024",day:"Sep. 22"}
            ]
        }
    ],
    "latest_version": "V1.0",
    "external_links": [
        {
            "text": "Itch.io - Public Version",
            "url": "https://rk2546.itch.io/horror-hospital"
        },
        {
            "text": "Design Deck - About the Game",
            "url": "https://docs.google.com/presentation/d/1_aP8N-OHcBUA1zDnte88vT_s9G8XfYJRcgiwucFof4g/edit?usp=sharing"
        }
    ],
    "platforms": ["HTML"],
    "skills": [
        "Video games",
        "Procedural Generation",
        "Dungeon Map Design",
        "Unity3D",
        "C#",
        "GIMP"
    ],
    "categories": ["Personal Projects"],
    "sub_category": "Games"
};

const content = <>
    <p><i>Escape the dark and creepy Hospital...</i></p>
    <Divider space={8} />
    <p>Use the toggles in the "Options" menu to customize your horror experience, such as removing/adding obstacles, turning on/off room lights, and enabling/disabling fog. Make sure you're in the dark, with headphones on, for the best experience. A game designed for <strong>NYU Game Design 2024 - Week 2: Game Feel.</strong></p>
    <Divider space={16} />
    <h3><strong>Teammates</strong></h3>
    <Divider space={8} />
    <ul>
        <li><i><u>Ryan Kim (me)</u></i> - Map Generation, UI, GameController Logic</li>
        <li><i><u>Wanli Ma</u></i> - Textures, Sound Effects, Sound Interactions</li>
        <li><i><u>Jin Zhou</u></i> - Controls, Particle Effects, Fear Effect</li>
    </ul>
    <Divider space={16} />
    <h3><strong>How to Play</strong></h3>
    <Divider space={8} />
    <ol>
        <li>Move around the map with WASD, and look around with the mouse.</li>
        <li>Navigate around the map until you reach the ladder, which ends the game.</li>
        <li>Adjust settings on the main menu to customize your experience. Use headphones for best audio experience.</li>
    </ol>
    <Divider space={16} />
    <h3><strong>Resources & Credits</strong></h3>
    <Divider space={16} />
    <h4><i><u>Models</u></i></h4>
    <Divider space={8} />
    <p>All models were sourced from <a href="https://poly.pizza/" target="_blank" rel="noopener noreferrer">poly.pizza</a> by various artists and modelers, who have distributed publicly accessible 3D models under the Creative Commons license or under Public Domain.</p>
    <Divider space={8} />
    <ul>
        <li><a href="https://poly.pizza/m/8JKJ19ZGyiE" target="_blank" rel="noopener noreferrer"><i><u>Simple Vertical Ladder</u></i></a> by <a href="https://poly.pizza/u/Jarlan%20Perez" target="_blank" rel="noopener noreferrer">Jarlan Perez</a> [<a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">CC-BY</a>] via Poly Pizza</li>
        <li><a href="https://poly.pizza/m/J8dFHQHQJZ" target="_blank" rel="noopener noreferrer"><i><u>Fluorescent Light</u></i></a> by <a href="https://poly.pizza/u/Nick%20Slough" target="_blank" rel="noopener noreferrer">Nick Slough</a> [<a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">CC-BY</a>] via Poly Pizza</li>
        <li><a href="https://poly.pizza/m/2S4tGImSXzt" target="_blank" rel="noopener noreferrer"><i><u>15</u></i></a> by <a href="https://poly.pizza/u/Daisuke%20Takeoka" target="_blank" rel="noopener noreferrer">Daisuke Takeoka</a> [<a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">CC-BY</a>] via Poly Pizza</li>
        <li><a href="https://poly.pizza/m/MURJ8NK4N9" target="_blank" rel="noopener noreferrer"><i><u>Syringe</u></i></a> by <a href="https://poly.pizza/u/J-Toastie" target="_blank" rel="noopener noreferrer">J-Toastie</a> [<a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">CC-BY</a>] via Poly Pizza</li>
        <li><a href="https://poly.pizza/m/eeoGDcg9a-a" target="_blank" rel="noopener noreferrer"><i><u>Wheelchair</u></i></a> by <a href="https://poly.pizza/u/Poly%20by%20Google" target="_blank" rel="noopener noreferrer">Poly by Google</a> [<a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">CC-BY</a>] via Poly Pizza</li>
        <li><a href="https://poly.pizza/m/bfsn5pz8bVp" target="_blank" rel="noopener noreferrer"><i><u>017</u></i></a> by <a href="https://poly.pizza/u/Daisuke%20Takeoka" target="_blank" rel="noopener noreferrer">Daisuke Takeoka</a> [<a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">CC-BY</a>] via Poly Pizza</li>
        <li><a href="https://poly.pizza/m/57c3bbHmnJ" target="_blank" rel="noopener noreferrer"><i><u>Door</u></i></a> by <a href="https://poly.pizza/u/Kay%20Lousberg" target="_blank" rel="noopener noreferrer">Kay Lousberg</a> [Public Domain]</li>
        <li><a href="https://poly.pizza/m/3txPAhYeu-x" target="_blank" rel="noopener noreferrer"><i><u>Office Chair</u></i></a> by <a href="https://poly.pizza/u/Ryan%20Donaldson" target="_blank" rel="noopener noreferrer">Ryan Donaldson</a> [<a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">CC-BY</a>] via Poly Pizza</li>
        <li><a href="https://poly.pizza/m/EHYNWew6JK" target="_blank" rel="noopener noreferrer"><i><u>Cobweb</u></i></a> by <a href="https://poly.pizza/u/Quaternius" target="_blank" rel="noopener noreferrer">Quaternius</a> [Public Domain]</li>
        <li><a href="https://poly.pizza/m/V9KbWC8Vd6" target="_blank" rel="noopener noreferrer"><i><u>Cardboard Boxes</u></i></a> by <a href="https://poly.pizza/u/Quaternius" target="_blank" rel="noopener noreferrer">Quaternius</a> [Public Domain]</li>
    </ul>
    <Divider space={16} />
    <h4><i><u>Textures</u></i></h4>
    <Divider space={8} />
    <p>All textures were sourced from "<a href="https://freepbr.com/" target="_blank" rel="noopener noreferrer">Free PBR Materials</a>", created and distributed by Brian.</p>
    <Divider space={8} />
    <ul>
        <li><a href="https://freepbr.com/product/base-white-tile/" target="_blank" rel="noopener noreferrer">Base White Tile</a></li>
        <li><a href="https://freepbr.com/product/aged-wood-planks-pbr-material/" target="_blank" rel="noopener noreferrer">Aged Wood Plank</a></li>
        <li><a href="https://freepbr.com/product/gross-dirty-tiles-pbr/" target="_blank" rel="noopener noreferrer">Gross Dirty Tile</a></li>
        <li><a href="https://freepbr.com/product/metal-shipping-container-pbr-material/" target="_blank" rel="noopener noreferrer">Metal Shipping Container</a></li>
        <li><a href="https://freepbr.com/product/rectangle-polished-tile-pbr-material/" target="_blank" rel="noopener noreferrer">Rectangle Polished Tile</a></li>
        <li><a href="https://freepbr.com/product/rusted-streaked-iron-pbr-metal-material/" target="_blank" rel="noopener noreferrer">Rusted Streaked Iron</a></li>
    </ul>
    <Divider space={16} />
    <h4><i><u>Sound Effects</u></i></h4>
    <Divider space={8} />
    <ul>
        <li><a href="https://www.youtube.com/watch?v=dnRX_bHbYgs" target="_blank" rel="noopener noreferrer">Footsteps</a></li>
        <li><a href="https://www.youtube.com/watch?v=l7rULDo155M" target="_blank" rel="noopener noreferrer">Breathing</a></li>
        <li><a href="https://www.youtube.com/watch?v=-TiAPym7ObA" target="_blank" rel="noopener noreferrer">Water Dripping</a></li>
        <li><a href="https://www.youtube.com/watch?v=qOEdEeeanqY" target="_blank" rel="noopener noreferrer">Creaking Wood</a></li>
        <li><a href="https://www.youtube.com/watch?v=zcoDsPk28BM" target="_blank" rel="noopener noreferrer">Creaking Metal</a></li>
        <li><a href="https://www.youtube.com/watch?v=J2K6nqZXMs4" target="_blank" rel="noopener noreferrer">Male Coughing</a></li>
        <li><a href="https://www.youtube.com/watch?v=f3BPx2lt6E0" target="_blank" rel="noopener noreferrer">Laughter</a></li>
        <li><a href="https://www.youtube.com/watch?v=fLXLo3rEdrE" target="_blank" rel="noopener noreferrer">Heartbeat</a></li>
        <li><a href="https://www.youtube.com/watch?v=XpDwKwF-d2s" target="_blank" rel="noopener noreferrer">Humming</a></li>
        <li><a href="https://www.youtube.com/watch?v=fujJx8FaPHo" target="_blank" rel="noopener noreferrer">Wind Blowing</a></li>
    </ul>
</>

const HorrorHospitalData = {
	umbrella:"Games",
	key:"horrorhospital",
	thumbnail:thumbnail,
	title:"Horror Hospital",
	url:"horror_hospital",
    header:header,
	content:content
}

export default HorrorHospitalData;