import { 
	thumbnail,
	groupSketches,
	highFidelityWireframe,
	highFidelityWireframe2,
	highFidelityWireframe3,
	empathyMap,
	ideasSorted,
	teamPhoto,
	productPreview,
	richPicture,
	taskDelegation,
} from "./assets";

import { Divider } from '../../../../components';

const header = {
  "id": "0de16112-a32f-473f-b6cc-b404d13e8756",
  "title": "OnePlace - Chief Design Officer (CDO) & Lead Front-End Engineer",
  "icon_url": thumbnail,
  "description": "Designing and engineering the front-end of a SaaS product built to help families share important documents online.",
  "status": "Completed",
  "dates":[
    {
      header:null,
      dates:[
        {year:"2020",day:"Jan. 21"},
        {year:"2021",day:"Feb. 24"}
      ]
    }
  ],
  "latest_version": null,
  "external_links": [
    {
      "text": "OnePlace Website",
      "url": "https://www.oneplace.family/"
    },
    {
      "text": "My Medium Stories",
      "url": "https://medium.com/@ryan_oneplace"
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
    "React Native",
    "Figma",
    "Github",
    "AWS Amplify",
    "Notion",
    "User Experience (UX) Design"
  ],
  "categories": [
    "Work Experience",
    "Personal Projects"
  ],
  "sub_category": "Web Projects"
};

const content = <>
  <p><strong>"OnePlace"</strong> initially started out as a Startup Studio venture from Cornell Tech between four colleagues, as part of CT's 2019-2020 studio-based master's degree. United by the idea of helping families share important documents online, the four of us wished to ultimately change how families interacted with each other online and how they cooperated to share critical information using the latest web technology.</p>
  <Divider space={16} />
  <p>I joined the project, originally coined "Software for Families," as the lead front-end engineer. I was responsible for designing and building out a user interface that would satisfy both tech-savvy millenials and older potential users who may not be as experienced in web technologies.</p>
  <Divider space={16} />
  <p>It was an interesting challenge and concept, and I quickly grew fond of the idea of engendering positive change by helping families adapt to modern conventions of file-sharing and communication while encouraging safe practices when using the Internet.</p>
  <Divider space={16} />
  <figure>
    <img src={productPreview} alt="" />
    <figcaption>Product UI Preview</figcaption>
  </figure>
  <Divider space={16} />
  <h3><strong>Peer Co-Founders</strong></h3>
  <Divider space={16} />
  <ul>
    <li><i><u>Daniel Asper</u></i> - Co-CEO</li>
    <li><i><u>Yasmin Lalani</u></i> - Co-CEO + Marketing Lead</li>
    <li><i><u>Sunny Ladkani</u></i> - CPO + DevOps</li>
    <li><i><u>Ryan Kim (Me)</u></i> - CDO + Front-end Engineer</li>
  </ul>
  <Divider space={16} />
  <figure>
    <img src={teamPhoto} alt="" />
    <figcaption>The team!</figcaption>
  </figure>
  <Divider space={16} />
  <h3>My Roles and Responsibilities</h3>
  <Divider space={16} />
  <h4><i><u>Co-Founder:</u></i></h4>
  <Divider space={8} />
  <p>Work together with our teams' leaders on corporate management, team building, and long-term planning.</p>
  <Divider space={16} />
  <h4><i><u>Front-end Engineer:</u></i></h4>
  <Divider space={8} />
  <p>Work with our core engineering team to develop a user-friendly user interface and workflow while keeping best practices in security and design theory in mind.</p>
  <Divider space={16} />
  <h4><i><u>Chief Design Officer (CDO):</u></i></h4>
  <Divider space={8} />
  <p>Lead the direction of all aspects of the product's functionality and design, from using the design process to guide the team on conceptualizing the User Experience of the product to interacting with our Marketing and Dev Ops teams on ensuring consistency between our external-facing marketing material and our app's capabilities.</p>  
  <Divider space={16} />
  <h3><strong>Tools</strong></h3>
  <Divider space={16} />
  <h4><i><u>Front-End:</u></i></h4>
  <Divider space={8} />
  <ul>
    <li><i><u>React Native + Expo CLI</u></i> - Main code base and framework</li>
    <li><i><u>Figma</u></i> - Wireframing and Design</li>
  </ul>
  <Divider space={16} />
  <h4><i><u>Back-End:</u></i></h4>
  <Divider space={8} />
  <ul>
    <li><i><u>AWS Amplify</u></i> -  Main API service hander + user authentication service</li>
    <li><i><u>Loopback</u></i> - API Orchestration layer for our API service</li>
    <li><i><u>Mixpanel</u></i> - User Analytics</li>
    <li><i><u>Github</u></i> - Version control and backup</li>
  </ul>
  <Divider space={16} />
  <h4><i><u>Internal:</u></i></h4>
  <Divider space={8} />
  <ul>
    <li><i><u>Notion</u></i> - Note-taking, code documentation, scheduling</li>
    <li><i><u>Google Drive</u></i> - Asset sharing</li>
    <li><i><u>Google Drive</u></i> - Asset sharing</li>
    <li><i><u>Zoom</u></i> - Conferencing tool</li>
    <li><i><u>Slack</u></i> - Team communication</li>
  </ul>
  <Divider space={16} />
  <h3><strong>Lessons Learned: A Retrospective</strong></h3>
  <Divider space={16} />
  <p>I'd like to add a list of major obstacles we faced and general advise for other entrepreneurs who may be experiencing similar obstacles.</p>
  <Divider space={16} />
  <h4><strong>Skills and Experiences Gained:</strong></h4>
  <Divider space={8} />
  <ul>
    <li>Invoking a sprint-driven development cycle of user research + code development gave us the edge we needed to start quickly, given our initial lack of resources.</li>
    <li>Developing a rigorous process of semi-structured user interviews helped to avoid major pitfalls in user research.</li>
    <li>Competitive Analyses of products currently existing in the market gave us a better perspective of why certain products are unable to satisfy niche users and how we could position "OnePlace" to better align with dissatisfied users.</li>
    <li>Delegating tasks to team members based on their strengths and goals tripled our rate of efficiency, motivated each team member to perform, and added a sense of transparency and trust among each other.</li>
    <li>Structuring our design sprints with a distinct process for interview processing, sketching, low-fidelity wireframing, and high-fidelity wireframing helped generate new ideas among team members about how to tackle existing problems and overall allowed us to proceed quickly with our design phase.</li>
  </ul>
  <Divider space={16} />
  <h4><strong>Obstacles:</strong></h4>
  <Divider space={8} />
  <ul>
    <li>Our small number of user interviews risked the possibility of having too few data points to generate key insights from.</li>
    <li>Lack of attention to protocol with user interviews risked the authenticity of our user data.</li>
    <li>Disagreements about team decisions that were collectively agreed upon initially took valuable energy and time away from some of our more important responsibilities and contributed to tensions within our team dynamic.</li>
    <li>The sacrifice of work-life balance in our startup culture risked burnout and stress among our teammates, thereby reducing efficiency and team satisfaction in the long-term.</li>
  </ul>
  <Divider space={16} />
  <h3><strong>General Advice, By Category</strong></h3>
  <Divider space={16} />
  <p>The origins of "OnePlace" are mired with both wins and losses, gains and obstacles. This experience has taught me more than any previous job had ever done before about the importance of corporate structure, team-based decision-making, and work-life balance. I came out of the experience with a positive outlook towards the future of the company. While there is no <i>right</i> way to do things, there are certainly <strong><i>wrong</i></strong> ways and avoiding those wrong ways will keep you and your company afloat for much longer than you might expect. Here is a list of suggestions I've created based off of my experiences and the obstacles we faced:</p>
  <Divider space={16} />
  <h4><i><u>Customer Search and User Interviews</u></i></h4>
  <Divider space={8} />
  <ul>
    <li>Use either structured or semi-structured interviews with pre-established question lists and topics to ensure that all or most interviews are consistent in their quality. <strong>Enforce</strong> that quality by using teams of at least two people for your interviews in order to subdivide responsibilities and prevent focus-switching during the interview."</li>
    <li>
      Avoid common pitfalls in interview questions such as:
      <ul>
        <li>disguising multiple questions as one single question,</li>
        <li>asking leading questions to push interviewees towards a certain answer,</li>
        <li>asking numerous "yes-no" questions instead of more open-ended ones that encourage interviewees to reflect upon their experiences, and</li>
        <li>using vague language such as "good," "awesome," or "bad" that can be highly interpretive in nature.</li>
      </ul>
    </li>
    <li>
      If you are at a phase where you wish to present any designs or wireframes of your product, do so with low-fidelity wireframes if you are early in your design process.
      <blockquote className="callout">
        For more info on good practices for user interviews and user data \nprocessing, you can access a public resources GDrive folder here:<br />[<a href="https://drive.google.com/drive/folders/1ASUIEqFgnIcWpw2DQM48Okq1c-1PLm8x?usp=sharing" target="_blank"  rel="noopener noreferrer">UX Design Resources</a>]
      </blockquote>
    </li>
  </ul>
  <Divider space={16} />
  <h4><i><u>User Data Processing - Personas, Empathy Maps, Ethics:</u></i></h4>
  <Divider space={8} />
  <ul>
    <li>
      Try to ensure interviewee privacy and objectiveness by removing indicators of an interviewee's identity from any recordings or notes taken during an interview:
      <ul>
        <li>Using nicknames or pseudonyms for interviewees is an appropriate measure in this case.</li>
        <li>Anonymizing user data is key if you need to share insights from your user interviews with 3rd parties who might be interested in your data.</li>
        <li>Always ensure that you follow rules of consent when it comes to interviewee data. For example, if an interviewee is uncomfortable with using audio recordings, ensure that those wishes are respected.</li>
      </ul>
    </li>
    <li>
      Following user interviews, form <strong>"Personas"</strong> that represent typical members of your target demographics.
      <ul>
        <li>Your Personas will help be an anchoring point during your sketching and wireframing process.</li>
        <li>Personas are typically built with the help of methods such as the Empathy Map, which generally help UX teams sort through interviewee data.</li>
      </ul>
    </li>
  </ul>
  <Divider space={16} />
  <h4><i><u>The Design Process - Sketching and Wireframing:</u></i></h4>
  <Divider space={8} />
  <ul>
    <li>
      The design process typically falls within these phases:
      <ol>
        <li><i><u>Sketches:</u></i> a collection of rough sketches, usually with pen/paper, the basis for ideation. Can be random and often inconsistent between different sketches, but the purpose is to explore a wide variety of possible ideas.</li>
        <li><i><u>Low-Fidelity Wireframes:</u></i>  a rough outline of what your product will appear like and function as, usually also with pen/paper. These kinds of wireframes are typically used to clarify how your product will work and are often used in user interviews to see if potential users can use your product as expected.</li>
        <li><i><u>High-Fidelity Wifeframes:</u></i> a clean-up of low-fidelity wireframes, primarily focused on appearance and UI, usually digital.</li>
      </ol>
    </li>
    <li>
      The advent of digital tools such as Figma, Canva, and Balsamiq has has made it easy to forego the initial steps of sketching and low-fidelity wireframing. However, there is a significant difference in how users interpret hand-drawn wireframes and digital wireframes:
      <ul>
        <li>Users typically are MORE critical of hand-drawn wireframes and usually focus on functionality over appearances.</li>
        <li>Users are typically LESS critical of digital wireframes and usually focus on appearances over functionality in their feedback.</li>
      </ul>
    </li>
    <li>
      When testing your product with users via wireframes, use either low-fidelity or high-fidelity wireframes based on this pattern of user behavior.
      <ul>
        <li>If you are at a phase where you wish to observe how users interpret the potential functionality of your product, use low-fidelity, hand-drawn wireframes.</li>
        <li>If you are at a phase where you wish to get feedback on the appearance and general UI of your product, use high-fidelity, digital wireframes.</li>
      </ul>
    </li>
  </ul>
  <Divider space={16} />
  <h4><i><u>Corporate Structure:</u></i></h4>
  <Divider space={8} />
  <ul>
    <li>
      Startups typically require large amounts of dedication from its founders and early employees. Ensure that all founders and employees:
      <ul>
        <li>are transparent about their expectations, goals, and future roadmaps concerning your company and/or product,</li>
        <li>adhere to role delegations and keeping each other responsible by keeping note of core responsibilities and tasks delegated to them, and</li>
        <li>stay on full-time (at least for your founder team), unless the situation demands that a founder or employee work part-time (this is why keeping each other responsible for each person's respective tasks is important).</li>
      </ul>
    </li>
    <li>
      Maintain corporate structure by establishing key processes early on and following them in times of uncertainty.
      <ul>
        <li>It might be tempting to forego corporate structure if you wish to move fast (a necessity for startups), but do not fall into this temptation.</li>
        <li>Using well-defined, comprehensive contracts and agreements is a must in this regard!</li>
      </ul>
    </li>
  </ul>
  <Divider space={16} />
  <figure>
    <img src={richPicture} alt="" />
    <figcaption>Rich Picture: An overview of how your product idea is correlated with existing products.</figcaption>
  </figure>
  <Divider space={8} />
  <figure>
    <img src={empathyMap} alt="" />
    <figcaption>Empathy Map: Provides a way to give the problems and behavior patterns of your potential customers a voice.</figcaption>
  </figure>
  <Divider space={8} />
  <figure>
    <img src={ideasSorted} alt="" />
    <figcaption>Ideation: Always write down any and all ideas that you believe can solve your customers' problems, no matter how outlandish they are at first.</figcaption>
  </figure>
  <Divider space={8} />
  <figure>
    <img src={taskDelegation} alt="" />
    <figcaption>Task Delegation: Always keep a running record of who's responsible for which task and who's specialization allows for the most efficient task completion.</figcaption>
  </figure>
  <Divider space={8} />
  <figure>
    <img src={groupSketches} alt="" />
    <figcaption>Group Sketches.</figcaption>
  </figure>
  <Divider space={8} />
  <figure>
    <img src={highFidelityWireframe} alt="" />
    <figcaption>High Fidelity Wireframe #1</figcaption>
  </figure>
  <Divider space={8} />
  <figure>
    <img src={highFidelityWireframe2} alt="" />
    <figcaption>High Fidelity Wireframe #2</figcaption>
  </figure>
  <Divider space={8} />
  <figure>
    <img src={highFidelityWireframe3} alt="" />
    <figcaption>High Fidelity Wireframe #3</figcaption>
  </figure>
  <Divider space={8} />
  <figure>
      <img src={productPreview} alt="" />
      <figcaption>Latest Product UI</figcaption>
    </figure>
</> 

const OnePlaceData = {
	umbrella:"Startups",
	key:"oneplace",
	thumbnail:thumbnail,
  thumbnailStyle:{backgroundColor:"#5a91f5"},
	title:"OnePlace - Chief Design Offier (CDO) & Lead Front-End Engineer",
	url:"oneplace",
  header:header,
	content:content
}

export default OnePlaceData;