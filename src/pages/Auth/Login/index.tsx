import { useState } from 'react'
import Input  from '../../../components/Input'
import Button  from '../../../components/Button'
import './style.css'

export default function Login() {
    const [email, setEmail] = useState<String || null>(null)
    const [password, setPassword] = useState<String || null>(null)

    function handlerSubmit() {

    }

    function handlerButtonLogout() {

    }

    return (
        <form action="" className="content-login" onSubmit="">
            <div className="title-login">
                <h1>Sejam bem-vindos ao SGC</h1>
            </div>

            <div className="content-input">
                <Input 
                    type='email'
                    placeholder='Digite o seu email'
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    value={email}
                />

                <Input
                    type="password"
                    placeholder="Digite a sua senha"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    value={password}
                />
            </div>

            <div className="buttons">
                <div className="btn-login">
                    <Button name="Login" onClick={handlerSubmit}/>
                </div>

                <div className="logout">
                    <Button name="Sair" onClick={handlerButtonLogout}/>
                </div>
            </div>
        </form>
    )
}