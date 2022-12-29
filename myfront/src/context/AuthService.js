export function ajaxService(url, params = {}) {
  let accessToken = window.localStorage.getItem('ACCESS');
  let newParams = params;
  if (accessToken) {
    newParams = {
      ...params,
      headers: { ...params.headers, Authorization: `Bearer ${accessToken}` },
    };
  }
  return fetch(`${process.env.REACT_APP_API}/api` + url, newParams).then(
    (data) => {
      if (data.status === 401 && window.localStorage.getItem('REFRESH')) {
        ajaxAuthService('/token/refresh/', {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({
            refresh: window.localStorage.getItem('REFRESH'),
          }),
        }).then((data) => {
          window.localStorage.setItem('ACCESS', data.access);
          newParams = {
            ...params,
            headers: {
              ...params.headers,
              Authorization: `Bearer ${data.access}`,
            },
          };

          fetch(`${process.env.REACT_APP_API}/api` + url, newParams).then(
            (data) => {
              if (data.ok) {
                if (params.method === 'DELETE') {
                  return;
                }

                return data.json();
              }

              throw Error();
            }
          );
        });
      }
      if (data.ok) {
        if (params.method === 'DELETE') {
          return;
        }

        return data.json();
      }

      throw Error();
    }
  );
}

export function ajaxAuthService(url, params = {}) {
  return fetch(`${process.env.REACT_APP_API}/api` + url, params).then(
    (data) => {
      if (data.ok) {
        return data.json();
      }

      throw Error();
    }
  );
}