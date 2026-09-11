import Hero from "../../components/Hero/hero";

const Home = () => {
  return (
    <section className="home">
      <h1>Welcome to Nerrea</h1>
      <Hero
        heading="Your virtual Assistant for business"
        supportingText=""
        ctas=""
      />

      <p>My Home page.</p>
    </section>
  );
};

export default Home;
