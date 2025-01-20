import { 
	thumbnail,
} from "./assets";

import { 
  Divider,
  VideoEmbed 
} from '../../../../components';

const header = {
  "title": "Patent Acceptance Predictor & Sentiment Analysis",
  "icon_url": thumbnail,
  "description": "A HuggingFace-Streamlit application for sentiment analysis and US patent acceptance prediction. Project for NYU CS-GY-6613: Artificial Intelligence - Spring 2023",
  "status": "Completed",
  "dates":[ {dates:[{year:'2023',day:'Mar 26'},{year:'2023',day:'Apr 26'}]} ],
  "latest_version": "1.0",
  "external_links": [
    {
      "text": "Online HuggingFace Space Demo",
      "url": "https://huggingface.co/spaces/rk2546/csgy-6613-project-rk2546-backup"
    },
    {
      "text": "[PRIVATE] Github Repo",
      "url": "https://github.com/cs-gy-6613-assignments/cs-gy-6613-project-rk2546-backup"
    }
  ],
  "platforms": [
    "HuggingFace",
    "Streamlit"
  ],
  "Languages": [
    "Python",
  ],
  "categories": [
    "Natural Langauge Processing"
  ],
  //"sub_category": "Natural Language Processing"
};

const content = <>
  <VideoEmbed 
    height={400} 
    src="https://www.youtube.com/embed/csSGBwIE7nk"
    title="YouTube video player" 
    frameborder={0} 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen={true} />
  <p><span><i>"If you're interested in NLP, here's a comprehensive example of just that!</i></span></p>
  <Divider space={16} />
  <p>As the name implies, our app performs two core functions: <span style={{color:"blue"}}>Sentiment Analysis</span> and <span style={{color:"blue"}}>Patent Acceptance Prediction</span>. Initially set as milestones for NYU's <span><i>CSGY-6613: Artifiical Intelligence</i></span> Spring 2023 course, this app is openly available and hosted by <a href="https://huggingface.co/" target='_blank' rel="noopener noreferrer">HuggingFace</a>.</p>
  <Divider space={16} />
  <p>Don't know if your text might evoke certain emotions? Try out our <span style={{color:"blue"}}>Sentiment Analysis</span> tool. Determine whether your text appears to be positive, negative, or more by selecting different emotion models in the dropdown option provided. Alternative, are you trying to file a patent? Use our <span style={{color:"blue"}}>Patent Acceptance Prediction</span> tool to check your changes of being accepted. Just enter your patent's <span><i>Abstract</i></span> and list of <span><i>Claims</i></span> and see how your abstract scores.</p>
  <Divider space={16} />
  <VideoEmbed 
    height={1000} 
    src="https://rk2546-csgy-6613-project-rk2546-backup.hf.space" 
    title="YouTube video player" 
    frameborder={0} 
    style={{"border-radius":"16px"}} />
  <Divider space={16} />
  <hr />
  <Divider space={16} />
  <h2><strong>Code Breakdown</strong></h2>
  <Divider space={16} />
  <p>The USPTO application is divided into several directories. Overall, the important files are present in the application as such:</p>
  <Divider space={16} />
  <figure>
    <pre>
      - data/
      <br />  - train.json
      <br />  - val.json
      <br />- src/
      <br />  - main.py
      <br />  - train.ipynb
      <br />  - val.ipynb
    </pre>
  </figure>
  <Divider space={16} />
  <p>
    <span>Both </span>
    <span><code>train.json</code></span>
    <span> and </span>
    <span><code>val.json</code></span>
    <span> contain the original USPTO data, sized down to contain only the relevant data from each recorded patent and split between training and validation data. The validation data </span>
    <span><code>val.json</code></span>
    <span> is used in the online USPTO application as a set of pre-set patents that a user can select when using the USPTO patent prediction function. </span>
    <span>That, and the </span>
    <span><code>val.ipynb</code></span>
    <span> file was used to validate the model's accuracy.</span>
  </p>
  <Divider space={16} />
  <p>
    <span>The primary code back-end is stored in </span>
    <span><code>main.py</code></span>
    <span> which runs the application on the HuggingFace space UI. The application uses </span>
    <span><strong>Streamlit</strong></span>
    <span> to render UI elements on the screen. All models run off of Transformers and Tokenizers from </span>
    <span><strong>HuggingFace</strong></span>
    <span>.</span>
  </p>
  <Divider space={16} />
  <p>
    <span>The application has two features: Sentiment Analysis (for Milestone #2) and USPTO Patent Acceptance Prediction (Milestone #3). Both run on </span>
    <span><strong>main.py</strong></span>
    <span> Sentiment Analysis relies on pre-trained </span>
    <span><a href="https://huggingface.co/models" target='_blank' rel="noopener noreferrer">models</a></span>
    <span> from HuggingFace's public </span>
    <span><a href="https://huggingface.co/datasets" target='_blank' rel="noopener noreferrer">datasets</a></span>
    <span> - particularly 4 models:</span>
  </p>
  <ul>
    <li><a href="https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment" target='_blank' rel="noopener noreferrer">cardiffnlp/twitter-roberta-base-sentiment</a></li>
    <li><a href="https://huggingface.co/finiteautomata/beto-sentiment-analysis" target='_blank' rel="noopener noreferrer">finiteautomata/beto-sentiment-analysis</a></li>
    <li><a href="https://huggingface.co/bhadresh-savani/distilbert-base-uncased-emotion" target='_blank' rel="noopener noreferrer">bhadresh-savani/distilbert-base-uncased-emotion</a></li>
    <li><a href="https://huggingface.co/siebert/sentiment-roberta-large-english" target='_blank' rel="noopener noreferrer">siebert/sentiment-roberta-large-english</a></li>
  </ul>
  <Divider space={16} />
  <p>
    <span>The Patent Acceptance Prediction uses two fine-tuned models, which are built off of a pre-existing model named </span>
    <span><a href="https://huggingface.co/distilbert-base-uncased" target='_blank' rel="noopener noreferrer">distilbert-base-uncased</a></span>
    <span> and fine-tuned off of the USPTO dataset. The tokenizer used to parse text uses the same </span>
    <span>><a href="https://huggingface.co/distilbert-base-uncased" target='_blank' rel="noopener noreferrer">distilbert-base-uncased</a></span>
    <span> model but is left unmodified.</span>
  </p>
</>

const TemplateData = {
	umbrella:"Virtual Reality Research & Projects",
	key:"template",
	thumbnail:thumbnail,
	title:"US Patent Acceptance Prediction & Sentiment Analysis (CSGY-6613: Artificial Intelligence)",
	url:"patent_prediction",
  header:header,
  content:content
}

export default TemplateData;