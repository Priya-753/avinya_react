import PropTypes from 'prop-types';
import * as CONSTANTS from './constants.js'

export const tagPropType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.string,
  PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
  PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
  ]))
]);

export const TransitionPropTypeKeys = [
  'in',
  'mountOnEnter',
  'unmountOnExit',
  'appear',
  'enter',
  'exit',
  'timeout',
  'onEnter',
  'onEntering',
  'onEntered',
  'onExit',
  'onExiting',
  'onExited',
];

export const InputTypes = [
    CONSTANTS.TEXT,
    CONSTANTS.CHECKBOX,
    CONSTANTS.RADIO,
    CONSTANTS.EMAIL,
    CONSTANTS.PASSWORD,
    CONSTANTS.SELECT,
    CONSTANTS.MULTI_SELECT,
    CONSTANTS.TEXT_AREA,
    CONSTANTS.FILE,
    CONSTANTS.URL,
    CONSTANTS.NUMBER,
    CONSTANTS.DATE,
    CONSTANTS.TIME,
    CONSTANTS.COLOR,
    CONSTANTS.SEARCH,
    CONSTANTS.RANGE
];