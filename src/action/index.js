import {
    ADD_CONTRACT
} from '../constants'


export const addContract = contract => ({
    type: ADD_CONTRACT,
    contract
});