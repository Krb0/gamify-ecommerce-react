import { Flex } from "@chakra-ui/react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { SetStateAction } from "react";

const Arrow = ({
  direction,
  setSlideIndex,
}: {
  direction: string;
  setSlideIndex: React.Dispatch<SetStateAction<number>>;
}) => {
  const handleClick = (direction: string) => {
    if (direction === "left") {
      setSlideIndex((slideIndex: number) =>
        slideIndex > 0 ? slideIndex - 1 : 2
      );
    } else {
      setSlideIndex((slideIndex: number) =>
        slideIndex < 2 ? slideIndex + 1 : 0
      );
    }
  };

  return (
    <Flex
      width="50px"
      height="50px"
      bgColor="whitesmoke"
      borderRadius="50%"
      alignItems="center"
      justifyContent="center"
      position="absolute"
      top="0"
      bottom="0"
      margin="auto"
      left={direction === "right" ? "left" : "10px"}
      right={direction === "left" ? "right" : "10px"}
      cursor="pointer"
      opacity="0.8"
      _hover={{ opacity: "0.7" }}
      onClick={() => handleClick(direction)}
      zIndex="2"
    >
      {direction === "left" ? <ArrowLeftOutlined /> : <ArrowRightOutlined />}
    </Flex>
  );
};
export default Arrow;
