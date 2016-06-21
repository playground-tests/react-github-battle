import {connect} from 'react-redux'
import Prompt from '../components/Prompt'
import actions from '../actions'
import React from 'react'
import { push } from 'react-router-redux'

// this.props.dispatch(routeActions.push('/foo));


const mapStateToProps = function(state) {
    return {
        header: state.header,
    }
}


const actionTypeDefiner = (username) => {
    return (dispatch, getState) => {
        let State = getState();
        if (State.player1 == "" && username != "") {
            dispatch({
                type: "SAVE_P1",
                username: username
            })
        } else if (State.player2 == "" && username != ""){
            dispatch({
                type: "SAVE_P2",
                username: username
            })
            dispatch(push('/confirm'));



        }else{
          alert("Please enter a valid username")
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
