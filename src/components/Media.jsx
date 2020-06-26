import React from 'react'
import Card from './Card'

import {connect} from 'react-redux'

//export default props => {
function Media(props){
    console.log(props.numeros)
    const { min, max } = props;
    return (
        <Card title="Media" blue>
            <div>
                <span>
                    <span>Valor Medio: </span>
                    <strong>{(min + max)/2}</strong>
                </span>
            </div>
        </Card>
    )
}

// const mapStateToProps = state => {
function mapStateToProps(state){
    return{
        min: state.numeros.min,
        max: state.numeros.max,
    }
}


export default connect(mapStateToProps)(Media);