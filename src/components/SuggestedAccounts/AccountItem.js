import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem({ label }) {
  return (
    <div className={cx("account-item")}>
      <img className={cx("avatar")} src="" alt="" />
      <div className={cx("item-info")}>
        <p className={cx("nickname")}>
          <strong>quocnguyenphu</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <p className={cx("name")}>Nguyen Phu Quoc</p>
      </div>
    </div>
  );
}

export default AccountItem;
