import { 	thumbnail } from "./assets";

import { Divider } from '../../../../components';

const header = {
  "id": "87da1273-f997-4942-99e4-7e88940a59b1",
  "title": "University of Michigan: Information Interaction Laboratory – Research Intern",
  "icon_url": thumbnail,
  "description": "Investigating reasons for miscommunication between college-level instructors and VR developers.",
  "status": "Completed",
  "dates":[
    {header:null,dates:[{year:'2021',day:'June 2'},{year:'2022',day:'April 15'}]},
  ],
  "latest_version": null,
  "external_links": [
    {
      "text": "Information Interaction Lab Website",
      "url": "https://www.mi2lab.com/"
    }
  ],
  "platforms": [],
  "skills": [
    "Virtual Reality (VR)",
    "Extended Reality (XR)",
    "Human-Computer Interaction (HCI)",
    "Online Collaboration",
    "Education"
  ],
  "categories": [
    "Work Experience",
    "Research Papers"
  ],
  "sub_category": null
};

const content = <>
  <p>I participated as a research intern at the University of Michigan's Information Interaction Laboratory, under the supervision of Professor Michael Nebeling.</p>
  <Divider space={16} />
  <p>Our project was a research inquiry into the development of Virtual Reality Learning Environments, or VRLEs. Particularly, we were curious how both instructors (who have few to no experiences with VR) and VR developers understand the application of VR in learning environments.</p>
  <Divider space={16} />
  <h3><strong>Responsibilities</strong></h3>
  <Divider space={16} />
  <ul>
    <li>Remotely collaborated with peer researchers from the Information Interaction Lab and the University of Michigan's REMS program to investigate the development of VRLEs.</li>
    <li>Participated in weekly meetings with other research groups at the Information Interaction Laboratory to share progress and suggestions.</li>
  </ul>
</>

const UMichInternData = {
	umbrella:"University",
	key:"umich_intern",
	thumbnail:thumbnail,
	title:"University of Michigan: Information Interaction Laboratory – Research Intern",
	url:"umich_intern",
  header:header,
	content:content
}

export default UMichInternData;