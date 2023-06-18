import style from "./home.play.module.scss";

const HomePlay = ({ image, title = "" }: { image: any; title?: string }) => {
  return (
    <div className={style.playContainer}>
      <img className={style.secImage} src={image} alt={title} />
      <div className={style.action}>
        <div className={style.playBtn}>
          <div className={style.playIcon}></div>
        </div>
        <div>
          <h2>Hit play</h2>
          <div className={style.helpText}>
            To get an overview of this feature
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePlay;
