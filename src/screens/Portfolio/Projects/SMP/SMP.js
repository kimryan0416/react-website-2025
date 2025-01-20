import { thumbnail, ffmp } from "./assets";

import { Divider } from '../../../../components';

const header = {
  "id": "eac88aeb-3cbf-4959-8174-f1d0b3bd0fd1",
  "title": "Simple Music Player (SMP)",
  "icon_url": thumbnail,
  "description": "A browser-based media player for personal use.",
  "status": "On-Hold",
  "dates":[
    {
      header:null,
      dates:[
        {year:'2017',day:'Aug.'},
        {year:'2017',day:'Dec.'}
      ]
    }
  ],
  "latest_version": "1.0.1",
  "external_links": [
    {
      "text": "Downloadable Build & Files",
      "url": "https://github.com/kimryan0416/simpleMusicPlayer"
    }
  ],
  "platforms": [],
  "skills": [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "SQLite",
    "React Native"
  ],
  "categories": [
    "Personal Projects"
  ],
  "sub_category": "Web Projects"
};

const content = <>
  <p>The <strong>Simple Music Player</strong>, or <strong>"SMP"</strong> for short, is a fully functional HTML/JavaScript/PHP music player that utilizes a mixture of XML requests and SQLite queries to allow users to play audio and video from their browser. With the help of a SQLite database to store metadata information on each piece of media contained within the music player, data is can be easily accessed without altering the original metadata of all media files.</p>
  <Divider space={16} />
  <p>This project has given the opportunity to investigate how file uploads are processed both through AJAX and <code>XMLHttpRequests()</code>, as well as how JavaScript can be manipulated into playing audio and video. Investigations into how to mimic inheritance within JavaScript have also been permitted based on how the SMP had been designed.</p>
  <h3><strong>Functionality</strong></h3>
  <Divider space={16} />
  <ul>
    <li>Play audio (mp3) and video (mp4, YouTube embed) media</li>
    <li>Adjust looping and shuffling of albums</li>
    <li>Autoscrolling lyrics</li>
    <li>Media Info Editing, including album art and adding dynamic lyrics</li>
  </ul>
  <Divider space={16} />
  <h3><strong>Features</strong></h3>
  <Divider space={16} />
  <p>The SMP can play audio files, video files, and embedded YouTube videos and allows for dynamic subtitles if the user should want so. Additionally, users can add or delete media from the SMP as well, and with the use of a PHP library called the getID3, metadata can be extracted from media \nfiles and stored within the aforementioned database, saving users the effort from inputting all the metadata on their own. Should the need arise, users can also edit details of a piece of media, including uploading specific artwork for that media or use an already-existing artwork already added to the database by other media with artwork.</p>
  <Divider space={16} />
  <h3><strong>Deprecated Prototype: The Full-Function Music Player (FFMP)</strong></h3>
  <Divider space={16} />
  <p>The <strong>Full-Function Music Player</strong>, or <strong>"FFMP"</strong>, was the basis for the creation of the SMP, which retains much of the same framework as the FFMP with optimized code and additional improvements.</p>
  <Divider space={16} />
  <figure>
    <img src={ffmp} alt="" />
    <figcaption>Screenshot of the Full-Function Music Player's UI</figcaption>
  </figure>
  <Divider space={16} />
  <p>The FFMP originally aimed to replicate the functionality of other public music players such as iTunes and Spotify. Users are given the ability to upload individual song files and categorical tags prior to upload (i.e. song title, artist, album artist). Songs can be divided between "Songs", "Artists", "Albums", and "Album Artists" ("Playlists" are not available in this version), which allows for organizing audio based on user preference.</p>
</>

const SMPData = {
	umbrella:"Web Projects",
	key:"smp",
	thumbnail:thumbnail,
	title:"Simple Music Player (SMP)",
	url:"smp",
  header:header,
	content:content
}

export default SMPData;