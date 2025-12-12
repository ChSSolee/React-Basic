import { useState } from "react";

export default function Input3() {
  const [formState, setFormState] = useState({
    id: "",
    password: "",
    date: "",
  });

  // formState 객체의 속성 이름을 동적으로 설정하여, 입력값을 동기화 (계산된 속성 이름, Computed Property Name)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((formState) => ({
      ...formState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <form>
        <h1>
          ID: {formState.id} / Password: {formState.password} / Date:{" "}
          {formState.date}
        </h1>
        <input
          type="text"
          name="id"
          value={formState.id}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={formState.date}
          onChange={handleChange}
        />
      </form>
    </>
  );
}