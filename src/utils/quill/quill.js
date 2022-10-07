import "react-quill/dist/quill.snow.css";

export const quillFormats = [
    "background",
    "bold",
    "color",
    "font",
    "code",
    "italic",
    "link",
    "size",
    "strike",
    "script",
    "underline",
    "blockquote",
    "header",
    "indent",
    "list",
    "align",
    "direction",
    "code-block",
    "formula",
    // 'image'
    // 'video'
];

export const quillModules = {
    toolbar: [{
            header: [1, 2, 3, false]
        },
        "bold",
        "italic",
        "underline",
        {
            list: "ordered"
        },
        {
            list: "bullet"
        },

        "clean",

    ],
};