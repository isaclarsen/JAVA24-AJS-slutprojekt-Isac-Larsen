import { ChangeColorTheme } from "./ChangeColorTheme";

export function Header({changeTheme}){
    return(
        <header>
            <div id="headerContainer">
                <h1>SCRUM BOARD</h1>
                <ChangeColorTheme changeTheme={changeTheme}/>
            </div>
        </header>
    )
}