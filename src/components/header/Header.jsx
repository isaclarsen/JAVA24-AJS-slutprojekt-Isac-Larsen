import { ChangeColorTheme } from "./ChangeColorTheme";

export function Header(){
     // Färgtema som används i hela sidan
    function changeTheme(theme) {
        const root = document.documentElement;

        if(theme === "original"){
            root.style.setProperty('--colorTheme', 'rgba(118, 232, 83, 0.642)');

        }else if (theme === "red") {
            root.style.setProperty('--colorTheme', 'rgba(220, 1, 30, 0.64)');

        } else if (theme === "blue") {
            root.style.setProperty('--colorTheme', 'rgba(83, 179, 232, 0.642)');

        } else if (theme === "pink") {
            root.style.setProperty('--colorTheme', 'rgba(232, 83, 168, 0.642)');
        } 
}
    return(
        <header>
            <div id="headerContainer">
                <h1>SCRUM BOARD</h1>
                <ChangeColorTheme changeTheme={changeTheme}/>
            </div>
        </header>
    )
}