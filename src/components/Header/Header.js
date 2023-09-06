import React, {useContext} from 'react'
import {UserContext} from '../../providers/UserProvider';
import Button from '../Button/Button';

export default function Header() {
    const {message, setMessage} = useContext(UserContext);
    const labelName = "Click me";
    const onClick = () => {
        setMessage("Bye from context")
    }
  return (
    <div>
        {message}
        <Button onClick={onClick} label={labelName}/>
    </div>
  )
}
