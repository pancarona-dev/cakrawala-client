import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);


  // if (!mounted) {
  //   return null;
  // }

  // const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() =>
        setTheme(
          theme === "dark" || resolvedTheme === "dark" ? "light" : "dark"
        )
      }
    >
      {mounted && (theme === "dark" || resolvedTheme === "dark") ? (
        <BsFillSunFill
          className="h-7 w-7 cursor-pointer text-yellow-400"
        />
      ) : (
        <BsFillMoonFill
          className="h-7 w-7 cursor-pointer text-gray-900"
        />
      )}
    </button>
  );
}

export default DarkModeButton;
