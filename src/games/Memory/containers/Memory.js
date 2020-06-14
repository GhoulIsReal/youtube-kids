import React, { Component }  from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../components/Header'
import CardList from '../components/CardList'
import MemoryActions from '../actions/memory'

import "./Memory.css"

const mapStateToProps = (state) => ({
    memory : state.memory
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(MemoryActions, dispatch)
});

class Memory extends Component {

    render() {
        const { memory, actions, goBackToVideo } = this.props;
        const gameFinished = !memory.cards.some(card => !card.discovered);

        return (
            <div className="container">
                <Header round={memory.round} gameFinished={gameFinished} goBackToVideo={goBackToVideo} />
                <CardList cards={memory.cards} flipCard={actions.flipCard} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Memory);
