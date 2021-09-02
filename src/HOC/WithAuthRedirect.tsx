import {Redirect} from 'react-router-dom';
import React from 'react';
import {AppStateType} from '../redux/redux-store';
import {connect} from 'react-redux';

// type RedirectComponentPropsType = {
//     isAuth: boolean
// }

type mapSateToPropsForRedirectPropsType = {
    isAuth: boolean
}

let mapToStatePropsForRedirect = (state: AppStateType): mapSateToPropsForRedirectPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
export const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any> {
        render () {
            if(!this.props.isAuth) return <Redirect to={"/login"}/>
            return <Component {...this.props}/>
        }
    }
    let connectedAuthRedirectComponent = connect(mapToStatePropsForRedirect)(RedirectComponent)

    return connectedAuthRedirectComponent
}
