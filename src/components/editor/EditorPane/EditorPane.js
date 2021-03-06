import React, { Component } from 'react';
import styles from './EditorPane.scss';
import classNames from 'classnames/bind';

import CodeMirror from 'codemirror';

// 마크다운 문법 색상
import 'codemirror/mode/markdown/markdown';

// 마크다운 내부에 들어가는 코드 색상
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'codemirror/mode/shell/shell';

// codemirror를 위한 css스타일
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

const cx = classNames.bind(styles);

class EditorPane extends Component {

  // 에디터 ref
  editor = null;
  // CodeMirror 인스턴스
  codeMirror = null;
	// 에디터의 텍스트 curor 위치
	cursor = null;


  initializeEditor = () => {
    this.codeMirror = CodeMirror(this.editor, {
      mode: 'markdown',
      theme: 'monokai',
      lineNumbers: true, // 왼쪽에 라인 넘버 띄우기
      lineWrapping: true // 내용이 너무 길면 다음줄에 작성
    });
		this.codeMirror.on('change', this.handleChangeMarkdown);
  };

  componentDidMount() {
    this.initializeEditor();
  }

	handleChange = e => {
		const { onChangeInput } = this.props;
		const { value, name } = e.target;
		onChangeInput({ name, value });
	}

	handleChangeMarkdown = doc => {
		const { onChangeInput } = this.props;
		// 텍스트 cursor 위치 저장
		this.cursor = doc.getCursor();
		onChangeInput({
			name: 'markdown',
			value: doc.getValue()
		});
	}

	// componentDidUpdate(prevProps, prevState){
	// 	// markdown이 변경되면 에디터 값도 변경
	// 	// 이 과정에서 텍스트 커서의 위치가
	// 	// 초기화되기 때문에 
	// 	// 저장한 커서의 위치가 있으면
	// 	// 해당 위치로 설정합니다. 
	// 	if(prevProps.markdown !== this.props.markdown){
	// 		const { codeMirror, cursor } = null;
	// 	// 인스턴스를 아직 만들지 않았을 때	
	// 		if(!codeMirror) return;
	// 		codeMirror.setValue(this.props.markdown);
	// 		if(!cursor) return; // 커서가 없으면
	// 		codeMirror.setCursor(cursor);
	// 	} 

	// }

  render() {

  const { handleChange } = this;
	const { tags, title } = this.props;

    return (
      <div className={cx('editor-pane')}>
        <input
          className={cx('title')}
          placeholder="제목을 입력하세요"
          name="title"
					value={title}
					onChange={handleChange}
        />
        <div className={cx('code-editor')} ref={ref => (this.editor = ref)} />
        <div className={cx('tags')}>
          <div className={cx('description')}>태그</div>
          <input 
					name="tags" 
					placeholder="태그를 입력하세요 (쉼표로 구분)" 
					value={tags}
					onChange={handleChange}
					/>
        </div>
      </div>
    );
  }
}

export default EditorPane;
