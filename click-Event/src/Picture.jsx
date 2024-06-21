

function Picture(){

   const imageUrl = './assets/cnw.png'
   const handelClick = (e) => e.target.style.display = "none";



   return(<img onClick={ (e) => handelClick(e)} src = {imageUrl}></img>);

}
export default Picture