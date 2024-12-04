import { editorConfig } from './config/editorConfig.js';
import { createImagePickerCallback } from './handlers/imageHandler.js';
import { API_KEYS } from '../config/constants.js';

export async function initializeEditor() {
  const config = {
    ...editorConfig,
    file_picker_callback: createImagePickerCallback(),
    api_key: API_KEYS.TINYMCE_API
  };

  try {
    const editor = await tinymce.init(config);
    return editor[0];
  } catch (error) {
    console.error('Failed to initialize TinyMCE editor:', error);
    throw error;
  }
}

export async function updateEditorContent(content) {
  return new Promise((resolve, reject) => {
    const maxAttempts = 50;
    let attempts = 0;
    
    const checkEditor = setInterval(() => {
      const editor = tinymce.get('notesEditor');
      if (editor) {
        clearInterval(checkEditor);
        editor.setContent(content);
        resolve(editor);
      }
      
      attempts++;
      if (attempts >= maxAttempts) {
        clearInterval(checkEditor);
        reject(new Error('Failed to initialize TinyMCE editor'));
      }
    }, 100);
  });
}

export function getEditorContent() {
  const editor = tinymce.get('notesEditor');
  return editor ? editor.getContent() : '';
}

export function destroyEditor() {
  const editor = tinymce.get('notesEditor');
  if (editor) {
    editor.destroy();
  }
}