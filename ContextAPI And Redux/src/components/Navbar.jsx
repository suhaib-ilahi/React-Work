import { AppBar, Button, Switch, Toolbar, Typography } from "@mui/material"
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <AppBar
            className={`sticky top-0 z-10 shadow-md transition-colors duration-200  ${
  theme === "dark"
    ? "!bg-slate-900 !text-white"
    : "!bg-white !text-slate-900"
}`}>
            <Toolbar className="min-h-16 w-full gap-2 px-6 max-[560px]:gap-0 max-[560px]:px-3">
                <Typography
                    className="flex-1 text-[1.35rem] font-bold tracking-wide max-[560px]:text-lg"
                    variant="h6">
                    DevTask
                </Typography>
                <Button className="min-w-0 px-3 py-2 font-semibold normal-case text-inherit max-[560px]:px-1.5 max-[560px]:text-xs" color="inherit">
                    Dashboard
                </Button>

                <Button className="min-w-0 px-3 py-2 font-semibold normal-case text-inherit max-[560px]:px-1.5 max-[560px]:text-xs" color="inherit">
                    Tasks
                </Button>

                <Button className="min-w-0 px-3 py-2 font-semibold normal-case text-inherit max-[560px]:px-1.5 max-[560px]:text-xs" color="inherit">
                    GitHub
                </Button>
                <Switch
                  checked={theme === "dark"}
                onChange={toggleTheme}
                className="ml-1" />
            </Toolbar>
        </AppBar>
    )
}

export default Navbar