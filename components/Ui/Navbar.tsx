import { Image } from '@nextui-org/react'
import { breakpoints } from '../../styles/theme'

export const Navbar = () => {
  return (
    <div>
      <ul className="d-flex-center">
        <Image
          width={300}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
        />
      </ul>

      <style jsx>{`
        @media (min-width: ${breakpoints.mobile}) {
          div {
            border-top: 1px solid #eaeaea;
            width: 100vw;
          }
        }
      `}</style>
    </div>
  )
}
