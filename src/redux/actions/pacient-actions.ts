export const LOAD_PACIENTS = "LOAD_PACIENTS";
export const LOAD_PACIENTS_SUCESS = "LOAD_PACIENTS_SUCESS";
export const LOAD_PACIENTS_FAILURE = "LOAD_PACIENTS_FAILURE";
export const SORT_PACIENT_LIST_ASC = "SORT_PACIENT_LIST_ASC";
export const SORT_PACIENT_LIST_DESC = "SORT_PACIENT_LIST_DESC";

export const loadPacients = () => ({
  type: LOAD_PACIENTS,
});

export const loadPacientsSuccess = (content: any) => ({
  type: LOAD_PACIENTS_SUCESS,
  payload: {
    data: content.data,
  },
});

export const loadPacientsFailure = (content: any) => ({
  type: LOAD_PACIENTS_FAILURE,
  payload: {
    error: content.error,
  },
});

export const sortPacientListAsc = () => ({
  type: SORT_PACIENT_LIST_ASC,
});

export const sortPacientListDesc = () => ({
  type: SORT_PACIENT_LIST_DESC,
});
