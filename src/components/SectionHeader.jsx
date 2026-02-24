const SectionHeader = ({ title, subtitle }) => {
  return (
    <header className="sectionHeader">
      <p className="kicker"> {subtitle} </p>
      <h2 className="h2">{title}</h2>
      <div className="divider" />
    </header>
  );
};

export default SectionHeader;
