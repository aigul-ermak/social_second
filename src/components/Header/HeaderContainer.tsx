import React from 'react';
import {AppStateType} from '../../redux/redux-store';
import Header from './Header';
import {getAuthUserData} from '../../redux/authReducer';
import {connect} from 'react-redux';


type HeaderContainerPropsType = {
    // setAuthUserData: (userId: string | null, email: string | null, login: string | null) => void
    login: string | null
    isAuth: boolean
    getAuthUserData: () => void
}

type mapStateToPropsType = {
    login: string | null
    isAuth: boolean
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
       this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props} login={this.props.login} isAuth={this.props.isAuth}/>
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);
