const React = require('react'),
        $  = require('jquery');

//var counter = 0;

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
                eventCount: state.eventCount + 1
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
        var languages = ['All', 'Java', 'Javascript', 'Python', 'Ruby','React'];
        return (
            <div>
                <h3 id='populist-intro'>POPULIST V i s i o N s</h3>

                <p className='selected-lang'>Selected Language: {this.state.selectedLang}</p>

                <br></br>
                <p className='event-counter'>Total Events Counter: {this.state.eventCount}</p>
            <ul className='pop-list'>
                { 
                    languages.map(function(lang) {
                        return(
                            <li 
                            style = { lang === this.state.selectedLang ? {color: 'red'}: null}
                            onClick={this.updateLanguage.bind(null, lang)}
                            key={lang} >
                            {lang}
                            </li>
                        )
                    },this)
                    /*Below is for fun
                    languages.map(function (lang){
                    return(
                    <li key={lang} onClick={function(){console.log('heheheh')}}><a href={'https://www.google.com/search?q=' + lang} target='_blank'>{lang}</a></li>
                    )
                }) */
                }
            </ul>
            </div>
        )
    }
    
}

module.exports = Populist;