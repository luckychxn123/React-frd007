import Liststyles from '../css/toDoList.module.css'

import { useSelector } from 'react-redux';
interface Props {
    item: string
}
export function SliceLogin(props: Props) {

    const itemsProfile = useSelector((state: any) => state['userslicex'])
    console.log('updated profile')
    return (
        <div>
            <div>firstname: {itemsProfile.firstname}</div>
            <div>lastname: {itemsProfile.lastname}</div>
            <div>age: {itemsProfile.age}</div>
            <img src={itemsProfile.image} width="180px" height="180px" />
            <div className={Liststyles.newline}></div>
        </div>
    )
}