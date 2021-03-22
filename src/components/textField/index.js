export default function Welcome(props) {

    function handleChange(event){
        console.log(event.target);
        props.onChange(event);
    }

    return (
        <div style={ props.stylesheet.container }>
            <form>
                <label style={props.stylesheet.boldText}>This is disabled input</label>
                <input style={{...props.stylesheet.input, ...props.stylesheet.inputDisabled}} type="text" placeholder="Disabled Input" disabled="disabled" />

                <hr />

                <label style={props.stylesheet.boldText}>A Valid Input (Any String)</label>
                <input style={{...props.stylesheet.input}} type="text" class={props.validClass} name="valid" placeholder="Valid Input" value={props.valid} onChange={handleChange} />

                <hr />
                <label style={props.stylesheet.boldText}>Input with error (Only Number Accepted)</label>
                <input style={props.stylesheet.input} type="text" class={props.inValidClass} name="invalid" placeholder="input with errors" value={props.invalid} onChange={handleChange} />
            </form>    
        </div>
    )
}