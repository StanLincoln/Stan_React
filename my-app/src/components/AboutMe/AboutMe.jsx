// import '../../App.css'
import classes from './AboutMe.module.css'

export const AboutMe = () => {
    return (
    <div className={classes.aboutContainer}>
        <h1 style={{fontSize: '40px', color: 'green'}}>I am frontend developer.</h1>
    </div>
    )
}

const AboutMe1 = () => {
    return (
    <div>
        <h1>I am frontend developer.</h1>
    </div>
    )
}
export default AboutMe1
