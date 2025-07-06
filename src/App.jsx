import './index.css'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { javascript } from '@codemirror/lang-javascript'
import Editor from './components/Editor'
import { useState } from 'react'

function App() {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');

  return (
    <>
    <div className='pane top-pane'>
      <Editor
      displayName='HTML'
      language={html()}
      value={htmlCode}
      onChange={setHtmlCode}
      />
      <Editor
      displayName='CSS'
      language={css()}
      value={cssCode}
      onChange={setCssCode}
      />
      <Editor
      displayName='JS'
      language={javascript()}
      value={jsCode}
      onChange={setJsCode}
      />
    </div>
      <div className='pane'>
        <iframe 
        title='output'
        sandbox='allow-scripts'
        style={{border: 'none'}}
        width='100%'
        height='100%'/>
      </div>
    

    </>
  )
}

export default App
