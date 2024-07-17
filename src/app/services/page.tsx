import Jumbotron from "@/components/Jumbotron";
import ServicesCard from "@/components/ServicesCard";
import { getEntriesHomepage, getEntriesService } from "@/libs/contentful";
import { Box, Container, Grid } from "@chakra-ui/react";

const ServicesPage = async () => {
  const services = await getEntriesService();

  return (
    <>
      <Jumbotron
        title="Services"
        desc="At Builders, we offer a comprehensive range of construction services tailored to meet the unique needs of our clients. Our expertise spans residential, commercial, industrial, and renovation projects, ensuring high-quality outcomes through every phase of development. Whether it's a custom home, a commercial space, or a large-scale industrial facility, we bring our commitment to excellence, innovation, and sustainability to every project."
      />
      <Container maxW="7xl">
        <Grid
          templateColumns={{ base: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
          gap={6}
          py={8}
        >
          {services?.map((service: any, index: number) => {
            return (
              <ServicesCard
                key={index}
                image={`https:${service.image.fields.file.url}`}
                title={service.title}
              />
            );
          })}
          {/* <ServicesCard
            image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Constructoin Consultant"
          />
          <ServicesCard
            image="https://images.unsplash.com/photo-1527199768775-bdabf8b32f61?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Preconstruction Service"
          />
          <ServicesCard
            image="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="House Renovation"
          />
          <ServicesCard
            image="https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=3013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Interior Design"
          />
          <ServicesCard
            image="https://images.unsplash.com/photo-1581094369448-f77f408cfa6f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Build Engineering"
          />
          <ServicesCard
            image="https://images.unsplash.com/photo-1543892659-9dd6ce7af3c2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Architecure & building"
          /> */}
        </Grid>
      </Container>
      <Box bg="#f5f5f5">
        <Container maxW="7xl"></Container>
      </Box>
    </>
  );
};

export default ServicesPage;
