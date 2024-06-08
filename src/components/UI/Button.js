import "./Button.css";

function Button(props) {
    const classes = 'button ' + props.class; 
    return (
        <div class={classes}>
            {props.children}
        </div>
    );
}

export default Button;