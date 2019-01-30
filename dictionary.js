'use strict';

const apiUrl = 'https://api.myjson.com/bins/1bfvwm'

class MathDictionary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [], //words that make up the dictionary
      search: "", //default search term
      obj: "", //object ID from the JSON objects
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
    this.showSearch = this.showSearch.bind(this) //search box
    this.updateSearch = this.updateSearch.bind(this) //filter words via search
    this.showLanguageButtons = this.showLanguageButtons.bind(this) //display the "French" and "English" language buttons
    this.showListOfWords = this.showListOfWords.bind(this) //display the list of words
    this.showTitle = this.showTitle.bind(this) //show <h1> title on page
    this.showBackButton = this.showBackButton.bind(this) //show back button in the definition view
    this.showHomeButton = this.showHomeButton.bind(this) //show home button in the definition view
    this.showNextButton = this.showNextButton.bind(this) //show next button in the definition view
    this.showButtons = this.showButtons.bind(this) //show home button in the definition view
  }

  componentWillMount() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(result => this.setState({
        words: result
      }))
      .catch(error => error);
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

  //filter list of words via search
  updateSearch(event) {
    this.setState({
      search: event.target.value
    })
  }

  //display the search box on the list view page
  showSearch() {
    let searchWord
    if(this.state.language === 'english') {
      searchWord = "Search..."
    } else if (this.state.language === 'french') {
      searchWord = "Chercher..."
    }
    return <div>
            <input id="searchBox" placeholder={searchWord} value={this.state.search}  onChange={this.updateSearch}/>
          </div>
  }

  //returns a list of words based on the language selected
  getWords() {
    let words
    if(this.state.language === "french") {
      words = this.state.words.map(word => word.frenchword.toLowerCase())
    } else if(this.state.language === "english") {
      words = this.state.words.map(word => word.englishword.toLowerCase())
    }
    return words.sort()
  }

  showLanguageButtons() {
    return <div className="buttonArea">
            <button className="languageButton" onClick={this.clickFrench}>français</button>
            <button className="languageButton" onClick={this.clickEnglish}>English</button>
          </div>
  }

  showListOfWords(wordsToShow) {
    return <div>
            {wordsToShow.map((word, index) => <input type="button" className="wordButton" key={index} value={word} onClick={this.clickWord}></input>)}
          </div>
  }

  showTitle() {
    if(this.state.language === 'english') {
      return <h1 className="titleArea"> Math Dictionary </h1>
    } else if (this.state.language === 'french') {
      return <h1 className="titleArea"> Dictionnaire de maths </h1>
    }
  }

  //displays the language buttons and list of words
  listView() {
    //filter the list of words via the search box
    let wordsToShow = this.getWords().filter(
      (word) => {
        return word.indexOf(this.state.search) !== -1
      }
    )
    return <div>
            {this.showTitle()}
            {this.showLanguageButtons()}
            {this.showSearch()}
            {this.showListOfWords(wordsToShow)}
          </div>
  }

  //changes state variable "view" to "definition"
  clickWord(event) {
    const word = event.target.value
    const data = this.state.words
    let object
    if(this.state.language === "french") {
      for(let i = 0; i < data.length; i++) {
        if(this.state.words[i].frenchword.toLowerCase() === word) {
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
      search: "",
      obj: object,
      view: "definition"
    }))
  }

  //shows both the English and French definitions of the selected word
  showDefinition() {
    let fDef, eDef
    const data = this.state.words
    for (let i = 0; i < data.length; i++) {
      if(data[i].objID === this.state.obj) {
        fDef = data[i].frenchdescription
        eDef = data[i].englishdescription
      }
    }
    return <div id="definitions">
            <div className="fDefintion">{fDef}</div>
            <div className="eDefintion">{eDef}</div>
          </div>
  }

  //shows the selected word (in French and English) on the definition page
  showWords() {
    let fWord, eWord
    const data = this.state.words
    const lang = this.state.language
    for (let i = 0; i < data.length; i++) {
      if(data[i].objID === this.state.obj) {
        fWord = data[i].frenchword
        eWord = data[i].englishword
      }
    }
    if(lang === 'french') {
      return <h3 id="wordTitle">{fWord + "/" + eWord}</h3>
    } else if (lang === 'english') {
        return <h3 id="wordTitle">{eWord + "/" + fWord}</h3>
    }
  }

  //show the image of the selected word on the definition page
  showImage() {
    let img
    const data = this.state.words
    for (let i = 0; i < data.length; i++) {
      if(data[i].objID === this.state.obj) {
        img = "/assets/" + data[i].image + ".png"
      }
    }
    return <img id="wordImage" src={img}></img>
  }

  //show the next word in the definition view
  nextWord() {
    const data = this.state.words
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
    const data = this.state.words
    let prevWord = this.state.obj - 1
    if(prevWord < 1) {
      prevWord = data.length
    }
    this.setState(state => ({
      obj : prevWord
    }))
  }

  //show the previous word button in the definition view
  showBackButton() {
    return <button className="navButton" onClick={this.prevWord}> <img className="backButton" src="assets/backButtonBlue.png"></img> </button>
  }

  //show the home button in the definition view
  showHomeButton() {
    return <button className="navButton" onClick={this.goHome}> <img className="backButton" src="assets/homeButtonBlue.png"></img> </button>
  }

  //show the next word button in the definition view
  showNextButton() {
    return <button className="navButton" onClick={this.nextWord}> <img className="backButton" src="assets/forwardButtonBlue.png"></img> </button>
  }

  //show all the buttons in the definition view
  showButtons() {
    return <div id="navArea">
      {this.showBackButton()}
      {this.showHomeButton()}
      {this.showNextButton()}
    </div>
  }

  //view when you click on a word displays the word, definitions, and image
  wordView() {
    return <div>
            {this.showTitle()}
            {this.showButtons()}
            {this.showWords()}
            {this.showImage()}
            {this.showDefinition()}
          </div>
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
