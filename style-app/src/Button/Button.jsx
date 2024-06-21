// import styles from './Button.module.css'


//inline css stylinng 


function Button(){

 const styles = {
  backgroundColor: "hsl(200, 100%, 50%)",
  color: "white",
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
}

//style property can be apply using jaavascript function method we can do it 
    return(
<button style={styles}>Click me</button>
    );
}

export default Button