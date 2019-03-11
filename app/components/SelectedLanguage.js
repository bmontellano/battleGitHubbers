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