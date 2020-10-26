import React from 'react';
import Webcam from 'react-webcam';
import Header from "../../components/header";

import imgMicro from '../../assets/images/icons/micro.svg';
import imgCam from '../../assets/images/icons/cam.svg';

import imgMicroac from '../../assets/images/icons/microactive.svg';
import imgCamac from '../../assets/images/icons/camactive.svg';

import './styles.css';

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };


class VideoChat extends React.Component {
    constructor(props) {
      super(props);
      this.state = { audio:true , isActiveCam: true , styleCamera:"webcam-page-content", styleCam: imgCam , styleMic: imgMicro};
      this.handleChangeMic = this.handleChangeMic.bind(this);
      this.handleChangeCam = this.handleChangeCam.bind(this);
    }   
    render() {
      return (
        <div>
            <Header to="/helping" className="logo-header-fixed" />
            <div className={this.state.styleCamera}>
                <Webcam
                    audio={this.state.audio}
                    height={240}
                    width={446}
                    videoConstraints={videoConstraints}
                />
            </div>
            <div className="footer-page">
                <div id="button-flex">
                <div className="flex-btt">
                    <button onClick={this.handleChangeCam} ><img src={this.state.styleCam} alt=""/></button>
                    <label>CAMERA</label>
                </div>
                <div className="flex-btt"> 
                    <button onClick={this.handleChangeMic} ><img src={this.state.styleMic} alt=""/></button>
                    <label>MICROFONE</label>
                </div>
                </div>
            </div>
        </div>
      );
    }
  
    handleChangeCam(e) {
        if(this.state.isActiveCam === false){
            this.setState(state => ({
                styleCamera:"webcam-page-content",
                styleCam: imgCam,
                isActiveCam: true
          }));
        }
        else{
            this.setState(state => ({
                styleCamera:"webcam-page-content active",
                styleCam: imgCamac,
                isActiveCam: false
          }));
        }
    }
  
    handleChangeMic(e) {
        if(this.state.audio === false){
            this.setState(state => ({
                audio: true,
                styleMic: imgMicroac

          }));
        }
        else{
            this.setState(state => ({
                audio: false,
                styleMic: imgMicro
          }));
        }
            
    }
}

export default VideoChat;