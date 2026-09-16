import './style.css'

export default function NavBar() {
    return(
        <div className="content-navbar">
            <div className="navbar">
                <div className="logo">
                    <h1>SGC</h1>
                </div>
                <div className="content-user">
                    <div className="icone-user">
                        <input type="file" name="user" id="" />
                    </div>
                    <div className="name-user">
                        <h2>Leandro</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}