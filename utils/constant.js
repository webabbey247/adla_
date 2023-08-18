import dynamic from "next/dynamic";

const UN_AUTHENTICATED = "/auth/login";
const IS_ADMIN = "/administrator/dashboard";
const AUTH_TOKEN_STORAGE_KEY = "__auth_token";

// const QuillNoSSRWrapper = dynamic(import("react-quill"), {
//   ssr: false,
//   loading: () => <p>Loading ...</p>,
// });

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { header: "3" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const QuillWrapper = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');
    // eslint-disable-next-line react/display-name
    return ({ ...props }) => <RQ {...props} />;
  },
  {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  }
);

export {
  UN_AUTHENTICATED,
  IS_ADMIN,
  AUTH_TOKEN_STORAGE_KEY,
//   QuillNoSSRWrapper,
  QuillWrapper,
  modules,
};
