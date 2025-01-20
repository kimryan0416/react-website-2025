import { thumbnail } from "./assets";
import { Divider } from '../../../../components';

const header = {
    "id": "TriHop",
    "title": "TriHop",
    "icon_url": thumbnail,
    "description": "A game designed for NYU Game Design 2024 - Week 1: Minimalism.",
    "status": "Completed",
    "dates":[
        {
            header:null,
            dates:[
                {year:"2024",day:"Sep. 9"},
                {year:"2024",day:"Sep. 15"}
            ]
        }
    ],
    "latest_version": "V1.0",
    "external_links": [
        {
            "text": "Itch.io - Public Version",
            "url": "https://rk2546.itch.io/trihop"
        },
        {
            "text": "Design Deck - About the Game",
            "url": "https://docs.google.com/presentation/d/1WMJ2fBMLLSEUlvfn7wtftfHNy4Txf1Y1C9tMGnKnXhI/edit?usp=sharing"
        }
    ],
    "platforms": ["HTML"],
    "skills": [
        "Video games",
        "Unity3D",
        "C#",
        "GIMP"
    ],
    "categories": ["Personal Projects"],
    "sub_category": "Games"
};

const content = <>
    <p>Jump and Avoid! As you run, try to avoid those red obstacles with the space bar. Can you survive long enough? A game designed for <strong>NYU Game Design 2024 - Week 1: Minimalism.</strong></p>
    <Divider space={16} />
    <h3><strong>Teammates</strong></h3>
    <Divider space={8} />
    <ul>
        <li><i><u>Ryan Kim (me)</u></i> - Jump Mechanism, Debugging, Project Management</li>
        <li><i><u>Ansal Arimbassery</u></i> - Obstacle Generation, Collision Handling</li>
        <li><i><u>Ashley Liu</u></i> - User Interface, Path Generation, Audio</li>
    </ul>
    <Divider space={16} />
    <h3><strong>How to Play</strong></h3>
    <Divider space={8} />
    <ol>
        <li>Switching lanes depends on if your hold down on the space bar or not. Holding the space bar down keeps you on the left lane; letting go of the space bar keeps you on the right lane.</li>
        <li>Hop between lanes via holding down or letting go of the space bar to avoid red obstacles that are approaching you down each lane. Try to survive for the whole journey.</li>
        <li>If you hit any red obstacles, you will fail and must start again. Use the space bar key to start the game when in a menu.</li>
    </ol>
    <Divider space={16} />
    <h3><strong>Resources & Credits</strong></h3>
    <Divider space={16} />
    <h4><i><u>Audio Sources</u></i></h4>
    <Divider space={8} />
    <ul>
        <li><i><u>Jump Sound Effect</u></i> - <a href="https://bigsoundbank.com/cap-cider-3-s1860.html" target="_blank" rel="noopener noreferrer">"Cap Citer 3" by Joseph SARDIN</a></li>
        <li><i><u>Collision & Fail Mode Sound Effect</u></i> - <a href="https://mixkit.co/free-sound-effects/hit/"  target="_blank" rel="noopener noreferrer">"Soft quick punch" by MixKit</a></li>
    </ul>
    <Divider space={16} />
    <h4><i><u>Software</u></i></h4>
    <Divider space={8} />
    <ul>
        <li><i><u>Game Engine</u></i> - Unity3D</li>
        <li><i><u>Texture Editor</u></i> - GIMP</li>
    </ul>
</>

const TriHopData = {
	umbrella:"Games",
	key:"trihop",
	thumbnail:thumbnail,
	title:"TriHop",
	url:"trihop",
    header:header,
	content:content
}

export default TriHopData;