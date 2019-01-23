import React from 'react';
import styles from './Button.scss'
import className from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = className.bind(styles);

// 전달받은 className, onClick등 
// 값이 rest 안에 들어잇음 

// Jsx에서 ...를 사용하려면 
// 내부에 있는 값들을 props로 인젝 

const Div = ({ children, ...rest}) => 
<div {...rest}>{children}</div>

const Button =({
	children, to, onClick, disabled, theme = 'default',
}) => {
	//to값이 존재하면 Link를 사용하고, 
	//그렇지 않음 div를 사용합니다. 
	//비활성화되어 있는 버튼일 때도 
	//div를 사용
	const Element = (to && !disabled) ? Link : Div;

	//비활성화이면 onClick을 실행되지 않습니다.
	//disabled 값이 true가 되면
	//className에 disabled를 추가합니다. 
	return(
		<Element
		to={to}
		className={cx('button', theme, {disabled})}	
		onClick={disabled ? ()=> null : onClick}
		>
		{children}
		</Element>
	)
}

export default Button;