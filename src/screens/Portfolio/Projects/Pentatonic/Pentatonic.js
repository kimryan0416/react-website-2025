import { pentatonic } from "../../../../downloads";

import { thumbnail } from "./assets";

import { Divider, VideoEmbed } from '../../../../components';

const header = {
  "id": "58e9fb49-924f-40cd-9fe7-8de33ac8bced",
  "title": "Pentatonic Tone Sequencer",
  "icon_url": thumbnail,
  "description": "Teaching young children about music scales.",
  "status": "Completed",
  "dates":[
    {
      header:null,
      dates:[
        {year:"2017",day:"Sep."},
        {year:"2017",day:"Dec."}
      ]
    }
  ],
  "latest_version": "1.0 (FIREFOX ONLY)",
  "external_links": [
    {
      "text": "Report PDF (1.4 mB)",
      "url": pentatonic
    },
    {
      "text": "Video Demonstration",
      "url": "https://youtu.be/X9uepFLdJ9k"
    }
  ],
  "platforms": [],
  "skills": [
    "Arduino",
    "C/C++",
    "Teensy"
  ],
  "categories": [
    "Personal Projects"
  ],
  "sub_category": "Hardware"
};

const content = <>
  <p>A collaborative project during Cornell University's INFO 4320 Intro to Rapid Prototyping course, the Pentatonic Tone Sequencer allows users to create harmonic sequences of music by pressing on the button pad on top of the device.</p>
  <Divider space={16} />
  <p>The device utilizes a 8 x 16 button grid with the X-axis representing the beat (from left to right) and the Y-axis representing a tone in a pentatonic harmonic scale. Users press on a button to activate it, and all notes that are activated in the same column (x-value) will output their associated y-value-based notes together, and the system will loop through and around the X-axis.</p>
  <Divider space={16} />
  <p>My main role in the group was as our team's lead programmer and wiring specialist. I was responsible for writing the main code that operated the button pads, audio output, and volume control. As such, I was also responsible for ensuring that the schematics of our sequencer were correctly wired such that voltages were controlled properly and signals from both the Teensy 5 chip and the Teensy Audio Shield we had used were sent to their proper peripherals.</p>
  <Divider space={16} />
  <VideoEmbed height={400} src="https://www.youtube.com/embed/X9uepFLdJ9k?si=-jp-MCFijyhYt-UM"  title="YouTube video player" frameborder={0} allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen={true} />
  <Divider space={16} />
  <h3><strong>Main Materials</strong></h3>
  <Divider space={16} />
  <ul>
    <li>Adafruit 4x4 Button Pad (buttons)</li>
    <li>Wood (frame)</li>
    <li>Acrylic Sheet (frame)</li>
    <li>3mm colored LED bulbs</li>
    <li>Teensy 5</li>
    <li>Teensy Audio Shield</li>
    <li>Speakers</li>
    <li>Power Bank (power supply)</li>
    <li>Potentiometer (volume control)</li>
  </ul>
  <Divider space={16} />
  <h3><strong>Teammates</strong></h3>
  <Divider space={16} />
  <ul>
    <li><i><u>Annie Zhang</u></i> - Cornell University [zz229@cornell.edu]</li>
    <li><i><u>Boris Chan</u></i> - Cornell University [bkc38@cornell.edu]</li>
    <li><i><u>Cindy Wang</u></i> - Cornell University [cw653@cornell.edu]</li>
  </ul>
</>

const PentatonicData = {
	umbrella:"Hardware",
	key:"pentatonic",
	thumbnail:thumbnail,
  thumbnailStyle:{backgroundColor:"rgb(230,230,230)"},
  thumbnailImageStyle:{padding:16},
	title:"Pentatonic Tone Sequencer",
	url:"pentatonic",
  header:header,
	content:content
}

export default PentatonicData;