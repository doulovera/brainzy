import Profile from '../profile'
import { HeaderStyled } from './header.style'

export default function Header () {
  return (
    <HeaderStyled>
      <h1>🧠 Brainzy</h1>
      <Profile />
    </HeaderStyled>
  )
}
