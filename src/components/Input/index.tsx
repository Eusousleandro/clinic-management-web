import type { IInput } from '../../interfaces/IInput'
import './style.css'

export default function Input({
    type, 
    placeholder,
    value, 
    onChange }: IInput) {

    return (
        <div className="content-input">
            <input 
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}