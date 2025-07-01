import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Text, Box, Button, HStack } from '@chakra-ui/react';
export default function Dashboard() {
    return (
        <div>
            <Head title="Dashboard" />
            
            <Box p={6} bg="blue.50" borderRadius="md" m={4}>
                <Text fontSize="xl" fontWeight="bold" color="blue.600">
                    Welcome to Chakra UI!
                </Text>
                <Text mt={2} mb={4} color="gray.800">
                    これは Chakra UI のテストです。
                </Text>
                
                {/* ボタンを HStack で配置 */}
                <HStack spacing={4}>
                    <Button 
                        colorScheme="blue" 
                        size="md"
                        bg="blue.500"
                        color="white"
                        _hover={{ bg: "blue.600" }}
                        onClick={() => alert('Primary clicked!')}
                    >
                        Primary Button
                    </Button>
                    <Button 
                        variant="outline" 
                        colorScheme="blue"
                        size="md"
                        borderColor="blue.500"
                        color="blue.500"
                        bg="white"
                        _hover={{ 
                            bg: "blue.50",
                            borderColor: "blue.600",
                            color: "blue.600"
                        }}
                        onClick={() => alert('Outline clicked!')}
                    >
                        Outline Button
                    </Button>
                </HStack>
            </Box>

            <Box p={6} bg="white" color="black" borderRadius="md" m={4} border="1px solid gray">
                <Text fontSize="xl" fontWeight="bold" color="blue.600">
                    Welcome to Chakra UI!
                </Text>
                <Text mt={2} mb={4} color="gray.700">
                    これは Chakra UI のテストです。
                </Text>
                {/* ... */}
            </Box>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
