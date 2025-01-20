import { 
	thumbnail,
	embarkmentPosterSmall,
	levelEditor,
	manualPreview,
	spawn,
} from "./assets";

import { Divider } from '../../../../components';

const header = {
    "id": "f168d851-1372-4f42-9aee-fcb5bbce0e16",
    "title": "Embarkment",
    "icon_url": thumbnail,
    "description": "A video game created for Cornell University GDIAC 2018.",
    "status": "Completed",
    "dates":[
        {
            header:null,
            dates:[
                {year:"2018",day:"Jan."},
                {year:"2018",day:"May"}
            ]
        }
    ],
    "latest_version": null,
    "external_links": [
        {
            "text": "Downloadable Build & Files",
            "url": "https://drive.google.com/drive/folders/1kBw8TO8bOcRXW55dNH7mXiCBKTnmTGE5?usp=sharing"
        }
    ],
    "platforms": [
        "OS X",
        "Windows XP+"
    ],
    "skills": [
        "Video games",
        "Java",
        "HTML",
        "CSS",
        "JavaScript",
        "Adobe Photoshop"
    ],
    "categories": [
        "Personal Projects"
    ],
    "sub_category": "Games"
};

const content = <>
    <h3><strong>Synopsis</strong></h3>
    <Divider space={16} />
    <p>Once upon a time...</p> 
    <p>There was a great forest, where golden trees were said to grow. These golden trees were many in number, and the golden leaves that fell from these trees were believed to bring life and vitality to the forest.</p>
    <p>Stories about this place tell of a time when a mysterious, vile corruption swept through the forest, infesting these golden trees. The golden leaves that once gave life now sustained monsters that attacked anything on sight.</p>
    <p>If the stories are to be believed, then there must have been a sole hero who rid the forest of this corruption and the monsters lurking within.</p>
    <p>The fate of the forest laid on their antlers...</p>
    <Divider space={8} />
    <figure>
        <img src={embarkmentPosterSmall} alt="" />
        <figcaption>Embarkment Poster</figcaption>
    </figure>
    <Divider space={16} />
    <h3><strong>My Roles & Responsibilities</strong></h3>
    <Divider space={16} />
    <h4><strong>Designer</strong></h4>
    <Divider space={16} />
    <p>My role was as a designer was to create UI elements, animate sprites, and write promotional material for the game. I primarily used <strong>Photoshop</strong> to animate the sprites. Sprites that I had made and animated include the infected tree sprite and animation, the golden leaf drop sprite and animation, and UI elements such as the menu background and buttons.</p>
    <Divider space={8} />
    <figure>
        <img src={spawn} alt="" />
        <figcaption>Infected Tree Boss</figcaption>
    </figure>
    <Divider space={16} />
    <h4><strong>Programmer</strong></h4>
    <Divider space={16} />
    <p>I was also responsible for creating a light version of a level editor that could be used to quickly create maps that could be imported into the game. The light level editor, made with HTML, JavaScript, CSS, and JSON, allows users to place assets in a map, import and export maps, and copy-paste sections of a map onto new areas. The necessity to use this version of the level editor became significant after the full version of the level editor was delayed in development.</p>
    <Divider space={8} />
    <p><i>The level editor is solely meant for internal development and is not made publicly available.</i></p>
    <Divider space={16} />
    <figure>
        <img src={levelEditor} alt="" />
        <figcaption>Level Editor Screenshot</figcaption>
    </figure>
    <Divider space={16} />
    <h4><strong>Other Contributions</strong></h4>
    <Divider space={16} />
    <p>I was also responsible for creating the game's manual (which is downloadable alongside the game in the link above). The manual details aspects of gameplay, story, and objectives.</p>
    <Divider space={16} />
    <figure>
        <img src={manualPreview} alt="" />
        <figcaption>Manual Screenshot</figcaption>
    </figure>
    <Divider space={16} />
    <h3><strong>Teammates</strong></h3>
    <Divider space={16} />
    <ul>
        <li><i><u>Allie Shuldman</u></i> - Project Lead</li>
        <li><i><u>Joshua Ying</u></i> - Programming Lead, Composer</li>
        <li><i><u>Riley Niu</u></i> - Programmer</li>
        <li><i><u>Victor Lucena</u></i> - Programmer, Composer</li>
        <li><i><u>Yueyang Adrian Zheng</u></i> - Design Lead</li>
        <li><i><u>Jeremy Paton</u></i> - Designer</li>
        <li><i><u>Ryan Kim (me)</u></i> - Designer, Programmer</li>
    </ul>
    <Divider space={16} />

</>
        /*
        {
            "id": "184969f6-fc09-42d7-9f78-68a147c494d9",
            "type": "column_list",
            "contents": [
                {
                    "id": "0904f455-8863-4fd6-bb77-6b761b94f668",
                    "type": "column",
                    "contents": [
                        {
                            "id": "96f9a20d-1ecf-4eb9-8285-1bac9dd9e622",
                            "type": "image",
                            "contents": [
                                {
                                    "url": paperPrototype
                                }
                            ],
                            "children": [],
                            "misc": {
                                "caption": [
                                    {
                                        "content": "Paper Prototype",
                                        "href": null,
                                        "annotations": []
                                    }
                                ]
                            }
                        }
                    ],
                    "children": null,
                    "misc": null
                },
                {
                    "id": "e851f54e-2ad1-4977-81ae-2ada805ab3f4",
                    "type": "column",
                    "contents": [
                        {
                            "id": "50a7df38-6744-458e-8b19-3af357119742",
                            "type": "image",
                            "contents": [
                                {
                                    "url": earlyConcepts
                                }
                            ],
                            "children": [],
                            "misc": {
                                "caption": [
                                    {
                                        "content": "Early Concept Art",
                                        "href": null,
                                        "annotations": []
                                    }
                                ]
                            }
                        }
                    ],
                    "children": null,
                    "misc": null
                }
            ],
            "children": null,
            "misc": null
        },
        {
            "id": "445a7392-4e34-4bea-ae7e-8e8b5aa08ffb",
            "type": "column_list",
            "contents": [
                {
                    "id": "c305ae15-0593-4beb-8880-6bec5b12c2ca",
                    "type": "column",
                    "contents": [
                        {
                            "id": "1ef8f352-709b-41b8-b9f9-442fa36fcbdb",
                            "type": "image",
                            "contents": [
                                {
                                    "url": turretBulletConcept
                                }
                            ],
                            "children": [],
                            "misc": {
                                "caption": [
                                    {
                                        "content": "Turret Bullet Concept",
                                        "href": null,
                                        "annotations": []
                                    }
                                ]
                            }
                        }
                    ],
                    "children": null,
                    "misc": null
                },
                {
                    "id": "8e78c087-210e-4ebb-b6ba-ce4f27b6d1e7",
                    "type": "column",
                    "contents": [
                        {
                            "id": "6b120f91-a6be-4980-a4dc-c0761fcd78d8",
                            "type": "image",
                            "contents": [
                                {
                                    "url": gameplay
                                }
                            ],
                            "children": [],
                            "misc": {
                                "caption": [
                                    {
                                        "content": "Gameplay Screenshot",
                                        "href": null,
                                        "annotations": []
                                    }
                                ]
                            }
                        }
                    ],
                    "children": null,
                    "misc": null
                }
            ],
            "children": null,
            "misc": null
        },
        {
            "id": "c1a27472-a9fb-4dda-be67-5c2056e24566",
            "type": "column_list",
            "contents": [
                {
                    "id": "73eba551-6af4-42bf-834c-f6d3dc43d4c5",
                    "type": "column",
                    "contents": [
                        {
                            "id": "a297d29d-9553-4893-be5a-44bc592b2721",
                            "type": "image",
                            "contents": [
                                {
                                    "url": manualPreview2
                                }
                            ],
                            "children": [],
                            "misc": {
                                "caption": [
                                    {
                                        "content": "Manual Preview #2",
                                        "href": null,
                                        "annotations": []
                                    }
                                ]
                            }
                        }
                    ],
                    "children": null,
                    "misc": null
                },
                {
                    "id": "e2e824fc-beba-4641-b0c8-308094ae03af",
                    "type": "column",
                    "contents": [
                        {
                            "id": "1d37824e-129b-4a5a-bf83-531344a936d1",
                            "type": "image",
                            "contents": [
                                {
                                    "url": startupMenu
                                }
                            ],
                            "children": [],
                            "misc": {
                                "caption": [
                                    {
                                        "content": "Startup Menu",
                                        "href": null,
                                        "annotations": []
                                    }
                                ]
                            }
                        },
                        {
                            "id": "2839e84e-ddbb-492f-82ae-5f2a7df2204a",
                            "type": "paragraph",
                            "contents": [],
                            "children": [],
                            "misc": null
                        }
                    ],
                    "children": null,
                    "misc": null
                }
            ],
            "children": null,
            "misc": null
        }
    ]
}
*/

const EmbarkmentData = {
	umbrella:"Games",
	key:"embarkment",
	thumbnail:thumbnail,
	title:"Embarkment",
	url:"embarkment",
    header:header,
	content:content
}

export default EmbarkmentData;