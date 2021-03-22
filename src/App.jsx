import React from 'react';
import './App.css';
import Welcome from './components/textField/index';
import styles from './components/textField/style';
import Slider from './components/slider/index';
import global from './lib/util/math';
import constants from './configs/constants';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      valid : "",
      invalid : "",
      currentImage : 0,
      images : [
        `${constants.PUBLIC_IMAGE_FOLDER}/cloud.jpg`,
        `${constants.PUBLIC_IMAGE_FOLDER}/js.jpg`,
        `${constants.PUBLIC_IMAGE_FOLDER}/dns-server.png`,
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.switchImage = this.switchImage.bind(this);
  }

  switchImage(){
    let currentIndex = global.getRandomNumber(this.state.images.length);
    let updateCurrentIndex = global.getNextRoundRobin(this.state.images.length, currentIndex);
    this.setState({ currentImage : updateCurrentIndex});
  }

  componentDidMount(){
    setInterval(this.switchImage, 2000);
  }

  handleChange(event){
    this.setState({ [event.target.name] : event.target.value});
    this.isValid(this.state);
  }

  isValid(arg){
    arg.valid !== '' ? this.setState({ validClass : "success"}) : this.setState({ validClass : "error"});
    Number.isInteger(arg.invalid)>=0 && !isNaN(parseInt(arg.invalid)) ? this.setState({inValidClass : "success"}) : this.setState({inValidClass : "error"});
  }

  render(){
    return(
    <>
      <Slider images={this.state.images} currentImage={this.state.currentImage}></Slider>
      <Welcome validClass={this.state.validClass} valid={this.state.valid} invalid={this.state.invalid} inValidClass={this.state.inValidClass} onChange={this.handleChange} stylesheet={styles} ></Welcome>
    </>
    );
  }
}
export default App;