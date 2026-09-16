import ServiceCard from "../../components/ServiceCard/ServiceCard";

const Home = () => {
  return (
    <section className="home">
      <h1>Welcome to Nerrea</h1>
      <p>My Home page.</p>
      <ServiceCard
        name="Workforce"
        description="Support with recruitment, permits, visas, and training."
        href="/workforce"
        linkLabel="Explore Workforce"
        img={{
          src: "https://images.unsplash.com/photo-1590650265179-7e13941e93f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Professionals working together",
        }}
      />
    </section>
  );
};

export default Home;
