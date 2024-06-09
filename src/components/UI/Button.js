import "./Button.css";

function Button(props) {
    const classes = 'button ' + props.class; 
    return (
        <button
        class={classes} 
        type={props.type}>
            {props.children}
        </button>
    );
}

export default Button;