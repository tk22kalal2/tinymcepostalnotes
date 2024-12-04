export const editorConfig = {
  selector: '#notesEditor',
  plugins: [
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor forecolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | image | help',
  height: 500,
  menubar: true,
  image_title: true,
  automatic_uploads: true,
  file_picker_types: 'image',
  content_style: `
    body { 
      font-family: Arial, sans-serif; 
      font-size: 14px; 
      margin: 15px;
      padding: 0;
    }
    img {
      max-width: 100%;
      height: auto;
    }
  `,
  branding: false,
  promotion: false,
  inline: false,
  verify_html: false,
  forced_root_block: 'p',
  remove_script_host: true,
  convert_urls: false,
  relative_urls: false,
  skin: 'oxide',
  resize: true,
  statusbar: true,
  elementpath: true,
  contextmenu: 'link image table',
  extended_valid_elements: 'img[class|src|border=0|alt|title|width|height|style]',
  init_instance_callback: function(editor) {
    editor.getBody().setAttribute('contenteditable', 'true');
  }
};