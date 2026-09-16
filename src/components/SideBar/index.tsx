
import './style.css'

export default function SideBar() {
    return (
        <div className="content-sidebar">
            <div className="siderbar">
                <ul className="list-sidebar">
                    <li><a href="" className="items-sidebar">Dashboard</a></li>
                    <li><a href="" className="items-sidebar">Pacientes</a></li>
                    <li><a href="" className="items-sidebar">Médicos</a></li>
                    <li><a href="" className="items-sidebar">Agendamentos</a></li>
                    <li><a href="" className="items-sidebar">Serviços</a></li>
                    <li><a href="" className="items-sidebar">Usuários</a></li>
                </ul>
                <ul className="list-config-sidebar">
                    <li><a href="" className="items-config-sidebar">Configurações</a></li>
                    <li><a href="" className="items-config-sidebar">Sair</a></li>
                </ul>
            </div>
        </div>
    )
}