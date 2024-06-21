import cnw from './assets/cnw.png'


function Card(){
    return(
<div className="card">
 <img className='card-image' src={cnw} alt="profile picture" />
 <h2 className='Card-title'>Raju</h2>
 <p className='card-text'>I'm a Frontend developer and machine learning enthusiasm</p>
</div>
    );
}

export default Card