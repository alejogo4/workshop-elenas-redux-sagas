export const FETCH_GET_CHARACTERS = 'FETCH_GET_CHARACTERS';
export const RESPONSE_GET_CHARACTERS = 'RESPONSE_GET_CHARACTERS';
export const ERROR = 'ERROR';
export const LOADING = 'LOADING';

export const fetch_characters = () => ({
  type: FETCH_GET_CHARACTERS,
});

export const response_characters = data => ({
  type: RESPONSE_GET_CHARACTERS,
  data,
});

export let error = data => ({
  type: ERROR,
  data,
});

export let loading = data => ({
  type: LOADING,
  data,
});
