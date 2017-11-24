export const API_REQUEST = 'API_REQUEST';

exports.default = store => next => action => {
  if (action.type !== API_REQUEST) {
    return next(action);
  }

  return fetch(`${action.request.API}${action.request.query}`, { method : action.request.method })
    .then(value => value.json())
    .then(payload => {
        store.dispatch({
          type: action.call.success,
          payload
        });
      })
    .catch(() => {
        store.dispatch({
          type: action.call.fail
        });
      });
};
