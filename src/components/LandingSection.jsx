import PropTypes from "prop-types";

LandingSection.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.arrayOf(PropTypes.string),
  buttons: PropTypes.arrayOf(PropTypes.string),
};

export default function LandingSection({
  className,
  title,
  subtitle,
  buttons,
}) {
  return (
    <section
      className={
        className + " flex flex-col items-center justify-between py-20"
      }
    >
      <div className="flex flex-col items-center gap-2">
        <p className="text-4xl font-medium">{title}</p>
        {subtitle.map((text, idx) => (
          <p key={idx} className="text-lg font-medium">
            {text}
          </p>
        ))}
      </div>
      <div className="flex gap-10">
        {buttons[0] && (
          <button className="bg-slate-100 text-slate-950 w-60 py-3 rounded-lg font-semibold shadow-lg hover:bg-slate-200 focus:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 transition duration-300 ease-in-out">
            {buttons[0]}
          </button>
        )}
        {buttons[1] && (
          <button className="bg-slate-950 text-slate-100 w-60 py-3 rounded-lg font-semibold shadow-lg hover:bg-slate-900 focus:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400 transition duration-300 ease-in-out">
            {buttons[1]}
          </button>
        )}
      </div>
    </section>
  );
}
