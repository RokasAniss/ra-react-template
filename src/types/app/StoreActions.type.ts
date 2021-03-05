import { Action as ReduxAction } from 'redux';

/**
 * An *Action* is a plain object that represents an intention to change the
 * state. Actions must have a `type` field that indicates the type of action being
 * performed. Also an optional field `meta` can be used to pass in data for redux side
 * effects such as `redux-saga`.
 * An *Action* does not update the store object as it does not have a `payload` field
 */
export type Action<Type, Meta = void> = ReduxAction<Type> & { meta?: Meta };

/**
 * A *PayloadAction* is an extended version of *Action* which can update store state, by providing
 * data to the `payload` field.
 */
export type PayloadAction<Type, Payload, Meta = void> = Action<Type, Meta> & {
  readonly payload: Payload;
};
