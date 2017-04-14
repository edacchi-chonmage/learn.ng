import { calcActionTypes, TCalcActions } from './calc.action';
import { ICalc } from '../../declarations/common';

const initialState: ICalc = {
  count: 0,
  text: '0',
  mode: 'PLS',
  isFirstPush: true
};

export const calcReducer = (state = initialState, action: TCalcActions): ICalc => {
  switch (action.type) {
    case calcActionTypes.SET_COUNT: {
      const count = action.payload;

      return Object.assign({}, state, {
        count,
        text: String(count)
      });
    }

    case calcActionTypes.SET_TEXT: {
      let text: string = state.text;

      if (state.isFirstPush) {
        text = String(action.payload);
      } else {
        text += String(action.payload);
      }

      console.log('text:', text);

      return Object.assign({}, state, {
        text,
        isFirstPush: false
      });
    }

    case calcActionTypes.CHANGE_MODE: {
      let mode: string;

      switch (action.payload) {
        case '+':
        default: {
          mode = 'PLS';
          break;
        }

        case '-': {
          mode = 'MNS';
          break;
        }

        case '*': {
          mode = 'TIM';
          break;
        }

        case '/': {
          mode = 'DIV';
          break;
        }

        case '=': {
          mode = 'FIN';
          break;
        }
      }

      console.log('mode:', mode);

      return Object.assign({}, state, {
        mode,
        isFirstPush: true
      });
    }

    default: {
      return state;
    }
  }
};
