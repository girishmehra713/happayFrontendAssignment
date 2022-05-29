const presistedMiddleware = (middlewareApi) => (next) => (action) => {
  const ret = next(action);
  const store = middlewareApi.getState();

  if (store) {
    localStorage.setItem("REDUX_STORE", JSON.stringify(store));
  }

  return ret;
};

export default presistedMiddleware;
