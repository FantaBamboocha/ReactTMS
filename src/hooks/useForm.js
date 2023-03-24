import { useCallback, useState } from "react";

const useForm = (initialFormValue) => {
  const [form, setForm] = useState(initialFormValue);

  const handleChange = useCallback(({ target }) => {
    const { name, value } = target;
    setForm((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);

  const handleReset = useCallback(() => {
    setForm(initialFormValue);
  }, []);

  return { form, handleChange, handleReset };
};

export default useForm;
