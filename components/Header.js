import headerStyles from "../styles/Header.module.css";
export default () => {
  const x = 5;
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev Newz</span>
      </h1>
      <p className={headerStyles.description}>Description here</p>
      <style jsx>
        {`
          .title {
            color: ${x > 2 ? "blue" : "red"};
          }
        `}
      </style>
    </div>
  );
};
