import { useState } from "react";
import { changeColor } from "../../utils/changeColor";

function ChangeColor() {
    const [color, setColor] = useState(changeColor())
    console.log(color, setColor);
    return ( 
    <div>
        {color}
        <h1 style={{color: color}}>Этот компонент меняет цвет</h1>
        <button onClick={() => setColor(changeColor())}>Change color</button>
    </div> 
    );
}

export default ChangeColor;


// const arr = ['a', console.log('a')]
// const [value, setValue] = arr