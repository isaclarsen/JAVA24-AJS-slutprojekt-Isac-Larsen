export function ChangeColorTheme({changeTheme}){
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