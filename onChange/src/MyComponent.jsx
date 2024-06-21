import React, {useState} from "react"

function MyComponent(){
const [name, setName] = useState("Guest");
const [quantity, setQuantity] = useState("1");
const [comment, setComment] = useState("");
const [payment, setPayment] = useState("");
const [shipping, setShipping] = useState("");


function Myname(event){
    setName(event.target.value);
}

function MyQuantity(event){
    setQuantity(event.target.value);
}

function MyComment(event){
    setComment(event.target.value);
}

function MyPayment(event){
    setPayment(event.target.value);
}

function MyShipping(event){
    setShipping(event.target.value);
}

return(
    <div>
        <input value={name} onChange={Myname}/>
        <p>Name: {name}</p>

        <input value={quantity} onChange={MyQuantity} type="number"/>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={MyComment} placeholder="Entre delivery instructions...."/>
        <p>Comment:{comment} </p>

        <select value={payment} onChange={MyPayment}>
        <option value="">Select an option</option>
        <option value="visa">Visa</option>
        <option value="Atm Card">Atm Card</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment: {payment}</p>
        
        <label>
            <input type="radio" value={"Pick Up"}
            checked={shipping === "Pick Up"}
            onChange={MyShipping}
            ></input>
            Pick Up
        </label><br />

         <label>
            <input type="radio" value={"Devilvery"}
            checked={shipping === "Devilvery"}
            onChange={MyShipping}
            ></input>
            Delivery 
        </label>
        <p>Shipping: {shipping}</p>
    </div>
)
}
export default MyComponent