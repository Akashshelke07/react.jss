import PropTypes from 'prop-types'


function Student(props){
    return(
        <div className="Student">
            <p>Name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" :"No"}</p>
        </div>
    )
}

//for propTypes
/*
PropTypes:- just ensure if we use correct dataTypes of not 
ex:- PropTypes.number 
good for debuging purpose 
*/
Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

//for defaultProps
/*
defaultProps = default values for props in case they are not pased form the parent component 
name:"Guest"
*/
Student.defaultProps = {
    name:"Guest",
    age: 0,
    isStudent: false,
}


export default Student