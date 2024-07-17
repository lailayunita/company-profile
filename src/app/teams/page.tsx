"use client";

import Jumbotron from "@/components/Jumbotron";
import TeamCard from "@/components/TeamCard";
import { Container, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Teams = () => {
  const [users, setUsers] = useState<any[]>([]);
  const getData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=8");
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Jumbotron
        title="Our Team"
        desc="Our team of experienced professionals is dedicated to delivering top-quality construction services. With a blend of technical expertise and creative innovation, we bring your visions to life."
      />
      <Container maxW="7xl" fontSize="md" py={10}>
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          gap={{ base: "1rem", md: "2rem" }}
        >
          {users.map((user, index) => (
            <TeamCard
              key={index}
              name={`${user.name.first} ${user.name.last}`}
              profilepic={user.picture.large}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Teams;
