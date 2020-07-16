import { useState } from "react";

function useCheckbox() {
  const [checked, setChecked] = useState(false);

  function handleCheckedChange() {
    setChecked(!checked);
  }

  return [checked, handleCheckedChange];
}

export default useCheckbox;
