import React from 'react';
import classes from './ProfileInfo.module.css';
import panoramaLogo from '../../../img/panorama.jpeg';
import Preloader from '../../common/preloader/Preloader';



class  ProfileStatus extends React.Component {

        state = {
            edinMode: false,
            status: this.props.status
        }

        activateEditMode = () => {
            this.setState ({
                edinMode: true
            })
        }
        deactivateEditMode = () => {
            this.setState ({
                edinMode: false
            })
            this.props.updateStatusThunkCreator(this.state.status)
        }

        onStatusChange= (e) => {
            this.setState ({
                status: e.currentTarget.value
            })
        }

        componentDidUpdate(prevProps, prevState) {
            if (prevProps.status !== this.props.status){
                this.setState ({
                    status: this.props.status
                })
            }
        }

        render(){
            return (
                <div>
                    {!this.state.edinMode && 
                        <div>
                            <span onDoubleClick={this.activateEditMode} >{this.props.status || '----'}</span>
                        </div>
                    }
                    {this.state.edinMode && 
                        <div>
                            <input  onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                        </div>
                    }
                </div>
            );
        }
        }

export default ProfileStatus;
