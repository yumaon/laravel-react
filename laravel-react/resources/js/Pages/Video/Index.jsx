import { Link, router } from "@inertiajs/react";
import { route } from "ziggy-js";
import { Box, Button, VStack, Text, HStack, Table, Center } from "@chakra-ui/react";
import { useColorModeValue } from '../../Components/ui/color-mode';

const Videos = ({ videos }) => {
  const destroyBtn = (id) => {
    if (window.confirm('本当に削除しますか？')) {
      router.delete(route('videos.destroy', id));
    }
  }

  console.log(videos, "aa");

  const textColor = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const buttonBgColor = useColorModeValue("blue.500", "blue.300");
  const buttonHoverBgColor = useColorModeValue("blue.600", "blue.400");
  const buttonTextColor = useColorModeValue("white", "black");

  return (
    <Box w="100%" p={4}>
      <VStack spacing={4} align="stretch" maxW="100%">
        <Center>
          <Text textStyle={'xl'} margin={5}>Videos</Text>
        </Center>
        <Center>
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
        </Center>
        <Box w="100%" overflowX="auto">
          <Table.Root size="sm" stickyHeader minW="600px" variant="outline">
            <Table.Header>
              <Table.Row bg="bg.subtle">
                <Table.ColumnHeader>title</Table.ColumnHeader>
                <Table.ColumnHeader>text</Table.ColumnHeader>
                <Table.ColumnHeader>status</Table.ColumnHeader>
                <Table.ColumnHeader textAlign="end"></Table.ColumnHeader>
                <Table.ColumnHeader textAlign="end"></Table.ColumnHeader>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {videos.map((video) => (
                <Table.Row key={video.id}>
                  <Table.Cell>{video.title}</Table.Cell>
                  <Table.Cell>{video.text}</Table.Cell>
                  <Table.Cell>{video.statusName}</Table.Cell>
                  <Table.Cell textAlign="end">
                    <Button 
                      as={Link} 
                      href={`/videos/${video.id}`} 
                      bg={buttonBgColor} 
                      color={buttonTextColor} 
                      _hover={{ bg: buttonHoverBgColor }} 
                      size="sm"
                      w={20}
                    >
                      詳細
                    </Button>
                  </Table.Cell>
                  <Table.Cell textAlign="end">
                    <Button 
                      onClick={() => destroyBtn(video.id)} 
                      bg="red.500" 
                      color="white" 
                      _hover={{ bg: "red.600" }} 
                      size="sm"
                      w={20}
                    >
                      削除
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
      </VStack>
    </Box>
  )
};

export default Videos