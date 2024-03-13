import React, { useState, useEffect } from "react";
import { Box, Flex, Heading, Table, Thead, Tbody, Tr, Th, Td, Input, Select, Button, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, useDisclosure, Avatar, Switch, Progress, Alert, AlertIcon } from "@chakra-ui/react";
import { FaBars, FaSync, FaCog, FaUser } from "react-icons/fa";

const Index = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [timeFrame, setTimeFrame] = useState("daily");
  const [category, setCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [syncStatus, setSyncStatus] = useState("idle");
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    // Fetch leaderboard data from the mocked backend
    const fetchLeaderboardData = async () => {
      // Replace with actual API call to the mocked backend
      const response = await fetch(`/api/leaderboard?timeFrame=${timeFrame}&category=${category}`);
      const data = await response.json();
      setLeaderboardData(data);
    };

    fetchLeaderboardData();
  }, [timeFrame, category]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTimeFrameChange = (event) => {
    setTimeFrame(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSync = async () => {
    setSyncStatus("syncing");
    // Perform data sync with the user's self-hosted ActivityWatch instance
    // Replace with actual API call to trigger data sync
    await fetch("/api/sync", { method: "POST" });
    setSyncStatus("completed");
  };

  const filteredData = leaderboardData.filter((entry) => entry.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Box>
      <Flex align="center" justify="space-between" p={4}>
        <Heading as="h1" size="xl">
          ActivityWatch Leaderboard
        </Heading>
        <Button leftIcon={<FaBars />} onClick={onOpen}>
          Menu
        </Button>
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Button leftIcon={<FaUser />} variant="ghost" mb={4}>
              Profile
            </Button>
            <Button leftIcon={<FaCog />} variant="ghost">
              Settings
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Box p={4}>
        <Flex mb={4}>
          <Input placeholder="Search users" value={searchTerm} onChange={handleSearch} mr={4} />
          <Select value={timeFrame} onChange={handleTimeFrameChange} mr={4}>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </Select>
          <Select value={category} onChange={handleCategoryChange}>
            <option value="all">All Categories</option>
            <option value="coding">Coding</option>
            <option value="design">Design</option>
            <option value="writing">Writing</option>
          </Select>
        </Flex>

        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Rank</Th>
              <Th>User</Th>
              <Th>Productive Time</Th>
              <Th>Category</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredData.map((entry, index) => (
              <Tr key={entry.id}>
                <Td>{index + 1}</Td>
                <Td>
                  <Flex align="center">
                    <Avatar name={isAnonymous ? "Anonymous" : entry.name} src={isAnonymous ? null : entry.avatar} mr={2} />
                    {isAnonymous ? "Anonymous" : entry.name}
                  </Flex>
                </Td>
                <Td>{entry.productiveTime}h</Td>
                <Td>{entry.category}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      <Box p={4}>
        <Heading as="h2" size="lg" mb={4}>
          Profile
        </Heading>
        <Flex align="center" mb={4}>
          <Avatar name="John Doe" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMDMyMzIyMHww&ixlib=rb-4.0.3&q=80&w=1080" size="xl" mr={4} />
          <Box>
            <Heading as="h3" size="md">
              John Doe
            </Heading>
            <Switch isChecked={isAnonymous} onChange={(e) => setIsAnonymous(e.target.checked)}>
              Anonymous
            </Switch>
          </Box>
        </Flex>
        <Box mb={4}>
          <Heading as="h4" size="sm" mb={2}>
            Productive Time This Week
          </Heading>
          <Progress value={80} colorScheme="green" />
        </Box>
        <Button leftIcon={<FaSync />} onClick={handleSync} isLoading={syncStatus === "syncing"} loadingText="Syncing">
          {syncStatus === "completed" ? "Sync Complete" : "Sync Data"}
        </Button>
        {syncStatus === "completed" && (
          <Alert status="success" mt={4}>
            <AlertIcon />
            Data synced successfully!
          </Alert>
        )}
      </Box>
    </Box>
  );
};

export default Index;
