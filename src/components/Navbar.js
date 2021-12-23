import { FaMicrophone } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>2021</h1>
      <div>
        <h1>Covid Stats</h1>
      </div>
      <div className="icons">
        <FaMicrophone />
        <FiSettings />
      </div>

    </div>
  )
}
