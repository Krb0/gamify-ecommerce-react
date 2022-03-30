import { Flex, Stack, chakra, Image } from "@chakra-ui/react";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";

const Footer = () => {
  return (
    <Flex flexDirection={{ base: "column", md: "row" }} maxWidth="100vw">
      <Stack flex="1" p="20px">
        <chakra.h1 fontSize="1.5rem" fontWeight="bold">
          Jade
        </chakra.h1>
        <chakra.p m="20px 0px" fontSize="1.05rem">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </chakra.p>
        <Flex>
          <SocialIcon color="#3B5999">
            <Facebook color="inherit" />
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <Instagram color="inherit" />
          </SocialIcon>
          <SocialIcon color="#55ACEE">
            <Twitter color="inherit" />
          </SocialIcon>
          <SocialIcon color="#E60023">
            <Pinterest color="inherit" />
          </SocialIcon>
        </Flex>
      </Stack>
      <Flex flex="1" p="20px" display={{ base: "block" }}>
        <chakra.h3 fontSize="1.5rem" fontWeight="bold" color="black">
          Useful Links
        </chakra.h3>
        <Stack
          margin="0"
          padding="0"
          h="200px"
          listStyleType="none"
          flexWrap="wrap"
        >
          {[
            "Home",
            "Cart",
            "Man Fashion",
            "Woman Fashion",
            "Accessories",
            "My Account",
            "Order Tracking",
            "Wishlist",
            "Terms",
          ].map((word) => (
            <ListItem word={word} key={word} />
          ))}
        </Stack>
      </Flex>
      <Contact />
    </Flex>
  );
};

export default Footer;

const ListItem = ({ word }: { word: string }) => {
  return <chakra.li>{word}</chakra.li>;
};

const SocialIcon = ({
  color,
  children,
}: {
  children: React.ReactNode;
  color: string;
}) => {
  return (
    <Flex
      width="40px"
      height="40px"
      borderRadius="50%"
      color={color}
      alignItems="center"
      justifyContent="center"
      mr="20px"
    >
      {children}
    </Flex>
  );
};

const Contact = () => {
  return (
    <Stack flex="1" padding="20px">
      <chakra.h3 mb="30px" fontSize="1.5rem" fontWeight="bold">
        Contact
      </chakra.h3>
      <Flex mb="20px" display="flex" alignItems="center">
        <Room style={{ marginRight: "10px" }} /> Fake 123, Fake Street
      </Flex>
      <Flex mb="20px" display="flex" alignItems="center">
        <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
      </Flex>
      <Flex mb="20px" display="flex" alignItems="center">
        <MailOutline style={{ marginRight: "10px" }} /> contact@lama.dev
      </Flex>
      <Image width="50%" src="https://i.ibb.co/Qfvn4z6/payment.png" />
    </Stack>
  );
};
