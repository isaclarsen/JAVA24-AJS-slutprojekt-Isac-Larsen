//Header.jsx - Hanterar "top-delen" av sidan
import { ChangeColorTheme } from "./ChangeColorTheme";

export function Header(){
    return(
        <header>
            <div id="headerContainer">
                <h1>SCRUM BOARD</h1>
                <ChangeColorTheme/>
            </div>
        </header>
    )
}