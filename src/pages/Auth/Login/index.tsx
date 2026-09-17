import { React } from 'react'
import { Input } from '../components/Input'
import './style.css'

export default function Login() {
    const [email, setEmail] = useState<>("")
    const [password, setPassword] = useState<>("")

    function handlerSubmit() {

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
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />

                <Input
                    type="password"
                    placeholder="Digite a sua senha"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
            </div>

            <div className="buttons">
                <div className="btn-login">
                    <Button name="Login" onClick={handlerSubmit}/>
                </div>
            </div>
        </form>
    )
}