import React from 'react';
import styles from './PostBody.scss';
import className from 'classnames/bind'

const cx = className.bind(styles);

const PostBody = () => {
	return ( 
		<div className={cx('post-body')}>
			<div className={cx('paper')}>
				내용
			</div>
		</div>
	 );
}
 
export default PostBody;