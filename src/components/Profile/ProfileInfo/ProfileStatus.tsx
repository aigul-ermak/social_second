import React from 'react';

type ProfileStatisPropsType = {
    status: any
}

class ProfileStatus extends React.Component<ProfileStatisPropsType> {
    state={
        editMode: false
    }
    activateEditMode () {
        this.setState ({
            editMode: true
        })
    }
    deactivateMode () {
        this.setState ({
            editMode: false
        })
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateMode.bind(this)} value={this.props.status}/>
                    </div>
                }

            </div>
        )
    }
}

export default ProfileStatus;
