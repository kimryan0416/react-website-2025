import { thumbnail } from "./assets";

import { Divider } from '../../../../components';

const header = {
    "id": "7413c7ea-a2e2-4ad6-8c99-8e05e6044e72",
    "title": "MIMO - React.js Content Contractor & Consultant",
    "icon_url": thumbnail,
    "description": "Creating lesson plans and content for MIMO’s “React Basics” module.",
    "status": "Ongoing",
    "dates":[
        {
            header:"React Basics and Intermediate",
            dates:[
                {year:"2021",day:"May 17"},
                {year:"2021",day:"Aug. 10"}
            ]
        },
        {header:"React Advanced",dates:[{year:'2021',day:'Dec. 22'},{year:'2022',day:'July 31'}]}
    ],
    "latest_version": null,
    "external_links": [
        {
            "text": "MIMO Website",
            "url": "https://getmimo.com/playgrounds"
        }
    ],
    "platforms": [],
    "skills": [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Online Teaching"
    ],
    "categories": [
        "Work Experience"
    ],
    "sub_category": null
};

const content = <>
    <p>I was responsible for the planning, writing, and building of MIMO's online courses lessons around the <strong>React.js</strong> JavaScript library. These lessons, aimed towards newcomers to React.js, introduced the library's key concepts and how to navigate its component-based infrastructure. The implementation of lesson content involved writing both the student code, unit tests that evaluated the students' efforts in each lesson, and challenges that tested students' comprehension. Afterwards, time was spent bug-fixing and polishing the lessons.</p>
    <Divider space={16} />
    <p>These lessons are integrated into MIMO's "React Basics", "React Intermediate", and "React Advanced" modules, split across fourteen "Skills" that each represent major aspects of React.js such as State Handling, Functional Components, and Hooks. Content for each Skill consists of lessons; each lesson consists of a description and executable code that students had to complete in order to move to the next lesson. As the lesson planner, I was allowed to decide not just what the content was but also how they would build off of one another sequentially across the fourteen Skills.</p>
    <Divider space={16} />
    <p>Since the three modules were meant for newcomers to React.js, I had to consider how to convey the lesson content in a manner that was easy to understand. The planning phase of the development process took the largest amount of time, whereas the implementation of lesson content into MIMO's infrastructure took less time as a result of careful planning and adherence to MIMO’s content guidelines. Bug-fixing took the majority of my time afterwards.</p>
    <Divider space={16} />
    <h3><strong>Responsibilities</strong></h3>
    <Divider space={16} />
    <ul>
        <li>Formulate lesson plans, split across fourteen Skills, to help\nnewcomers to React.js get acquainted with the library's core concepts.</li>
        <li>Collaborate with MIMO supervisors to ensure that each lesson adhered to MIMO's content guidelines.</li>
        <li>Implement lesson content into MIMO's infrastructure using their proprietary Course Builder tool.</li>
        <li>Plan, develop, and integrate Projects that encapsulated the learning content\nfrom the fourteen Skills and gave examples of how to use React.js to create web applications.</li>
    </ul>
    <Divider space={16} />
    <h3><strong>Project Sample Code</strong></h3>
    <Divider space={16} />
    <p>Presented here is a public, sample version of the code projects used inside of the "React Basics" Projects. Students are required to modify each using the concepts taught in the module's Skills.</p>
    <Divider space={16} />
    <iframe src="https://kimryan0416.github.io/mimo-projects/" height={460} width={256} title="MIMO project samples" />	
</>

const MIMOData = {
	umbrella:"Startups",
	key:"mimo",
	thumbnail:thumbnail,
    thumbnailImageStyle:{padding:16},
	title:"MIMO - React.js Content Contractor/Consultant",
	url:"mimo",
    header:header,
	content:content
}

export default MIMOData;