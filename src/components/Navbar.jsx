import './App.css'

function Navbar() {
    const total = 25000;
    const token = false;

  return (
    <>
        <p>Pizzería Mamma Mía!</p>
      <ul>
        <li>
        🍕Home 
        </li>
        <li>
        🔓Profile 
        </li>
        <li>
        🔒Logout
        </li>
        <li>
        🔐Login 
        </li>
        <li>
        🔐Register 
        </li>
        <li>
        🛒Total: ${total} 
        </li>
      </ul>
    </>
  )
}

export default Navbar