import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import { Wrapper as PopperWraper } from "../../components/Popper";
import AccountPreview from "./AccountPreview";

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWraper>
          <AccountPreview />
        </PopperWraper>
      </div>
    );
  };

  return (
    <Tippy
      interactive
      delay={[800, 0]}
      placement="bottom"
      offset={[-20, 0]}
      render={renderPreview}
    >
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
    </Tippy>
  );
}

export default AccountItem;
