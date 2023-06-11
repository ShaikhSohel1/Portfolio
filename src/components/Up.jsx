import { IconButton,  useColorModeValue } from "@chakra-ui/react"
import React from "react";
import { BsArrowUp } from "react-icons/bs"


const Up = () => {
       // show when we pass banner section
    const [show, setShow] = React.useState(false);
    const handleScroll = () => {
        if (window.scrollY > 700) {
            setShow(true);
        } else {
            setShow(false);
        }
    };
    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

        
    const bg = useColorModeValue("#333333", "white");
  const color = useColorModeValue("white", "black");
  const color1 = useColorModeValue("black", "white");

  return (
    <IconButton
    aria-label="discord"
    variant="ghost"
    size="lg"
    isRound={true}
    bg={bg}
    color={color}
    icon={<BsArrowUp size={'28px'} />}
    _hover={{color:color1 }}
    as='a'
    href="#banner"
    pos={"fixed"}
    bottom={"10rem"}
    right={"2rem"}
    zIndex={999}
    visibility={show ? "visible" : "hidden"}
 
   

    

    
  />
  )
}

export default Up