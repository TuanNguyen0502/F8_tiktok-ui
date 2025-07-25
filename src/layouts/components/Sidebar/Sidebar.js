import classNames from "classnames";
import styles from "./Sidebar.module.scss";
import { Menu, MenuItem } from "./Menu";
import config from "../../../config";
import {
  HomeIcon,
  UserGroupIcon,
  LiveIcon,
  HomeActiveIcon,
  UserGroupActiveIcon,
  LiveActiveIcon,
} from "../../../components/Icons";
import SuggestedAccounts from "../../../components/SuggestedAccounts/SuggestedAccounts";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem
          title="For You"
          to={config.routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
        />
      </Menu>
      <SuggestedAccounts label="Suggested Accounts" />
      <SuggestedAccounts label="Following Accounts" />
    </aside>
  );
}

export default Sidebar;
