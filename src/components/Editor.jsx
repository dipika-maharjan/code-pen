import React, { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import {material} from '@uiw/codemirror-theme-material';
import {html} from '@codemirror/lang-html';
import {css} from '@codemirror/lang-css';
import {javascript} from '@codemirror/lang-javascript';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';

export default function Editor({displayName, language, value, onChange}) { //displayName is the name of editor, language is the language of the editor, value, onChange passed as a prop

  const [open, setOpen] = useState(true); //for open button

    function handleChange(value, viewUpdate){ //value is current value of editor, viewUpdate is the current view of editor
        onChange(value); //this function is called when value of editor changes based on user input
    }
    return (                                                          //collapsed=minimizes the editor
      <div className={`editor-container ${open ? '' : 'collapsed'}`}>  
        <div className="editor-title">
            {displayName}                 
            <button 
            type='button'
            className='expand-collapse-btn' 
            onClick={() => setOpen(prevOpen => ! prevOpen)}> 
              <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt}/>
              </button>     
        </div>

        <CodeMirror 
        value={value} //shows code in the editor
        extensions={[language]} //editor language(html, css, js)
        theme={material} //theme of the editor
        className='code-mirror-wrapper'
        onChange={handleChange}   //this function is called when value of editor changes based on user input
        /> 
      </div>
  )
}
