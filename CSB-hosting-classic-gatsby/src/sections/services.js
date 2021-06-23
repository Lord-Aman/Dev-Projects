/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import SectionHeading from "components/section-heading";
import ServiceCard from "components/service-card";

const services = [
  {
    title: "Cloud Hosting",
    description: "Some Description Here",
  },
  {
    title: "Web Hosting",
    description: "Some Description Here",
  },
  {
    title: "VPS Hosting",
    description: "Some Description Here",
  },
  {
    title: "Wordpress Hosting",
    description: "Some Description Here",
  },
  {
    title: "Domains",
    description: "Some Description Here",
  },
  {
    title: "Email Hosting",
    description: "Some Description Here",
  },
  {
    title: "VPN Service",
    description: "Some Description Here",
  },
  {
    title: "Image Cloud",
    description: "Some Description Here",
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          // slogan="Our Services"
          title="Our Services"
        />
        <Box sx={styles.grid}>
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    pt: ["70px", null, null, null, "100px", null, "140px"],
    pb: [12, null, null, null, null, 15],
  },
  grid: {
    gap: [3, null, null, 4],
    display: "grid",
    justifyContent: "center",
    gridTemplateColumns: [
      "repeat(2, 1fr)",
      null,
      null,
      "repeat(3, 1fr)",
      null,
      "repeat(4, 1fr)",
      "repeat(4, 300px)",
    ],
  },
};
