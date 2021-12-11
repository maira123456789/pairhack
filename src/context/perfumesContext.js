import React, { useReducer } from "react";
import axios from "axios";

import { CASE_GET_ONE_PERFUME, CASE_GET_PERFUMES } from "../helpers/cases";
import { PERFUMES_API } from "../helpers/api";

export const perfumesContext = React.createContext();

const INIT_STATE = {
  perfumes: [],
  onePerfume: null,
  perfumesTotalCount: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_PERFUMES:
      return {
        ...state,
        perfumes: action.payload.data,
        perfumesTotalCount: action.payload.headers["x-total-count"],
      };
    case CASE_GET_ONE_PERFUME:
      return { ...state, onePerfume: action.payload.data };
    default:
      return state;
  }
};

const PerfumesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createPerfume(newPerfume) {
    await axios.post(PERFUMES_API, newPerfume);
    getPerfumes();
  }
  async function getPerfumes() {
    let result = await axios.get(`${PERFUMES_API}${window.location.search}`);
    console.log("getPerfumes result", result);
    dispatch({
      type: CASE_GET_PERFUMES,
      payload: result,
    });
  }

  async function getOnePerfume(id) {
    let result = await axios.get(`${PERFUMES_API}/${id}`);
    dispatch({
      type: CASE_GET_ONE_PERFUME,
      payload: result,
    });
  }

  async function deletePerfume(id) {
    await axios.delete(`${PERFUMES_API}/${id}`);
    getPerfumes();
  }

  async function updatePerfume(id, editedPerfume) {
    await axios.patch(`${PERFUMES_API}/${id}`, editedPerfume);
    getPerfumes();
  }

  return (
    <perfumesContext.Provider
      value={{
        perfumes: state.perfumes,
        onePerfume: state.onePerfume,
        perfumesTotalCount: state.perfumesTotalCount,
        getPerfumes,
        getOnePerfume,
        deletePerfume,
        updatePerfume,
        createPerfume,
      }}
    >
      {children}
    </perfumesContext.Provider>
  );
};
export default PerfumesContextProvider;
