export interface RootState {
  InfoPropertyReducer: {
    property: {
      name: string;
      description: string;
      privileges: string;
      image: any;
      status: boolean;
      info: {
        valueDay: number;
        maxPeoples: number;
        cleaningRate: number;
        securityDeposit: number;
        totalValue: number;
        district: string;
        address: string;
      }
    }
  }
}

const INITIAL_STATE = {
  property: {}
}

function InfoPropertyReducer(state = INITIAL_STATE, action: { type: any; value: Object; }) {
  switch (action.type) {
    case 'UPDATE_PROPERTY':
      return { ...state, property: action.value };
    default:
      return state;
  }
}

export function UPDATE_PROPERTY(value: Object) {
  return { type: 'UPDATE_PROPERTY', value };
};

export default InfoPropertyReducer;