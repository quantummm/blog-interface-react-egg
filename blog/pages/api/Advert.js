import cn from "classnames";
import styles from "../../styles/components/advert.module.css";

const Advert = () => {
  return (
    <div className={cn(styles.ad_div, styles.comm_box)}>
      <div>
        <img src="#" width="100%"></img>
      </div>
      <div>
        <img src="#" width="100%"></img>
      </div>
      <div>
        <img src="#" width="100%"></img>
      </div>
      <div>
        <img src="#" width="100%"></img>
      </div>
    </div>
  );
};

export default Advert;
