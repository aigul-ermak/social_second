import preloader from '../../../assets/images/preloader.gif';
import React from 'react';

type PreloaderPropsType = {

}
const Preloader = (props: PreloaderPropsType) => {
    return (
        <div>
            <img src={preloader}/>
        </div>
    )
}

export default Preloader;
