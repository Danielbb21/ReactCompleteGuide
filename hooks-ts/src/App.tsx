import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
  useContext,
  useImperativeHandle,
  useReducer,
} from "react";

import { useEffect } from "react";

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

function App() {
  const [users, setUsers] = useState<[User]>();

  const inputRef = useRef<HTMLInputElement>(null);

  const names = useMemo(
    () => users?.map((user) => user.name).join(", ") || "",
    [users]
  );

  const greeting = useCallback((name: User) => alert(`Hello ${name}`), []);

  // useEffect(() => {
  //   async function loadData() {
  //     const response = await fetch("https://api.github.com/users/diego3g");
  //     const data = await response.json();
  //     console.log(data);
  //     setUser(data);
  //   }
  //   loadData();
  // }, []);
    // function focusOnInput(){
      inputRef.current?.focus();
    


  return (
    <div>
      <form action="">
        <input type="text" ref={inputRef} />
      </form>
    </div>
  );
}

export default App;
