export const LOAD_INTERNSHIPS = "LOAD_INTERNSHIPS";
export const LOAD_INTERNSHIPS_SUCCESS = "LOAD_INTERNSHIPS_SUCCESS";
export const LOAD_INTERNSHIPS_FAILURE = "LOAD_INTERNSHIPS_FAILURE";

export const loadInternships = () => ({
  type: LOAD_INTERNSHIPS,
});

export const loadInternshipsSuccess = (content: any) => ({
  type: LOAD_INTERNSHIPS_SUCCESS,
  payload: {
    data: content.data,
  },
});

export const loadInternshipsFailure = (content: any) => ({
  type: LOAD_INTERNSHIPS_FAILURE,
  payload: {
    error: content.error,
  },
});
