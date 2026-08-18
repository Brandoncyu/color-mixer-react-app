import React, { Component } from 'react'
import ColorList from './components/ColorList'
import ColorForm from './components/ColorForm'
import ColorMixer from './components/ColorMixer'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toggleColor } from './actions/colors'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const mapStateToProps = ({colors}) => ({colors})
const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleColor
}, dispatch)

class App extends Component {
  selectColor = (index) => {
    this.props.toggleColor(index)
  }

  addColor = ({value, name}) => {
    const newColor = { value, name, selected: false }
    this.setState({
      colors: [
        ...this.state.colors, newColor
      ]
    })
  }

  render() {
    return (
      <main>
        <div className="jumbotron jumbotron-fluid bg-light text-dark border-bottom">
          <div className="container">
            <h1 className="display-4">Color Mixer React App</h1>
            <p className="lead">Install a JSX syntax highlighter package in your text editor to get started!</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <h2 className="h4 text-center mb-4">Colors</h2>
              <ColorList colors={ this.props.colors } selectColor={ this.selectColor } />
            </div>
            <div className="col">
              <h2 className="h4 text-center mb-4">Mix Result</h2>
              <ColorMixer colors={ this.props.colors } />
            </div>
            <div className="col-3">
              <h2 className="h4 text-center mb-4">Add a Color</h2>
              <ColorForm addColor={ this.addColor } />
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
