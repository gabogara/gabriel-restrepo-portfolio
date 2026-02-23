const SectionHeader = ({ title, subtitle }) => {
  return (
    <header className="sectionHeader">
      <div className="kicker mono">
        {"// "}
        {subtitle.toUpperCase()}
      </div>
      <h2 className="titleGradient h2">{title}</h2>
      <div className="underlineGradient" />
    </header>
  );
};

export default SectionHeader;
