import { thumbnail } from "./assets";

import { Divider } from '../../../../components';

const header = {
  "id": "cfa5f5bb-e208-4862-8bcc-c984916ca998",
  "title": "Orbit: Your VR Space For Mindfulness",
  "icon_url": thumbnail,
  "description": "An audio-logging journey in Virtual Reality.",
  "status": "Completed",
  "dates":[
    {
      header:"Ended",
      dates:[
        {year:"2019",day:"Dec. 19"}
      ]
    }
  ],
  "latest_version": null,
  "external_links": [
    {
      "text": "Downloadable Build & Files",
      "url": "https://github.com/kimryan0416/Orbit-PublicVer"
    },
    {
      "text": "Project Page",
      "url": "https://sites.google.com/cornell.edu/cs5650-projects-2019/projects/orbit?authuser=0"
    }
  ],
  "platforms": [
    "Oculus Quest"
  ],
  "skills": [
    "C#/CSharp",
    "Unity",
    "Information Interfaces and Presentation",
    "User Experience (UX) Design",
    "User Interfaces (UI)",
    "Virtual Reality (VR)"
  ],
  "categories": [
    "Personal Projects"
  ],
  "sub_category": "VR"
};

const content = <>
  <p><strong>Orbit</strong> is a semester-long Virtual Reality project aimed to provide users a safe space for immersive audio journaling and memory recording. To encourage this, our UI design is inspired by the vast night sky full of stars; users will create "orbs" of audio that mimic stars and create their very own beautiful galaxy of thoughts.</p>
  <Divider space={16} />
  <h3><strong>My Role and Responsibilities</strong></h3>
  <Divider space={16} />
  <p>My role in this project was predominantly as a Software Lead. I was responsible for both designing and implementing the User Interface and back-end infrastructure for the VR application. Much of my work involves not just writing scripts but optimizing and refactoring code from my peers to maintain Orbit's performance on the Oculus Quest and remove potential bugs in our system. This project has laid the foundations for future projects such as the Grip Prefabs and the Virtual Keyboard.</p>
  <Divider space={16} />
  <h3><strong>Current Stable Version:</strong></h3>
  <Divider space={16} />
  <ul><li>Vertical Slice</li></ul>
  <Divider space={16} />
  <h3><strong>Contributors</strong></h3>
  <Divider space={16} />
  <h4><i><u>Peers</u></i></h4>
  <Divider space={8} />
  <ul>
    <li><i><u>Vini Tripathii</u></i> - Cornell Tech @ Cornell University [ut33@cornell.edu]</li>
    <li><i><u>Daniel Asper</u></i> - Cornell Tech @ Cornell University [da494@cornell.edu]</li>
    <li><i><u>Ryan Km (me)</u></i> - Cornell Tech @ Cornell University [rk494@cornell.edu]</li>
  </ul>
  <Divider space={16} />
  <h4><i><u>Advisor</u></i></h4>
  <Divider space={8} />
  <ul>
    <li><i><u>Harald Haraldsson</u></i> - Cornell Tech @ Cornell University [hh586@cornell.edu]</li>
  </ul>
  <Divider space={16} />
  <h3><strong>Equipment</strong></h3>
  <Divider space={16} />
  <ul>
    <li>Oculus Quest (now Meta Quest)</li>
    <li>Unity3D</li>
  </ul>
</>

const OrbitData = {
	umbrella:"Virtual Reality Research & Projects",
	key:"orbit",
	thumbnail:thumbnail,
	title:"Orbit: Your VR Space For Mindfulness",
	url:"orbit",
  header:header,
	content:content
}

export default OrbitData;