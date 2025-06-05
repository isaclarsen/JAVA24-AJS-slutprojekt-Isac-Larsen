// ChangeColorTheme.jsx - Hanterar sidans färgtema genom att ändra variablen "root"
export function ChangeColorTheme({changeTheme}){
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
        <div id="changeColorContainer">
            <form>
                <h5>Color Theme:</h5>
                <select onChange={(e) => changeTheme(e.target.value)}>
                    <option value="original">Original</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="pink">Pink</option>
                </select>
            </form>
        </div>
    )
}