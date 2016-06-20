import {
    connect
} from 'react-redux'
import Prompt from '../components/Prompt'
import actions from '../actions'
import React from 'react'


const mapStateToProps = function(state) {
    console.log(state.header);
    return {
        header: state.header,
    }
}


const actionTypeDefiner = (username) => {
    return (dispatch, getState) => {
        let State = getState();
        console.log(State);
        if (State.player1 == "") {
            dispatch({
                type: "SAVE_P1",
                username: username
            })
        } else {
            dispatch({
                type: "SAVE_P2",
                username: username
            })



        }
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSubmitUser: () => {
            let field = document.getElementById('username')
            let input = document.getElementById('username').value
            dispatch(actionTypeDefiner(input))
            field.value = "";
        },
    }
}

const PromptContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Prompt)




export default PromptContainer
