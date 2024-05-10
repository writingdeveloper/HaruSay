// components/QuillEditor.tsx

'use client';

import 'react-quill/dist/quill.snow.css';

import dynamic from 'next/dynamic';
import React, { useState } from 'react';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const editorStyles = {
  height: '100vh',
  marginBottom: '50px',
};

const QuillEditor = () => {
  const [text, setText] = useState('');

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ direction: 'rtl' }],
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: 1 }, { header: 2 }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ['clean'],
      ['link', 'image', 'video'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'code-block',
    'list',
    'bullet',
    'indent',
    'align',
    'color',
    'background',
    'font',
    'link',
    'image',
    'video',
  ];

  const handleChange = (content: string) => {
    setText(content);
  };

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px' }}>
      <ReactQuill
        theme="snow"
        value={text}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        style={{ ...editorStyles, color: 'black' }} // 인라인으로 색상 직접 지정
      />
    </div>
  );
};

export { QuillEditor };
