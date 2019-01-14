var React = require('react')
var Populist = require('./Populist')

class App extends React.Component {
    render() {
        return (
            <div className = 'container'>
                { /*Hello World!!!!!  */  }
                { /* <p>hello1111</p> */ }
                <Populist />
            </div>
        )
    }
}

module.exports = App;