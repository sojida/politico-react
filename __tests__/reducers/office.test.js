import officeReducer from '../../src/reducers/office.reducers';
import actions from '../../src/constants/actionTypes';

describe('office reducers', () => {
  it('should return the initial state', () => {
    expect(officeReducer(undefined, {})).toEqual({
      loading: false,
      officeList: [],
      selectedOffice: [],
    });
  });

  it('should handle BEGIN_LOADING', () => {
    expect(
      officeReducer([], {
        type: actions.BEGIN_LOADING,
      })
    ).toEqual({
      loading: true,
    });
  });

  it('should handle FETCH_OFFICE_SUCCESS', () => {
    expect(
      officeReducer([], {
        type: actions.FETCH_OFFICES_SUCCESS,
        offices: [{ office: 'PDP' }],
      })
    ).toEqual({
      loading: false,
      officeList: [{ office: 'PDP' }],
    });
  });

  it('should handle FETCH_OFFICES_FAILURE', () => {
    expect(
      officeReducer([], {
        type: actions.FETCH_OFFICES_FAILURE,
      })
    ).toEqual({
      loading: false,
    });
  });

  it('should handle FETCH_OFFICE_SUCCESS', () => {
    expect(
      officeReducer([], {
        type: actions.FETCH_OFFICE_SUCCESS,
        office: [{ office: 'PDP' }],
      })
    ).toEqual({
      loading: false,
      selectedOffice: [{ office: 'PDP' }],
    });
  });

  it('should handle FETCH_OFFICE_FAILURE', () => {
    expect(
      officeReducer([], {
        type: actions.FETCH_OFFICE_FAILURE,
      })
    ).toEqual({
      loading: false,
    });
  });
});
