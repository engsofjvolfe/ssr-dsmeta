import logo from '../../assets/img/logo.svg'
import './styles.css'
function Header() {
  return (
    <header>
      <div className="txt-logo-container">
        <img src={logo} alt="" />
        <h1>DSmeta</h1>
        <p>
          Desenvolvido por
          <a href="https://www.instagram.com/jeanco_volfe/">@jeanco_volfe</a>
        </p>
      </div>
    </header>
  )
}

export default Header
