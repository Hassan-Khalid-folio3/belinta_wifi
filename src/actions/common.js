export function httpAction(action) {
    const httpActionTemplate = {
      type: "",
      endpoint: null,
      method: "GET",
      payload: null,
      headers: []
    };
    
    return {
      HTTP_ACTION: Object.assign({}, httpActionTemplate, action)
    };
  }