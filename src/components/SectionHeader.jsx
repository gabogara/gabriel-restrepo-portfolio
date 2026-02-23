const SectionHeader = ({ title, subtitle }) => {
  return (
    <header className="sectionHeader">
      <p> {subtitle} </p>
      <h2>{title}</h2>
    </header>
  );
};

export default SectionHeader;
