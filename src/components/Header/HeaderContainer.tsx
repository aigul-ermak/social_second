import React from 'react';
import {AppStateType} from '../../redux/redux-store';
import Header from './Header';
import {setAuthUserData} from '../../redux/authReducer';
import {connect} from 'react-redux';
import axios from 'axios';

type HeaderContainerPropsType = {
    setAuthUserData: (userId: string | null, email: string | null, login: string | null) => void
    login: string | null
    isAuth: boolean
}

type mapStateToPropsType = {
    login: string | null
    isAuth: boolean
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {userId, email, login} = response.data.data
                    this.props.setAuthUserData(userId, email, login)
                }

            });
    }

    render() {
        return <Header {...this.props} login={this.props.login}/>
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
