import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "add",
    initialState: { adult: 0, children: 0, infant: 0 , showMenuPop : true, showMenuPop2 : true},
    reducers: {


        increaseCount(state, actions) {
            if(actions.payload === "adult")
                state.adult++;
            else if(actions.payload === "children")
                state.children++;
            else if(actions.payload === "infant")
                state.infant++;
        },

        decrementCount(state, actions) {
            if(actions.payload === "adult")
                state.adult > 0 && state.adult--
            else if(actions.payload === "children")
                state.children > 0 && state.children--
            else if(actions.payload === "infant")
                state.infant > 0 && state.infant--
        },
        showMenu(state){
            state.showMenuPop = !state.showMenuPop;
        },
        hideMenu(state){
            state.showMenuPop = true;
        },
        showMenu2(state){
            state.showMenuPop2 = !state.showMenuPop2;
        },
        hideMenu2(state){
            state.showMenuPop2 = true;
        }
    }
})



const store = configureStore({ reducer: { counter: counterSlice.reducer } });

export default store;
export const counterActions = counterSlice.actions;