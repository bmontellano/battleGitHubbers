import PropTypes from 'prop-types'

function SelectLanguage(props) {
    var languages = ['Ninjas', 'Are', 'Real'];
    return (
<ul className='pop-list'>
    { 
        languages.map(function(lang) {
            return(
                <li 
                style = { lang === props.selectedLang2 ? {color: 'green'}: null}
                onClick={props.onSelect2.bind(null, lang)}
                key={lang} >
                {lang}
                </li>
            )
        })
    }
</ul>
    )
}

SelectLanguage.propTypes = {
    selectedLang2: PropTypes.string.isRequired,
    onSelect2: PropTypes.func.isRequired
} 
