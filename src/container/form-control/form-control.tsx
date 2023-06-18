const FromControl = ({
  label,
  input,
  renderLabel,
}: {
  label: string | JSX.Element;
  input: JSX.Element;
  renderLabel?: () => JSX.Element;
}) => {
  return (
    <div className="form-control">
      {renderLabel ? (
        renderLabel()
      ) : (
        <label className="form-label">{label}</label>
      )}
      {input}
    </div>
  );
};

export default FromControl;
