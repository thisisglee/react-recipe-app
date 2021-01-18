import style from './recipe.module.css'

const Recipe = (props) => {
    return(
        <div className={style.recipe}>
            <h1>{props.title}</h1>
            <p>{props.calories}</p>
            <ul>
                {props.ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <img className={style.image} src={props.imgSrc} alt=""/>
        </div>
    )
}

export default Recipe