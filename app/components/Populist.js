const React = require('react'),
      
        $  = require('jquery'),
      PropTypes = require('prop-types'),
      SelectedLanguages = require('./SelectedLanguage');
//var counter = 0;

function SelectLanguage(props) {
    var languages = ['All', 'Java', 'Javascript', 'Python', 'Ruby','React'];
    return (
<ul className='pop-list'>
    { 
        languages.map(function(lang) {
            return(
                <li 
                style = { lang === props.selectedLang ? {color: 'red'}: null}
                onClick={props.onSelect.bind(null, lang)}
                key={lang} >
                {lang}
                </li>
            )
        })
        /*Below is for fun
        languages.map(function (lang){
        return(
        <li key={lang} onClick={function(){console.log('heheheh')}}><a href={'https://www.google.com/search?q=' + lang} target='_blank'>{lang}</a></li>
        )
    }) */
    }
</ul>
    )
}

SelectLanguage.propTypes = {
    selectedLang: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
} 


class Populist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedLang : 'All',
            eventCount: 0
        }
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(lang) {
        this.setState(function(state) {
            console.log('setting state');
            return {
                selectedLang: lang,
                eventCount: state.eventCount + 1,
                selectedLang2: null
            }
        }, function(){
            console.log('currentState ---> ', this.state);
        })
    }

    componentDidMount() {
         //jQuery magixxx
        $(document).keypress((e) => console.log(e.keyCode,' key has been pressed'));
    }

    render() {
        return (
            <div>
                <h3 id='populist-intro'>POPULIST V i s i o N s</h3>
                <p className='selected-lang'>Selected Language: {this.state.selectedLang}</p>
                <br></br>
                <p className='event-counter'>Total Events Counter: {this.state.eventCount}</p>
              <SelectLanguage 
                selectedLang = {this.state.selectedLang}
                onSelect = {this.updateLanguage}
              />
            </div>
        )
    }
    
}

module.exports = Populist;