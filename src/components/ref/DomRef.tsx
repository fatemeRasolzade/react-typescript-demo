import { useRef, useEffect } from "react";

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    // use ? befor focus() or use ! after null inner useRef
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type={"text"} ref={inputRef} />
    </div>
  );
};

export default DomRef;
