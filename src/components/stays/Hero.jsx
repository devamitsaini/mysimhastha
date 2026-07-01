import Stats from "./Stats";

const Hero = () => {
  return (
    <section className="stays-hero">

      <div className="stays-hero-overlay"></div>

      <div className="container">

        <div className="stays-hero-content">

          <h1>
            Find Your Perfect Stay in
            <span> Ujjain</span>
          </h1>

          <p>
            Discover verified hotels, dharamshalas,
            ashrams and guest houses near
            Mahakaleshwar Temple.
          </p>

          <Stats />

        </div>

      </div>

    </section>
  );
};

export default Hero;