//import { sigsimpads2024 } from "../../../../downloads";
import { 
	thumbnail,
} from "./assets";

import { Divider, VideoEmbed } from '../../../../components';

const header = {
  "title": "Thinking of next steps: EEG signals of locomotion in VR crowds",
  "icon_url": thumbnail,
  "description": "Currently under review at ISMAR 2025",
  "status": "In Progress",
  "dates":[
    { header:'Review Version', dates:[{year:'2025',day:'Apr 11'}] }
  ],
  "latest_version": "0.99",
  /*
  "external_links": [
    { "text": "https://doi.org/10.1145/3615979.3656060", "url": "https://doi.org/10.1145/3615979.3656060" },
    { "text": "Download PDF (7 mB)", "url": sigsimpads2024 },
  ],
  */
  "platforms": [
    "Unity3D",
    "Meta Quest Pro",
    "Muse 2/S",
    "Mind Monitor"
  ],
  "skills": [
    "C#/CSharp",
    "Unity3D",
    "Python",
  ],
  "categories": [ "Research Papers" ],
  "sub_category": "VR"
};

const content = <>
  <VideoEmbed height={315} src="https://www.youtube.com/embed/6_tKPxGTxwQ" title="YouTube video player" frameborder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen={true} />
  <Divider space={16} />
  <p>
    <span>The main motivation is to create a virtual simulation of a urban road crossing with a novel approach to how typical urban studies are performed. While most urban road crossing simulations in research prioritize pre-determined, established gap distances between vehicles, vehicle velocities, or both, our study hopes to advance the practice by introducing high levels of verisimiltude with real-world scenarios by invoking unpredictability and stochastic modeling of phenomena in hyper-local interactions between pedestrians and vehicles.</span>
    <span style={{color:"blue"}}><strong><i>The main motivation is to see whether such stochastic, mathematical modeling would induce observers into conducting strategies and interactions typically seen in real-world scenarios.</i></strong></span>
    <span>This is becoming ever more important as VR is poised to supplement real-world observational studies and offers the chance to observe human behavior in situations that are either hard to reach or too dangerous in the real world.</span>
  </p>
  <Divider space={16} />
  <hr />
  <Divider space={16} />
  <h3><strong>Abstract</strong></h3>
  <p>
    <span><i>Virtual Reality (VR) is increasingly useful for experimentation with human-involved scenarios that are hard to access and dangerous to conduct in reality. There is growing incentive for VR to supplement real-world observational studies, and therefore new attention to the performance of VR assets relative to their real-world counterparts. Here, we examine how issues of investigative and experimental parity between real-world domain science and VR involving human-environment behavior might be advanced, particularly in the use case of safety science for road-crossing. Our contribution centers on a VR-based traffic flow simulation to recreate, with high-fidelity relative to the real-world, dynamics of hyper-local interaction between traffic, people, and the roadside environment. This is approached through novelty in provision of local action models for VR assets, based on realistic treatment of small-scale dynamics of traffic flow with matching agent-based pedestrian behavior trees. We show an end-to-end system that facilitates human immersion in what-if VR simulation and an experimental pipeline that supports within-subjects user behavior studies that are capable of revealing user perception of their experience in the experimental domain as well in VR as a graphical medium. An initial demonstration of the system shows that 22 participants ultimately responded with high levels of presence, and with high propensity toward natural behavior across road-crossing dimensions. We report these findings even with low-resolution graphic elements. Our results highlight that high levels of user-identified contextual verisimilitude (i.e., appearing authentic, particularly to the senses), alongside behavioral fidelity (i.e., exactness, particularly relative to users' knowledge of and experience with real-world counterparts) can be achieved, even with low-resolution graphical depictions. The key, we argue, is the design of appropriate low-level action models to drive user embodiment relative to VR assets. We contend that this finding has wider relevance to consideration of potential channels for VR experience more generally.</i></span>
  </p>
</>

const MovementEEGData = {
	umbrella:"Virtual Reality Research & Projects",
	key:"movement_eeg",
	thumbnail:thumbnail,
	title:"Thinking of next steps: EEG signals of locomotion in VR crowds",
	url:"movement_eeg",
  header:header,
	content:content
}

export default MovementEEGData;