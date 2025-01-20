import { thumbnail } from "./assets";

import { Divider } from '../../../../components';

const header = {
  "id": "59e67f39-3a78-40cb-ab1d-98f78b1f6455",
  "title": "Terms of Service Text Evaluator (ToSTE)",
  "icon_url": thumbnail,
  "description": "A browser extension capable of summarizing Terms of Service.",
  "status": "Completed",
  "dates":[
    {
      header:"Completed",
      dates:[{year:'2019',day:'Dec.'}]
    }
  ],
  "latest_version": "1.0 (FIREFOX ONLY)",
  "external_links": [
    {
      "text": "Downloadable Build & Files",
      "url": "https://github.com/ct-studio-buildboard/F19-T022"
    }
  ],
  "platforms": [],
  "skills": [
    "JavaScript",
    "Python",
    "Natural Language Processing"
  ],
  "categories": [
    "Personal Projects"
  ],
  "sub_category": "Web Projects"
};

const content = <>
  <p>The <strong>Terms of Service Text Evaluator</strong>, or <strong>"ToSTE"</strong> for short, is a browser extension intended to help people protect their data and personal information by summarizing Terms of Service documents. ToSTE answers the following question:</p>
  <Divider space={8} />
  <blockquote><i>"How might we allow people to have positive digital interactions while feeling safe and empowered?"</i></blockquote>
  <Divider space={16} />
  <p>Feeling safe in the digital world has a lot to do with the concept of privacy - it is about your data. Understanding your privacy gives YOU the power to make decisions on it. In the digital world, information about privacy is set out in Terms of Services, or ToS for short. This document  contains how a company collects your data, use it, and share it. Unfortunately, ToS's generally are long and full of legal jargon. So, few people read it.</p>
  <Divider space={16} />
  <p>This raises a problem: on the one hand, people care about privacy, but on the other, they don't read documents that govern it. How do we solve that problem? Our solution is ToSTE: the \"Terms of Service Text Evaluator\" - A web extension that reads ToS on websites analyzes the complicated privacy clauses using machine learning, summarizes the clauses, and presents them in simpler language to users. With simpler ToS, users can understand ToS in a short amount of time and can make educated decisions on their data. We believe knowledge is power. ToSTE makes Terms of Service accessible so that one can understand their rights and privacy.</p>
  <Divider space={16} />
  <h3><strong>Functionality</strong></h3>
  <Divider space={16} />
  <ul>
    <li>Parse through legal documents such as Terms of Service and return a summarized version of the document.</li>
    <li>Uses Extractive Summarization to pick sentences that are most important in each section of a legal document.</li>
    <li>Works as a browser extension on FIREFOX ONLY, with a Python back-end server that communicates with the web extension.</li>
  </ul>
  <Divider space={16} />
  <h3><strong>Peer Researchers</strong></h3>
  <Divider space={16} />
  <ul>
    <li><i><u>Emilie Burton</u></i> - Cornell Tech @ Cornell University [eb736@cornell.edu]</li>
    <li><i><u>Arief Hutahaean</u></i> - Cornell Tech @ Cornell University [arh272@cornell.edu]</li>
    <li><i><u>Jerry Tsou</u></i> - Cornell Tech @ Cornell University [ct558@cornell.edu]</li>
    <li><i><u>Ryan Kim (me)</u></i> - Cornell Tech @ Cornell University [rk494@cornell.edu]</li>
  </ul>
</>

const TosteData = {
	umbrella:"Web Projects",
	key:"toste",
	thumbnail:thumbnail,
	title:"Terms of Service Text Evaluator (ToSTE)",
	url:"toste",
  header:header,
	content:content
}

export default TosteData;