import { Slide, toast, type ToastOptions } from "react-toastify";
import Image from "next/image";
const defaultToastOptions: ToastOptions = {
  position: "top-right",
  transition: Slide,
};

type ToastType = "success" | "info" | "error";

export const Toastify = ({
  content,
  type,
}: {
  content: string;
  type: ToastType;
}) => {
  const getIcon = () => {
    switch (type) {
      case "success":
        return <Image src={"/success.png"} alt="success" width={20} height={20} />;
      case "info":
        return <Image src={"/info.png"} alt="info" width={20} height={20} />;
      case "error":
        return <Image src={"/error.png"} alt="angry" width={20} height={20} />;
    }
  };

  const toastConfig = {
    ...defaultToastOptions,
    icon: getIcon,
  };

  const message = () => (
    <pre
      style={{
        margin: 0,
        fontFamily: "inherit",
        whiteSpace: "pre-wrap",
      }}
    >
      {content}
    </pre>
  );

  toast.info(message, toastConfig);
};
