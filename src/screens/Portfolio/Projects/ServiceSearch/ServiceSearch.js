import { serviceSearch, serviceSearchPoster } from "../../../../downloads";

import { thumbnail } from "./assets";

import { Divider } from '../../../../components';


const header = {
  "id": "25eb114c-d583-4bb5-9645-7d374179303c",
  "title": "ServiceSearch: An Opportunity Searcher Just For You",
  "icon_url": thumbnail,
  "description": "A report on volunteering behavior amongst college students.",
  "status": "Completed",
  "dates":[
    {
      header:null,
      dates:[
        {year:'2017',day:'Aug.'},
        {year:'2017',day:'Dec.'}
      ]
    }
  ],
  "latest_version": null,
  "external_links": [
    {
      "text": "Report PDF (634 kB)",
      "url": serviceSearch
    },
    {
      "text": "ServiceSearch Poster",
      "url": serviceSearchPoster
    }
  ],
  "platforms": [],
  "skills": [
    "Information Interfaces and Presentation",
    "User Experience (UX) Design",
    "User Interfaces (UI)"
  ],
  "categories": [
    "Research Papers"
  ],
  "sub_category": null
};

const content = <>
  <p>A semester-long inspection of human-computer interaction design via the development of a prototype mobile application called "ServiceSearch". Working in a team of 6, the design phase of our prototype’s development involved rigorous application of HCI-based theory such as the usage of personas to facilitate user research and testing and the usage of interview data to develop design solutions to problems.</p>
  <Divider space={16} />
  <p>Our initial analysis of alternate existing web applications and interview responses suggested that students in colleges, particularly at Cornell, were largely constrained by time, transportation, and exposure to opportunities due to learning about opportunities mostly via word of mouth. Furthermore, students felt best about volunteering when the opportunity revolved around a specific interest of theirs or put to use a skill of theirs that could discovered.</p>
  <Divider space={16} />
  <p>This directed the design of our "ServiceSearch" app to focus primarily on not just creating a database for volunteer opportunities but also catering to the limitations of each user such as volunteer interests, transportation options, and time available.</p>
  <Divider space={16} />
  <h3><strong>Peer Researchers</strong></h3>
  <Divider space={16} />
  <ul>
    <li><i><u>Kate Brind</u></i> - Cornell University [kbb55@cornell.edu]</li>
    <li><i><u>Amanda Chen</u></i> - Cornell University [aec255@cornell.edu]</li>
    <li><i><u>Kevin Kee</u></i> - Cornell University [kpk58@cornell.edu]</li>
    <li><i><u>Yoo Hyeon Kim</u></i> - Cornell University [yk493@cornell.edu]</li>
    <li><i><u>Amanda Xu</u></i> - Cornell University [ax22@cornell.edu]</li>
  </ul>
</>

const ServiceSearchData = {
	umbrella:"Research",
	key:"servicesearch",
	thumbnail:thumbnail,
	title:"ServiceSearch: An Opportunity Searcher Just For You",
	url:"servicesearch",
  header:header,
	content:content
}

export default ServiceSearchData;