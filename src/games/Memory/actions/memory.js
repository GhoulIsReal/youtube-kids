import { FLIP_CARD, RESTART_GAME } from '../constants/memory';

const MemoryActions = {

    flipCard : (id) => ({
        type : FLIP_CARD,
        id
    }),

    restart : () => ({
        type : RESTART_GAME
    })

}

export default MemoryActions
