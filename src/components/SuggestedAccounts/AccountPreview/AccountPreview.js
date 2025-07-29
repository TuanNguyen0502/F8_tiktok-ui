import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss";
import Button from "../../../layouts/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}>
        <img className={cx("avatar")} src="" alt="" />
        <Button className={cx('follow-btn')} primary>Follow</Button>
      </header>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>quocnguyenphu</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <p className={cx("name")}>Nguyen Phu Quoc</p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("label")}>Followers</span>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("label")}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
