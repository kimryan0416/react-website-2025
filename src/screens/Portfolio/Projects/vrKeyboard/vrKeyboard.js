import { vrkeyboard } from "../../../../downloads";
import { 
	thumbnail,
	v0_1,
	v0_2,
	v0_3,
	v1_0,
	v1_1,
	v1_2,
	report,
} from "./assets";

import { Divider } from '../../../../components';

const header = {
  "id": "8138b1be-96b0-475d-8b00-a924139a7a6d",
  "title": "A Survey and Implementation of Fast-Input Typing Methods in Virtual Reality",
  "icon_url": thumbnail,
  "description": "An input interface realized for easy use in virtual reality. The interface is a joystick-based control scheme where characters are selected via joystick orientation and characters are typed by using a mechanism similar to that of 9-pin cell phone keyboards.",
  "status": "Completed",
  "dates":[
    {header:'Completed',dates:[{year:'2020',day:'May 10'}]}
  ],
  "latest_version": "1.2",
  "external_links": [
    {
      "text": "Download PDF (2.2 mB)",
      "url": vrkeyboard
    },
    {
      "text": "Project Page",
      "url": "https://sites.google.com/cornell.edu/cs5678-2020sp-projects/home/vrkeyboard?authuser=0"
    },
    {
      "text": "Ver. 1.0 Demonstration",
      "url": "https://youtu.be/AKYRDivoi2c"
    },
    {
      "text": "Ver. 1.1 Demonstration",
      "url": "https://youtu.be/IYpnoIrZA6c"
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
    "User Interfaces (UI)"
  ],
  "categories": [
    "Personal Projects",
    "Research Papers"
  ],
  "sub_category": "VR"
};

const content = <>
  <p>The <strong>Virtual Keyboard</strong> is a project aimed to provide users of the Oculus Quest with a fast keyboard input channel.</p>
  <Divider space={16} />
  <p>One fascinating aspect about Virtual Reality is the lack of any realized method to input text within a reasonably quick time frame. While virtual keyboards currently exist such as Microsoft's HMDisplay-based VR Keyboard and Normal.'s Open-Source Keyboard, many of these available options are either highly experimental or offer experiences that are not intuitive in their nature. This project aims to create a drag-and-drop keyboard within Unity that is both intuitive to use for most users, reduces cognitive overload on the user, and allows for accurate text input.</p>
  <Divider space={16} />
  <figure>
    <img src={report} alt="" />
    <figcaption>Paper Report Preview</figcaption>
  </figure>
  <Divider space={16} />
  <p>The project has come to a close as of May 2020, but the current iteration of the keyboard has the potential to be expanded into other Virtual Reality applications developed at Cornell Tech. Other planned applications of this project include:</p>
  <Divider space={8} />
  <ul>
    <li>Research into delimiters between hard and soft input methods in Mixed Reality.</li>
    <li>Custom Debug Console within Virtual Reality for easy debugging and system control.</li>
    <li>Drag-and-drop prefab availability amongst Cornell Tech's Mixed Reality Collaboratory group.</li>
  </ul>
  <Divider space={16} />
  <h3><strong>Peer Researchers</strong></h3>
  <Divider space={16} />
  <ul>
    <li><i><u>Katie Donahoe</u></i> - Cornell Tech @ Cornell University [kd459@cornell.edu]</li>
    <li><i><u>Prithvi Sriram</u></i> - Cornell Tech @ Cornell University [ps976@cornell.edu]</li>
    <li><i><u>Ryan Kim (me)</u></i> - Cornell Tech @ Cornell University [rk494@cornell.edu]</li>
  </ul>
  <Divider space={16} />
  <h3><strong>Advisor</strong></h3>
  <Divider space={16} />
  <ul>
    <li><i><u>Harald Haraldsson</u></i> - Cornell Tech @ Cornell University [hh586@cornell.edu]</li>
  </ul>
  <Divider space={16} />
  <h3><strong>Functionality</strong></h3>
  <Divider space={16} />
  <ul>
    <li>Character Selection via Joystick orientation; a 2nd inner layer toggable by index trigger hold on the controller holding the keyboard.</li>
    <li>Character Input and Delete via button press on controller not holding the keyboard.</li>
    <li>Holding the Input and Delete buttons acts similarly to holding a key on a normal keyboard.</li>
  </ul>
  <Divider space={16} />
  <h3><strong>Equipment</strong></h3>
  <Divider space={16} />
  <ul>
    <li>Oculus Quest (now Meta Quest)</li>
    <li>Unity3D</li>
  </ul>
  <Divider space={16} />
  <hr />
  <Divider space={16} />
  <h3><strong>Abstract</strong></h3>
  <Divider space={16} />
  <p><i>This work demonstrates VRKeyboard - a joystick and button-based text input method in Virtual Reality that resembles the semantic appearance and functionality of older T9 phone keyboards. This work also presents a modified version, Cheat VRKeyboard, which attempts to further improve the user experience by adding a short- cut “cheat” layer. These come from a collective goal to design a VR-oriented keyboard that is intuitive in nature and is functionally adequate for VR users’ general needs. Through experimentation with users, VRKeyboard’s two designs were evaluated both qualita- tively and quantitatively to observe if they align with user expecta- tions of functionality while maintaining a consistent performance across multiple users. Key results indicated that on average, users typed 8.49 WPM for the VRKeyboard, and 5.44 WPM for the VR “Cheat” keyboard, with experienced users typing 13.3 WPM for the VRKeyboard. Users made fewer errors with the VR Cheat keyboard, however felt it was more physically and mentally demanding than VRKeyboard.</i></p>
  <Divider space={16} />
  <figure>
    <img src={v0_1} alt="" />
    <figcaption>Ver. 0.1</figcaption>
  </figure>
  <Divider space={8} />
  <figure>
    <img src={v0_2} alt="" />
    <figcaption>Ver. 0.2</figcaption>
  </figure>
  <Divider space={8} />
  <figure>
    <img src={v0_3} alt="" />
    <figcaption>Ver. 0.3</figcaption>
  </figure>
  <Divider space={8} />
  <figure>
    <img src={v1_0} alt="" />
    <figcaption>Ver. 1.0</figcaption>
  </figure>
  <Divider space={8} />
  <figure>
    <img src={v1_1} alt="" />
    <figcaption>Ver. 1.1</figcaption>
  </figure>
  <Divider space={8} />
  <figure>
    <img src={v1_2} alt="" />
    <figcaption>Ver. 1.2</figcaption>
  </figure>
</>

/*
<li><ExtURL href={vrkeyboard}>Download PDF (2.2 mB)</ExtURL></li>
<ExtURL href={vrkeyboard}><Button>Download PDF (2.2 mB)</Button></ExtURL>

<img className="PortfolioContentImage" src={report} alt="Paper Report Preview" />

<img className="PortfolioContentImage" src={v0_1} alt="Ver. 0.1" />
<img className="PortfolioContentImage" src={v0_2} alt="Ver. 0.2" />
<img className="PortfolioContentImage" src={v0_3} alt="Ver. 0.3" />
<img className="PortfolioContentImage" src={v1_0} alt="Ver. 1.0" />
<img className="PortfolioContentImage" src={v1_1} alt="Ver. 1.1" />
<img className="PortfolioContentImage" src={v1_2} alt="Ver. 1.2" />
*/

const VRKeyboardData = {
	umbrella:"Virtual Reality Research & Projects",
	key:"vrkeyboard",
	thumbnail:thumbnail,
	title:"A Survey and Implementation of Fast-Input Typing Methods in Virtual Reality",
	url:"vrKeyboard",
  header:header,
	content:content
}

export default VRKeyboardData;