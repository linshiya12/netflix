import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice(
    {
        name:"movies",
        initialState:{
            nowPlayingMovies: null,
            trendingMovies:null,
            upcomingMovies:null,
            popularMovies:null
        },
        reducers:{
            addNowPlayingMovies : (state,action)=>{
                state.nowPlayingMovies=action.payload;
            },
            addTrendingingMovies : (state,action)=>{
                state.trendingMovies=action.payload;
            },
            addUpcomingMovies : (state,action)=>{
                state.upcomingMovies=action.payload;
            },
            addPopularMovies : (state,action)=>{
                state.popularMovies=action.payload;
            },
            
        }
    }
);

export const { addNowPlayingMovies, addPopularMovies, addTrendingingMovies, addUpcomingMovies}= moviesSlice.actions;
export default moviesSlice.reducer
