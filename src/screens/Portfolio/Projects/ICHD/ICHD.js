import { thumbnail } from "./assets";

import { Divider } from '../../../../components';

const header = {
    "id": "b32953a2-c2c6-4387-8214-830db1a171fb",
    "title": "Seoul National University - Marine Hydrodynamics Lab: International Conference on Hydrodynamics Website Developer",
    "icon_url": thumbnail,
    "description": "Landing pages for two conferences hosted by SNU's Marine Hydrodynamics Lab.",
    "status": "Completed",
    "dates":[
        {
            header:null,
            dates:[
                {year:"2017",day:"June"},
                {year:"2017",day:"Aug."}
            ]
        }
    ],
    "latest_version": null,
    "external_links": [
        {
            "text": "ICHD 2018 Website",
            "url": "https://mhl.snu.ac.kr/ichd2018/"
        },
        {
            "text": "HYEL 2018 Website",
            "url": "https://mhl.snu.ac.kr/hyel2018/"
        }
    ],
    "platforms": [],
    "skills": [
        "HTML",
        "CSS",
        "JavaScript",
        "jQuery",
        "MySQL",
        "PHP"
    ],
    "categories": [
        "Work Experience",
        "Personal Projects"
    ],
    "sub_category": "Web Projects"
};

const content = <>
    <p>I was contracted to make a website for the 2018 International Conference on Hydrodynamics, which was being hosted by Seoul National University's (SNU's) Marine Hydrodynamics Laboratory (MHL).</p>
    <Divider space={16} />
    <p>The website allows for users who create accounts to upload documents into the website's main server and the managers of the conference to view these documents. This was necessary as the website was intended to allow the managers to view research papers and select individuals that they would invite to be speakers at this conference. The website gives users the chance to upload multiple documents at once and uses a database as a means of file management.</p>
    <Divider space={16} />
    <h3><strong>Functionality</strong></h3>
    <Divider space={16} />
    <h4><u>Users can:</u></h4>
    <ul>
        <li>Create account with proper password encryption.</li>
        <li>Upload multiple files simultaneously, renaming them prior to upload if necessary.</li>
        <li>Delete unneeded files they themselves uploaded.</li>
    </ul>
    <Divider space={16} />
    <h4><u>Administrators can:</u></h4>
    <ul>
        <li>Track all users with accounts on the website and download and/or modify their file uploads if necessary.</li>
        <li>Utilize a checklog that tracks the most recent uploads, deletions, and file\nrenamings that have happened. <i>(This was necessary due to server privileges preventing automated emails from being properly sent by websites managed by Seoul National University)</i></li>
        <li>Retrieve replacement passwords for users who have lost and/or forgotten the passwords to their accounts. <i>(This was necessary due to server privileges preventing automated emails from being properly sent by websites managed by Seoul National University)</i></li>
    </ul>
</>

const ICHDData = {
	umbrella:"Contract Work",
	key:"ichd",
	thumbnail:thumbnail,
	title:"Seoul National University - Marine Hydrodynamics Lab: International Conference on Hydrodynamics Websites",
	url:"ichd",
    header:header,
	content:content
}

export default ICHDData;