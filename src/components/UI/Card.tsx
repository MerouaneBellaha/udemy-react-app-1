import "./Card.scss"

const Card: Function = (props: {className: string, children: JSX.Element[]}) => {
    const classes = 'card ' + props.className
    return <div className={classes}>{props.children}</div>
}

export default Card;