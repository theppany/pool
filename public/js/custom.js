require ('../vendor/voyager-polls/resources/assets/js/tinymce-polls-plugin');


tinymce.init({
    menubar: false,
    selector:'textarea.richTextBox',
    skin: 'voyager',
    plugins: 'link, image, code, youtube, giphy, pagebreak, poll',
    extended_valid_elements : 'input[onclick|value|style|type],poll[slug]',
    custom_elements: 'poll',
    file_browser_callback: function(field_name, url, type, win) {
        if(type =='image'){
          $('#upload_file').trigger('click');
        }
    },
    toolbar: 'styleselect bold italic underline | alignleft aligncenter alignright | bullist numlist outdent indent | link image youtube giphy pastetext pasteword | code pagebreak poll',
    convert_urls: false,
    image_caption: true,
    image_title: true,
    poll_tag: '<poll slug=""></poll>',
});/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


