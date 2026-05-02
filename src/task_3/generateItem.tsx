const DEPTH_STEP = 15;

export default function GenerateItem(
  name: string,
  isFile: boolean,
  depth?: number,
  changeVisibility?: () => void,
  isVisible?: boolean,
) {
  const picPath = isFile ? "file.png" : "folder.png";
  return (
    <div style={{ marginLeft: depth }} className="row">
      {!isFile && (
        <button className="collapse-expand-btn" onClick={changeVisibility}>
          {isVisible ? "-" : "+"}
        </button>
      )}
      <img
        src={picPath}
        alt=""
        width="16px"
        height="16px"
        style={{ marginLeft: isFile ? DEPTH_STEP : 0 }}
      />
      <span>{name}</span>
    </div>
  );
}
