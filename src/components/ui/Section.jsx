import Container from "./Container";

export default function Section({
  id,
  children,
  className = "",
}) {
  return (
    <section
      id={id}
      className={`
        relative
        py-32
        lg:py-40
        overflow-hidden
        ${className}
      `}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}