import { useContext } from 'react'
import '../Assets/css/toggle.css'
import { ThemeContext } from '../Contexts/ThemeContext'
export default function Toggle() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <label className="switch">
      <input type="checkbox" checked={theme === 'dark' ? true : false} onChange={changeTheme} />
      <span className="slider round"></span>
    </label>)
}