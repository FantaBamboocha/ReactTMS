import LinearProgress from "@mui/material/LinearProgress";

import styles from "./styles.module.scss";

const NativeFetchView = ({ data, errors, isLoading }) => {
  return (
    <div>
      <h2>Native Fetch</h2>
      {isLoading && <LinearProgress />}
      {errors && <p> {errors}</p>}
      <div className={styles.countries}>
        {data &&
          data.map(({ name, media }, index) => (
            <div className={styles.countrieName} key={index}>
              {name}
              <div className={styles.countryFlag}>
                <img src={media.flag} alt="img"></img>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NativeFetchView;
