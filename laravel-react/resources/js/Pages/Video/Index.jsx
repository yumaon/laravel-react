import { Link, router } from "@inertiajs/react";
import { route } from "ziggy-js";
import { Box, Button, VStack, Text, HStack } from "@chakra-ui/react";
import { useColorModeValue } from '../../Components/ui/color-mode';

const Videos = ({ videos }) => {
  const destroyBtn = (id) => {
    if (window.confirm('本当に削除しますか？')) {
      router.delete(route('videos.destroy', id));
    }
  }

  const textColor = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const buttonBgColor = useColorModeValue("blue.500", "blue.300");
  const buttonHoverBgColor = useColorModeValue("blue.600", "blue.400");
  const buttonTextColor = useColorModeValue("white", "black");

  return (
    <VStack spacing={4} align="stretch">
      {videos.map((video) => (
        <Box key={video.id} p={4} bg={bgColor} borderRadius="md" shadow="md">
          <HStack justify="space-between">
            <Text fontSize="lg" fontWeight="bold" color={textColor}>{video.title}</Text>
            <HStack spacing={2}>
              <Button 
                as={Link} 
                href={`/videos/${video.id}`} 
                bg={buttonBgColor} 
                color={buttonTextColor} 
                _hover={{ bg: buttonHoverBgColor }} 
                size="sm"
              >
                詳細
              </Button>
              <Button 
                onClick={() => destroyBtn(video.id)} 
                bg="red.500" 
                color="white" 
                _hover={{ bg: "red.600" }} 
                size="sm"
              >
                削除
              </Button>
            </HStack>
          </HStack>
        </Box>
      ))}

      <Button 
        as={Link} 
        href={`/videos/create`} 
        bg="teal.500" 
        color="white" 
        _hover={{ bg: "teal.600" }} 
        size="md" 
        alignSelf="flex-end"
      >
        新規作成
      </Button>
    </VStack>
  )
};

export default Videos