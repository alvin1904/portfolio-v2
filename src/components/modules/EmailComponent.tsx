"use client";

import { useEffect, useState } from "react";
import { Trash } from "../Icons";

type EmailDataType = {
  name: string | null;
  email: string | null;
  subject: string | null;
  body: string | null;
};
const defaultEmail: EmailDataType = {
  name: null,
  email: null,
  subject: null,
  body: null,
};
type StateTypes = "idle" | "loading" | "typing";
const EmailComponent = () => {
  const [data, setData] = useState<EmailDataType>(defaultEmail);
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleClear = () => setData(defaultEmail);

  useEffect(() => {
    if (data.body || data.email || data.name || data.subject) {
      if (state === "typing") return;
      else setState("typing");
    } else {
      setState("idle");
    }
  }, [data]);

  const [state, setState] = useState<StateTypes>("idle");

  const invalidData = (dataToVerify: any[]): string | boolean => {
    if (dataToVerify.includes(null) || dataToVerify.includes(""))
      return "Complete the message before sending.";
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(dataToVerify[1])) return "Enter a valid email!";
    return false;
  };

  const handleSend = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const dataToVerify = [data.name, data.email, data.subject, data.body];
    const hasError = invalidData(dataToVerify);
    if (hasError) return alert(hasError);
    try {
      setState("loading");
      alert("Message sent successfully!");
    } catch (err) {
      console.log(err);
    } finally {
      setState("idle");
    }
  };
  return (
    <>
      <div className="w-full email_line">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={data.name || ""}
          onChange={handleInputChange}
        />
      </div>
      <div className="w-full email_line">
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={data.email || ""}
          onChange={handleInputChange}
        />
      </div>
      <div className="w-full email_line">
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          value={data.subject || ""}
          onChange={handleInputChange}
        />
      </div>
      <div className="w-full email_body">
        <textarea
          placeholder="Enter message here"
          name="body"
          value={data.body || ""}
          onChange={handleInputChange}
        ></textarea>
        <div className="email_footer flex flex-row items-center justify-between">
          <button
            className="email_send cto cup smoothen text-center unselect"
            onClick={handleSend}
            disabled={state === "loading"}
          >
            {state === "loading" ? "Sending..." : "Send"}
          </button>
          {state === "typing" && (
            <button className="cup" onClick={handleClear} aria-label="Clear">
              <Trash />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default EmailComponent;
