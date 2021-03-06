import classNames from 'classnames/bind';

import Header from '../components/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className={cx('wrapper')}>
        <Sidebar />
        <div style={{ height: 2000 }} className={cx('inner')}>
          {children}
        </div>
      </div>
    </>
  );
}

export default DefaultLayout;
