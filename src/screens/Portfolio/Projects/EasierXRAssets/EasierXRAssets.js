import { Link } from "react-router-dom";

import { thumbnail } from "./assets";

import { Divider } from '../../../../components';

const header = {
  "id": "51a16ca1-5510-4d27-acd5-3acdee180e03",
  "title": "Easier XR Assets",
  "icon_url": thumbnail,
  "description": "Premade template scripts for Unity developers to easily make VR experiences.",
  "status": "On-Hold",
  "dates": null,
  "latest_version": null,
  "external_links": [],
  "platforms": [],
  "skills": [
    "C#/CSharp",
    "Oculus Quest",
    "Unity"
  ],
  "categories": [
    "Personal Projects"
  ],
  "sub_category": "VR"
};

const content = <>
  <p>The <strong>EasierXRAssets</strong> package is an offshoot of the <Link to="/portfolio/easierVRAssets">EasierVRAssets</Link> project that is planned to work with Unity's XR Rig system.</p>
  <Divider space={16} />
  <p>This project has been discontinued and put on hold due to the release of <strong>Unity3D's</strong> OpenXR implementation.</p>
</>

const EasierXRAssetsData = {
	umbrella:"Virtual Reality Research & Projects",
	key:"easierxrassets",
	thumbnail:thumbnail,
	title:"Easier XR Assets",
	url:"easierXRAssets",
	header:header,
  content:content
}


export default EasierXRAssetsData;