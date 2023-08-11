import { toast } from "react-toastify";

export const ToastService = {
  error: (data) => {
    return ToastService.showToast(data, "error");
  },
  success: (data) => {
    return ToastService.showToast(data, "success");
  },
  showToast: (message, toastType, duration) => {
    if (toastType === "error") {
      return toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
        style: {
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "24px",
          color: "var(--adlas-nav-color)",
        },
      });
    } else if (toastType === "success") {
      return toast.success(message, {
        duration: duration,
        position: toast.POSITION.TOP_CENTER,
        // icon: '🔥',
        style: {
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "24px",
          color: "var(--adlas-nav-color)",
          // color: "#000000",
        },
      });
    } else {
      return toast.loading(message, {
        duration: duration,
        style: {
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "30px",
          color: "var(--adlas-nav-color)",
          // color: "#000000",
        },
      });
    }
  },
};
