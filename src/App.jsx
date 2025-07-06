import './index.css'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { javascript } from '@codemirror/lang-javascript'
import Editor from './components/Editor'
import { useEffect, useState } from 'react'

function App() {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {  // timeout is for few secs delay and srcDoc helps to render down these html, css, js into the iframe
      setSrcDoc(`                       
        <html>
          <body>${htmlCode}</body>
          <style>${cssCode}</style>
          <script>${jsCode}</script>
        </html>
        `
      )
    }, 250)       //250ms delay
    return() => clearTimeout(timeout) //to clear out the timeout
  }, [htmlCode,cssCode,jsCode]
)

 
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
        srcDoc={srcDoc}
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
