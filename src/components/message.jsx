import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { toast } from "react-toastify";
import { useAuth } from "./context/auth";
import SendIcon from "@mui/icons-material/Send";
import { EmailOutlined } from "@mui/icons-material";
const Message = () => {
  const [send1, setSend1] = useState(true);
  const [send2, setSend2] = useState(false);
  const [message, setMessage] = useState("");
  const [auth, setAuth] = useAuth()
  const navigate = useNavigate()
  const sendMessageHandler = () => {
    setSend1(false);
    setSend2(true);
  };
  const sendMessageHandler2 = () => {
    setSend1(true);
    setSend2(false);
  };
  const messageAlertHandler = () => {
    if (auth.token) {
      setSend1(true);
      setSend2(false);
      toast.success("Xabaringiz yetkazildi");
    } else {
      toast.error("Xabar yuborish uchun ro'yhatdan o'ting");
      navigate("/auth/register");
    }
  };
  return (
    <div>
      {send1 && (
        <div
          onClick={sendMessageHandler}
          className="py-3 bgMessage fixed bottom-16  right-12 w-[300px] rounded-tl-md rounded-tr-3xl flex flex-row cursor-pointer"
        >
          <EmailOutlined className="text-white ml-2" />
          <p className="text-white ml-3">Bizga xabar yuboring</p>
          <SendIcon className="ml-6 text-white" />
        </div>
      )}
      {send2 && (
        <div className="py-3  fixed bottom-0 right-12 w-[300px]  flex flex-col cursor-pointer">
          <div
            onClick={sendMessageHandler2}
            className=" flex py-3 bgMessage rounded-bt-md rounded-tl-md rounded-tr-3xl"
          >
            <EmailOutlined className="text-white ml-2" />
            <p className="text-white ml-3">Bizga xabar yuboring</p>
          </div>
          <div className="w-[300px]">
            {auth.isLogin ? (
              <section>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full min-h-[100px] bg-slate-200 outline-none border-0 p-2 font-medium text-lightGreey resize-none"
                />
                <SendIcon
                  onClick={messageAlertHandler}
                  className="text-limeGreen absolute bottom-7 right-3"
                />
              </section>
            ) : (
              <div className="bg-slate-200 min-h-[100px] flex flex-col">
                <input
                  placeholder="Ismingizni kiriting"
                  className="w-[90%] mx-auto my-2 p-1"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
