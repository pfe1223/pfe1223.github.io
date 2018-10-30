'use strict';

//data to be displayed
const data = [
  {
    "objID" : 1,
    "frenchword": "symmetrique",
    "frenchdescription": "la meme chose",
    "englishword": "symmetrical",
    "englishdescription": "same on both sides",
    "image": "image01"
  },
  {
    "objID" : 2,
    "frenchword": "l'axe",
    "frenchdescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "englishword": "axis",
    "englishdescription": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "image": "image02"
  },
  {
    "objID" : 3,
    "frenchword": "égalité",
    "frenchdescription": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    "englishword": "equality",
    "englishdescription": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "image": "image03"
  },
  {
    "objID" : 4,
    "frenchword": "multiplication",
    "frenchdescription": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    "englishword": "multiplication",
    "englishdescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    "image": "image04"
  },
  {
    "objID" : 5,
    "frenchword": "soustraction",
    "frenchdescription": "Et harum quidem rerum facilis est et expedita distinctio.",
    "englishword": "substraction",
    "englishdescription": "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    "image": "image05"
  },
  {
    "objID" : 6,
    "frenchword": "superficie",
    "frenchdescription": "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
    "englishword": "area",
    "englishdescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "image": "image06"
  },
  {
    "objID" : 7,
    "frenchword": "volume",
    "frenchdescription": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    "englishword": "volume",
    "englishdescription": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    "image": "image07"
  },
  {
    "objID" : 8,
    "frenchword": "racine carrée",
    "frenchdescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    "englishword": "square root",
    "englishdescription": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "image": "image08"
  },
  {
    "objID" : 9,
    "frenchword": "longeur",
    "frenchdescription": "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    "englishword": "length",
    "englishdescription": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "image": "image09"
  },
  {
    "objID" : 10,
    "frenchword": "largeur",
    "frenchdescription": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    "englishword": "width",
    "englishdescription": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "image": "image10"
  },
  {
    "objID" : 11,
    "frenchword": "hauteur",
    "frenchdescription": "Et harum quidem rerum facilis est et expedita distinctio.",
    "englishword": "height",
    "englishdescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    "image": "image11"
  },
  {
    "objID" : 12,
    "frenchword": "multiples",
    "frenchdescription": "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    "englishword": "multiples",
    "englishdescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    "image": "image12"
  },
  {
    "objID" : 13,
    "frenchword": "facteur",
    "frenchdescription": "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    "englishword": "factor",
    "englishdescription": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    "image": "image13"
  }
]

class MathDictionary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: "",
      language: "french", //choice between "engligh" and "french"
      view: "list" //choice betwen "list" and "definition"
    };

    this.clickFrench = this.clickFrench.bind(this) //changes language to french
    this.clickEnglish = this.clickEnglish.bind(this) //changes language to english
    this.getWords = this.getWords.bind(this) //show list of words
    this.showDefinition = this.showDefinition.bind(this) //show definition of selected word
    this.showWords = this.showWords.bind(this) //show definition of selected word
    this.showImage = this.showImage.bind(this) //show image of selected word
    this.listView = this.listView.bind(this) //show language buttons and all of the words in the dictionary
    this.wordView = this.wordView.bind(this) //show word, image, and definitions
    this.clickWord = this.clickWord.bind(this) //called when clicked on word
    this.goHome = this.goHome.bind(this) //return to the list view
    this.nextWord = this.nextWord.bind(this) //return to the list view
    this.prevWord = this.prevWord.bind(this) //return to the list view
  }

  //sets the stat variable "language" to "french"
  clickFrench() {
    this.setState(state => ({
      language: "french"
    }))
  }

  //sets the stat variable "language" to "english"
  clickEnglish() {
    this.setState(state => ({
      language: "english"
    }))
  }

  //returns a list of words based on the language selected
  getWords() {
    let words
    if(this.state.language === "french"){
      words = data.map(word => word.frenchword.toLowerCase()  )
    } else if(this.state.language === "english") {
      words = data.map(word => word.englishword.toLowerCase())
    }
    return words.sort()
  }

  //displays the language buttons and list of words
  listView() {
    return (
      <div>
        <div className="buttonArea">
          <button className="languageButton" onClick={this.clickFrench}>français</button>
          <button className="languageButton" onClick={this.clickEnglish}>English</button>
        </div>

        <div>
          {this.getWords().map((word, index) => <input type="button" className="wordButton" key={index} value={word} onClick={this.clickWord}></input>)}
        </div>
      </div>
    )
  }

  //changes state variable "view" to "definition"
  clickWord(event) {
    const word = event.target.value
    let object
    if(this.state.language === "french") {
      for(let i = 0; i < data.length; i++) {
        if(data[i].frenchword.toLowerCase() === word) {
          object = data[i].objID
        }
      }
    } else if (this.state.language === "english") {
      for(let i = 0; i < data.length; i++) {
        if(data[i].englishword.toLowerCase() === word) {
          object = data[i].objID
        }
      }
    }

    this.setState(state => ({
      obj: object,
      view: "definition"
    }))
  }

  //shows both the English and French definitions of the selected word
  showDefinition() {
    let fDef, eDef
    for (let i = 0; i < data.length; i++) {
      if(data[i].objID === this.state.obj) {
        fDef = data[i].frenchdescription
        eDef = data[i].englishdescription
      }
    }
    return (
      <div id="definitions">
        <div className="fDefintion">{fDef}</div>
        <div className="eDefintion">{eDef}</div>
      </div>
    )
  }

  //shows the selected word (in French and English) on the definition page
  showWords() {
    let fWord, eWord
    for (let i = 0; i < data.length; i++) {
      if(data[i].objID === this.state.obj) {
        fWord = data[i].frenchword
        eWord = data[i].englishword
      }
    }
    return <h3>{fWord + "/" + eWord}</h3>
  }

  //show the image of the selected word on the definition page
  showImage() {
    let img
    for (let i = 0; i < data.length; i++) {
      if(data[i].objID === this.state.obj) {
        img = "/assets/" + data[i].image + ".png"
      }
    }
    return <img src={img}></img>
  }

  //show the next word in the definition view
  nextWord() {
    let nextWord = this.state.obj + 1
    if(nextWord > data.length) {
      nextWord = 1
    }
    this.setState(state => ({
      obj : nextWord
    }))
  }

  //show the previous word in the definition view
  prevWord() {
    let prevWord = this.state.obj - 1
    if(prevWord < 1) {
      prevWord = data.length
    }
    this.setState(state => ({
      obj : prevWord
    }))
  }

  //view when you click on a word displays the word, definitions, and image
  wordView() {
    return (
      <div>
        <div id="navArea">
          <button className="navButton" onClick={this.prevWord}> <img className="backButton" src="assets/backButtonBlue.png"></img> </button>
          <button className="navButton" onClick={this.goHome}> <img className="backButton" src="assets/homeButtonBlue.png"></img> </button>
          <button className="navButton" onClick={this.nextWord}> <img className="backButton" src="assets/forwardButtonBlue.png"></img> </button>
        </div>

        <div id="wordTitle">
          {this.showWords()}
        </div>

        <div id="wordImage">
          {this.showImage()}
        </div>

        <div>
          {this.showDefinition()}
        </div>
      </div>
    )
  }

  //sets the state variable "view" back to "list"
  goHome() {
    this.setState(state => ({
      view: "list"
    }))
  }

  render() {
    if (this.state.view === "list") {
        return this.listView() //show the list of words
    } else if (this.state.view === "definition") {
        return this.wordView() //show the definition of the word
    }
  }
}

ReactDOM.render(
  <MathDictionary />,
  document.getElementById('dictionaryArea')
);
