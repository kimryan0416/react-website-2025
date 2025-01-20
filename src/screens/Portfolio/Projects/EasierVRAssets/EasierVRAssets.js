import { thumbnail } from "./assets";

import { Divider } from '../../../../components';

const header = {
  "id": "407a9fe3-e5ee-41d8-86ae-2c044ca0e8c9",
  "title": "Easier VR Assets",
  "icon_url": thumbnail,
  "description": "Custom scripts as an alternative to Oculus Implementation's OVR scripts.",
  "status": "Ongoing",
  "dates": null,
  "latest_version": null,
  "external_links": [
    {
      "text": "Latest Release (v2.0.0)",
      "url": "https://github.com/kimryan0416/EasierVRAssets/releases/tag/v2.0.0"
    }, {
      "text": "Github Repo",
      "url": "https://github.com/kimryan0416/EasierVRAssets"
    }
  ],
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
  <p>The <strong>EasierVRAssets</strong> package is a side project aimed to replicate the functionality of Oculus's OVRGrabber and OVRGrabbable scripts, which are provided in The <strong>Oculus Integration</strong> package on Unity.</p>
  <Divider space={16} />
  <p>Created in response to the general user-unfriendly nature of the default Oculus Integration package, this package attempts to reduce time for prototyping by having pre-set settings and code to allow for grabbing, locomotion, and any other events attached to each button input on the Oculus Quest and Quest 2 controllers.</p>
</>

const EasierVRAssetsData = {
	umbrella:"Virtual Reality Research & Projects",
	key:"easiervrassets",
	thumbnail:thumbnail,
	title:"Easier VR Assets",
	url:"easierVRAssets",
  header:header,
  content:content
}


export default EasierVRAssetsData;