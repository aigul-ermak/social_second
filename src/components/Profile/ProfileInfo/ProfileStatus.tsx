import React, {ChangeEvent} from 'react';
import {AppStateType} from '../../../redux/redux-store';

type ProfileStatisPropsType = {
    status: string
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatisPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateMode() {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: any, prevState: AppStateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || '------'}</span>
                </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange}
                               autoFocus={true}
                               onBlur={this.deactivateMode.bind(this)}
                               value={this.state.status}/>
                    </div>
                }

            </div>
        )
    }
}

export default ProfileStatus;
