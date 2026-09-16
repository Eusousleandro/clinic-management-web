import { IInputLogin } from '../interfaces/IInputLogin'
import './style.css'

export default function Input({
    type, 
    placeholder,
    value, 
    onChange }: IInputLogin) {

    return (
        <form action="" className="content-form">
            <div className="content-input">
                <input 
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </form>
    )
}