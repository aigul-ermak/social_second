import React from 'react';
import s from './sidebar.module.css';

type SideBarPropsType = {
    id: number
    name: string
}

const SideBar = (props: SideBarPropsType) => {
    return (
        <div className={s.item}>
            <div className={s.img}>
                <img
                    src="https://static.scientificamerican.com/blogs/cache/file/638FC5CE-96EC-46DA-AAC64985822092FE_source.jpg?w=590&h=800&BDB89ACC-71A2-463A-928419A181070C77"/>
            </div>
            <div>
                {props.name}
            </div>
        </div>

    )
}

export default SideBar;
