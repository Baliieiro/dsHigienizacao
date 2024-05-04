import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import navList from "../../constants/navList";
import Sidebar from "../Sidebar";
import { Container, ContainerImage, ContainerLinks, NavLinks } from "./styles";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSiderbar = () => setSidebar(!sidebar);

  return (
    <Container $active={sidebar}>
      <ContainerImage>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAclBMVEXx8fMjHyD////19fckHiD4+PkTERKNi43j4uRxb3AOCAkHAAAAAACGhYYiGx38/P0zMzPZ2dkcGBrJycp5eXlKSUm+vb5/f38YExWoqKmampqysrLq6uuUlJTDw8Ogn6ArKSlBQEBmZWZXVlc7OTsMAAly/0igAAADQ0lEQVR4nO2bDXOiMBBAA8tCiKFpoCAKIn70///FC0oVbGeuSfDGm9lna4Xq8tzETYLKGEEQBEEQBEEQBEEQBEEQBEEQBEH8HgUKlSWoEJ6oBKzYf6TWfOwL9jQt4OteroQ1K9mv+ZOsUPfyLXAil73GZzhBWwo3JUMkyvYZuYJs5exkEMkTnJg+5D5S+UEv7wSVV6KCQFbLtx/upekaPlIbtbiU2uR+qZLbRV9/AAgATCeidjWK8nitgYG6NqF3QyLwoiu0CYSFc1Go+w6RmUCaA3o7ARbpu5QyOHbmifKDW67qUiuojoEJ1H8U3s2Im17kbyb9IkiMVdEHUWTf3eMCIQvEUFNMoI1npmAno3FoiWSKTDXSQUpsFabytil3XlZYxPm9EKwaE+xc20udOTaT3pgLrxYMT0OsL4ncjF+4FdZSMlO8nHZGcQrdnUBfYtwk8gqh69+spTpVPQxR2r0Bx6TfJOQWQB/spThu5WyPqNzbDzfzurRKTNEqc2upFrMHKY8XIDTxoxRzklK7B6nGQ6qYS8lEgT47NJ9q5imPC5+icJ51UJkgNlKu7PiUTahngfKzj1O4lw9SUK0zW5IO23IqJfceJcFwFHMpMxhaA0NPnNSpz6OXkhmCj3IqpcAWHH7UNFPi6Lvegja7P0ex5o7ou1R98l8DAn+f9FD7lejIPVFx6j8tnkkZxjnDmx2T2han/tNi0HOpETMqR9Hk6vuN+9a8ri0vFY385PlLXk4qChbqUz83H0mRFEmR1OtI8YWlxAJS7DoVim7F3IdBTO4WOE/1uBLxJfdYiN4w7ed+qvq7ksxggZNmZlFcyriuY39qc0n903QB2+x0KNPEkyHIqYKlzhGbqX/bIg7vR7mj1CXIQkpXrxeKQhAEQRAEQRAEQRAEQRAEQRAEQRAEYYn1Bzf/ASx8Qf5PKWUuwx8VXm6Mv9d9t/soddtUk/2XR00iPV47Sxm64hJm+IDCxXGICO01NNur66G/jj/qcRYCDxkP247pqmvNDix4qAvVdu1fnH4hxaDqcPhWbVXxLSJDxZQ5QKOAKcVYhmgs2PCP4ftMOD7oVIT7DNZbTLpE612Hadc0SbNpml21Y3+R+gP8ik+36kV9WAAAAABJRU5ErkJggg=="
          alt="Logo quando estiver ronto"
        />
      </ContainerImage>

      <NavLinks>
        {navList.map((item) => (
          <ContainerLinks key={item.id}>
            <a href={item.links}>{item.label}</a>
          </ContainerLinks>
        ))}
      </NavLinks>
      <MenuIcon onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  );
}
