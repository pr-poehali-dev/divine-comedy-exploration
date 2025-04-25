
interface SectionTitleProps {
  id?: string;
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ id, title, subtitle }: SectionTitleProps) => {
  return (
    <div id={id} className="mb-8 pt-14">
      <h2 className="text-3xl font-bold mb-3 text-primary">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
      <div className="w-24 h-1 bg-primary mt-2"></div>
    </div>
  );
};

export default SectionTitle;
