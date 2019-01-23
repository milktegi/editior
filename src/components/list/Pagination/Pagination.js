import React from 'react';
import Button from 'components/common/Button';
import styles from './Pagination.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(this);

const Pagination = () => (
  <div className={cx('pagination')}>
    <Button disabled>
			이전 페이지
			</Button>
    <div className={cx('number')}>
			페이지 1
			</div>
    <Button>
			다음 페이지
			</Button>
  </div>
);

export default Pagination;
