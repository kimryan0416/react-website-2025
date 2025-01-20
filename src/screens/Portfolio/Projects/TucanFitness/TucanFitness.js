import { 
	thumbnail,
	stage1,
	stage2,
	uiScreenshot,
	createRace,
} from "./assets";

import { Divider } from '../../../../components';

const header = {
  "id": "93c32e98-cdd5-48d9-8226-fbe54ce44b62",
  "title": "Tucan Fitness – Lead UX Developer and Front-End Engineer",
  "icon_url": thumbnail,
  "description": "Introducing the UX Design process into a fitness web app to help runners race remotely across the country.",
  "status": "Completed",
  "dates":[
    {
      header:'Volunteer',
      dates:[{year:'2020',day:'Aug. 4'},{year:'2020',day:'Sep. 21'}]
    },
    {
      header:'Engineer',
      dates:[{year:'2020',day:'Sep. 22'},{year:'2021',day:'Apr. 12'}]
    }
  ],
  "latest_version": null,
  "external_links": [
    {
      "text": "Tucan Fitness Website",
      "url": "https://tucan.fitness/"
    },
    {
      "text": "UX Design Resources",
      "url": "https://drive.google.com/drive/folders/1ASUIEqFgnIcWpw2DQM48Okq1c-1PLm8x?usp=sharing"
    }
  ],
  "platforms": [],
  "skills": [
    "HTML",
    "CSS",
    "JavaScript",
    "Angular.js",
    "Python",
    "Information Interfaces and Presentation",
    "User Experience (UX) Design",
    "User Interfaces (UI)"
  ],
  "categories": [
    "Personal Projects",
    "Work Experience"
  ],
  "sub_category": "Web Projects"
};

const content = <>
  <p>I was largely responsible for helping the Tucan Fitness front-end development team update their existing user interface and introduce UX Design concepts into their development process.</p>
  <Divider space={16} />
    <figure>
    <img src={uiScreenshot} alt="" />
    <figcaption>Screenshot of the Tucan Fitness web app user interface.</figcaption>
  </figure>
  <Divider space={16} />
  <p>While on this project, I spearheaded the design process by teaching TF's core staff and developers about how to integrate user interview findings into key feature sets. I also acted as the platform's primary front-end developer, working closely together with the team's back-end engineers to add new functions and update outdated processes.</p>
  <Divider space={16} />
  <h3><strong>About Tucan Fitness</strong></h3>
  <Divider space={16} />
  <p>
    Tucan Fitness was a startup venture led by graduates of Cornell University and Cornell Tech that aimed to allow people to participate in 
    "virtual races". Participants would track the distance they ran while exercising in private, upload that data either manually or 
    automatically through <a href="https://www.strava.com/" target="_blank"  rel="noopener noreferrer">Strava</a>  to Tucan Fitness's servers, 
    and avatars on a virtual map would proceed along the virtual route. In doing so, racers could still exercise in private while participating in 
    competitive racing.
  </p>
  <Divider space={16} />
  <h3><strong>Responsibilities</strong></h3>
  <Divider space={16} />
  <ul>
    <li>Provide consultation and design suggestions for existing visual elements within the web app.</li>
    <li>Introduce UX Design processes into the development cycle, including the use of empathy maps, personas, wireframes, and brand guidelines.</li>
    <li>Optimize front-end processes to make the app visually consistent and faster.</li>
    <li>Work with back-end engineers to add new functions such as the ability for normal users to create new races.</li>
    <li>Contribute to front-end documentation on the structure and components of the Angular framework.</li>
  </ul>
  <Divider space={16} />
  <h3><strong>Peer Developers, Designers, and Engineers</strong></h3>
  <Divider space={16} />
  <ul>
    <li><i><u>Katherine Donahoe</u></i> - COO [<a href="https://www.linkedin.com/in/katie-donahoe-90a241121/" target="_blank"  rel="noopener noreferrer">LinkedIn</a>]</li>
    <li><i><u>Alexander Popeil</u></i> - CTO [<a href="https://www.linkedin.com/in/alexander-popeil-b4440410b/"  target="_blank"  rel="noopener noreferrer">LinkedIn</a>]</li>
    <li><i><u>Nathan Cinnamond</u></i> - CDO [<a href="https://www.linkedin.com/in/nathancinnamond/"  target="_blank"  rel="noopener noreferrer">LinkedIn</a>]</li>
    <li><i><u>Billy Grenis</u></i> - CEO [<a href="https://www.linkedin.com/in/grenis/"  target="_blank"  rel="noopener noreferrer">LinkedIn</a>]</li>
    <li><i><u>Angela Nat</u></i> - Lead UX Designer [<a href="https://www.linkedin.com/in/tanangela/"  target="_blank"  rel="noopener noreferrer">LinkedIn</a>]</li>
    <li><i><u>Emily Casale</u></i> - Lead Graphic Designer [<a href="https://www.linkedin.com/in/emily-casale/"  target="_blank"  rel="noopener noreferrer">LinkedIn</a>]</li>
  </ul>
  <Divider space={16} />
  <h3><strong>Tools</strong></h3>
  <Divider space={16} />
  <ul>
    <li><i><u>Angular.js</u></i> - Front-End Framework</li>
    <li><i><u>Figma</u></i> - Wireframes, Asset Creation</li>
    <li><i><u>Google Drive</u></i> - Resource Management</li>
    <li><i><u>Slack</u></i> - Communication</li>
  </ul>
  <Divider space={16} />
  <h3><strong>Development Process</strong></h3>
  <Divider space={16} />
  <p>Progress in Tucan Fitness during my work period was split into two major stages. The first stage required me to improve the user interface of the Tucan Fitness web application, whereas the second required me to fully create, test, and launch a new collection of screens and functions that would allow normal users to create virtual races of their own.</p>
  <Divider space={16} />
  <h4><i><u>Stage 1: UI Updates and Optimization</u></i></h4>
  <Divider space={8} />
  <figure>
    <img src={stage1} alt="" />
    <figcaption>Stage 1 Development</figcaption>
  </figure>
  <Divider space={16} />
  <p>Crucial to Stage 1 was the introduction of UX Design concepts that would solve a crucial issue: the lack of direction regarding which features to incorporate into the web app. This conundrum came from two distinct issues:</p>
  <Divider space={16} />
  <ol>
    <li>Disagreements on how the company should proceed in its design pattern and what features to add.</li>
    <li>A lack of knowledge on how current users navigated the app and what features they wanted.</li>
  </ol>
  <Divider space={16} />
  <p>The introduction of UX Design processes, from user interviews and brand guideline definitions to empathy maps and personas, solved both of these issues simultaneously. Brand Guidelines, agreed upon by the TF team, centralized which aspects of the UI and functionality that the TF web app would prioritize, while interviews, empathy maps, and personas identified key needs and wants that our target audiences wished to see in the web app.</p>
  <Divider space={16} />
  <h4><i><u>Stage 2: "Create Race" Feature & Documentation</u></i></h4>
  <Divider space={8} />
  <figure>
    <img src={stage2} alt="" />
    <figcaption>Stage 2 Development</figcaption>
  </figure>
  <Divider space={16} />
  <p>By continuously iterating on these interviews and personas within a span of several weeks, similar to an Agile UX process, we were able to update the web app's visual identity and functionality in a way that satisfied a majority of our users.</p>
  <Divider space={16} />
  <p>The insights gained from users, particularly race directors, from Stage 1 also fueled many of the functionalities we added in Stage 2. Our foresight in gathering user interviews from both racers and race directories enabled us to move quickly in code development, for we already had the personas and empathy maps needed to determine which features to add to the "Create Race" part of the web app.</p>
  <Divider space={16} />
  <figure>
    <img src={createRace} alt="" />
    <figcaption>Screenshot of the Tucan Fitness race creation interface</figcaption>
  </figure>
  <Divider space={16} />
  <h3><strong>UX Design Resources</strong></h3>
  <Divider space={16} />
  <blockquote className="callout">
    The experience necessitated the use of templates and processes commonly found in UX Design. An aggregate collection of these templates can be found at the link below for anybody interested in getting started with UX Design: [<a href="https://drive.google.com/drive/folders/1ASUIEqFgnIcWpw2DQM48Okq1c-1PLm8x?usp=sharing" target="_blank"  rel="noopener noreferrer"><strong>UX DESIGN RESOURCES</strong></a>]
  </blockquote>
  <Divider space={16} />
  <h3><strong>Lessons Learned</strong></h3>
  <Divider space={16} />
  <p>While I had provided consultation and development services in the past, this was the first time my consultation extended beyond front-end coding and into UX Design practices. This meant I had to employ different tactics to understand the needs of TF's core team and guide them towards a development process geared towards UX-oriented practices.</p>
  <Divider space={16} />
  <p>Some key takeaways from this experience were:</p>
  <Divider space={16} />
  <h4><i><u>Skills and Experiences Gained:</u></i></h4>
  <Divider space={8} />
  <ul>
    <li>Quickly got developers and designers in the team to adapt to UX-specific practices such as empathy maps, personas, and wireframes.</li>
    <li>Became familiar with team leader responsibilities by delegating tasks to appropriate personnel, leading management-level changes in the team's development cycle, and encouraging documentation of front-end code to discover redundancies and disparities in code structure.</li>
    <li>Successfully employed UX Design practices to discover issues in the web app's user experience and identify user needs that were previously undiscovered.</li>
  </ul>
  <Divider space={16} />
  <h4><i><u>Obstacles:</u></i></h4>
  <Divider space={8} />
  <ul>
    <li>Remote teamwork often led to a lack of communication and transparency between team members, which sometimes hindered our work ethic.</li>
    <li>A rapid Agile UX design process, while beneficial in identifying user needs and pains, sometimes moved too quickly to allow for group collaboration on code, instead forcing one or two developers to spearhead changes and preventing the team from documenting changes. This could have been avoided through careful note taking during both meetings and development scrums to provide overviews on progress and upcoming tasks.</li>
    <li>Code documentation was neglected for much of the process until much later in the development cycle.</li>
  </ul>
</>
 
const TucanFitnessData = {
	umbrella:"Startups",
	key:"tucanfitness",
	thumbnail:thumbnail,
	title:"Tucan Fitness - Lead UX Developer and Front-End Engineer",
	url:"tucanfitness",
  header:header,
	content:content
}

export default TucanFitnessData;