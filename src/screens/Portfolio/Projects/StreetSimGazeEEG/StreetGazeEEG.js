import { Link } from "react-router-dom";
import { thumbnail, preprint } from "./assets";
import { Divider, ExtURL } from '../../../../components';

const header = {
  "title": "Looking for Answers: Gaze and Brain Activity as Simulation Outputs",
  "icon_url": thumbnail,
  "description": "Accepted into ACM SIGSIM PADS '25 - Ph.D. Colloquium",
  "status": "Completed",
  "dates":[
    { header:'Accepted', dates:[{year:'2025',day:'Apr 16'}] }
  ],
  //"latest_version": "1.0",
  "latest_version": null,
  "external_links": [
    { "text": "Download Pre-print PDF (7.7 mB)", "url": preprint },
  ],
  "platforms": [
    "Unity3D",
    "Meta Quest Pro",
    "Muse S",
    "Mind Monitor",
    "Rasberry Pi 4B",
    "scrcpy"
  ],
  "skills": [
    "C#/CSharp",
    "Unity3D",
    "Python",
    "OpenCV"
  ],
  "categories": [ "Research Papers" ],
  "sub_category": "Virtual Reality"
};

const content = <>
  <Divider space={16} />
  <p>I conducted this short study to determine whether I could identify patterns between people's gaze behaviors and brain activity. I had already created a VR-based simulation testbed in a <Link to="/portfolio/verisimilitude">previous research report</Link> I published, so I felt that we could use it here. I had to use <strong>three</strong> devices for this analysis: a <ExtURL href='https://vr-compare.com/headset/metaquestpro'>Meta Quest Pro</ExtURL> (<i>Note: these devices are discontinued!</i>), a <ExtURL href="https://choosemuse.com/products/muse-s-gen-2">Muse S</ExtURL> brain-computer interface (BCI), and a <ExtURL href="https://www.raspberrypi.com/products/raspberry-pi-4-model-b/">Rasberry Pi 4B</ExtURL>. There are some reasons why we had to use these devices in particular:</p>
  <Divider space={16} />
  <ul>
    <li>The <i>Meta Quest Pro</i> comes with an in-built eye tracker. An interesting... quirk about this device is that there's no official source for the sample rate of its eye tracker. <ExtURL href="https://doi.org/10.1145/3649902.3653347">This paper</ExtURL> cites the sample rate to be 90Hz, but online discussions (as well as my own, albeit clunky, testing) argue a 72Hz sample rate. I eventually just downsampled the rate to 60Hz via custom scripts.</li>
    <li><i>Unity3D</i> was the game engine that ran the simulation. I had the simulation side-loaded as a standalone application into the <i>Meta Quest Pro</i>. Because I had full control over the simulation space, I could record the space-time trajectories of all entities in the simulation via custom code, including all vehicles, pedestrians, and the user themselves.</li>
    <li>The <i>Muse S</i> is a nifty BCI that allows me to measure the Electroencephalograms (EEGs) of its wearers. It only has five electrode channels: two along the frontal lobe (AF7, AF8), two along the temporal lobe (TP9, TP10), and a reference node (Fz).</li>
    <li>The <i>Rasberry Pi 4B</i> had to be work separately and connected to the <i>Meta Quest Pro</i> via USB-C. This single-board computer was required for one specific purpose: recording the eye display shown to the MQP wearers. The MQP comes with its own recording system, but it has issues - it could potentially reduce the FPS of the simulation, and I needed the raw footage for gaze analysis anyways.</li>
  </ul>
  <Divider space={16} />
  <p>The idea here is that I throw people into our VR road-crossing simulation and simultaneously measure users' EEG, gaze behavior, trajectories, and visual fields using the <i>Muse S</i>, <i>Meta Quest Pro</i>, and <i>Rasberry Pi</i>. The recordings are natually going to be asynchronous, so to fix this I also recorded the frame number of the simulation and mapped them to all data samples. This meant I could align the EEG results with gaze activities and simulation frames.</p>
  <Divider space={16} />
  <p>I ended up discovering some statistically significant correlations in the <strong>Theta, Beta, and Gamma</strong> EEG frequencies with users crossing attempts and gaze distances (the distance between users and their gaze fixation targets. These are pretty cool to identify, because we know that <strong>Theta</strong> frequencies are associated with navigational skill and difficulty - this means that people were, to some extent, engaging in their spatial cognitive faculties while in the simulation. Furthermore, <strong>Beta</strong> and <strong>Gamma</strong> frequencies meant they were really concentrating and processing the visual information they were provided.</p>
  <Divider space={16} />
  <p>I consider this as a <strong>preliminary exploration</strong> - we still are missing some comparisons with real-world equivalent scenarios and I'm pretty sure there's other factors in crossing that we missed out. But like to think that this is a promising first step in further understanding people's cognition when walking around on streets.</p>
</>

const StreetGazeEEGData = {
	umbrella:"Research Projects",
	key:"vr_gaze_eeg",
	thumbnail:thumbnail,
	title:"Looking for Answers: Gaze and Brain Activity as Simulation Outputs",
	url:"vr_gaze_eeg",
  header:header,
	content:content
}

export default StreetGazeEEGData;