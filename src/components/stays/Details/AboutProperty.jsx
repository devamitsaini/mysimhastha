export default function AboutProperty({ stay }) {
  return (
    <section className="details-card">

      <h2>About this Property</h2>

      <p>
        {stay.description ||
          stay.short_description ||
          `${stay.name} is a comfortable ${
            stay.stay_type || "stay"
          } in Ujjain offering a convenient location for devotees visiting
          Mahakaleshwar Temple. Contact the property directly for the latest
          pricing and availability.`}
      </p>

    </section>
  );
}