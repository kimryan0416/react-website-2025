import { thumbnail } from "./assets";

import { Divider } from '../../../../components';


const header = {
    "id": "1d33363c-0b9a-46bc-9172-7a8f05140c95",
    "title": "eCornell: Student Web Code Autograder",
    "icon_url": thumbnail,
    "description": "A contract position where I was responsible for a Node.JS-based autograder capable of evaluating student website submissions.",
    "status": "Completed",
    "dates": [
        {
            header:null,
            dates:[
                {year:"2018",day:"June"},
                {year:"2019",day:"Aug."}
            ]
        }
    ],
    "latest_version": null,
    "external_links": [],
    "platforms": [],
    "skills": [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Codio",
        "Online Teaching"
    ],
    "categories": [
        "Work Experience",
        "Personal Projects"
    ],
    "sub_category": "Web Projects"
};

const content = <>
    <p>Soon after graduating from Cornell University, I was hired by eCornell to help them with their web design online course. As both programmer and content creator, I worked closely with other developers and the professor overseeeing the course to both create and upload the course material onto eCornell's chosen distribution platform: Codio.</p>
    <Divider space={16} />
    <p>My main contribution was creating the framework, code, and documentation around an autograder capable of evaluating students' web code.</p>
    <Divider space={16} />
    <h3><strong>Functionality</strong></h3>
    <Divider space={16} />
    <p>The eCornell Student Web Code Autograder, or Autograder for short, is a Node.JS-based program that allows local or virtual machines to evaluate web files. Utilizing a combination of Node.JS packages, Java, TestCafe, and other dependencies, the Autograder is capable of checking for various aspects about a website:</p>
    <ul>
        <li>Check for HTML, CSS, and JavaScript errors in student files.</li>
        <li>Check for the presence or lack thereof of HTML elements and CSS properties/values in the source code.</li>
        <li>Check if certain HTML elements with specific styling or text content exists when rendered.</li>
        <li>Check if actions performed on the website via headless browser create the intended results.</li>
        <li>Check if certain files and/or images are present and located in expected directories.</li>
        <li>Check if files are formatted and/or indented, based on comparisons to beautifiers.</li>
        <li>Operable on both local and virtual machines that are capable of running bash scripts.</li>
        <li>The Autograder can perform checks on both source files and rendered material of a student's website. The Autograder does so by utilizing Unit Tests that individually inspect a specific aspect of the student's submission. If needed, eCornell course managers and content creators can also write their own unique Unit Tests and adapt the Autograder for use on online IDE's such as Codio, or any virtual machine that is able to run Node.JS.</li>
    </ul>
</>

const ECornellData = {
	umbrella:"Contract Work",
	key:"ecornell",
	thumbnail:thumbnail,
	title:"eCornell: Student Web Code Autograder",
	url:"ecornell",
    header:header,
	content:content
}

export default ECornellData;