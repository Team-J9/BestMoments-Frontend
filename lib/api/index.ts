const defaultHeaders = {
  'Content-Type': 'application/json',
};

const request = async (url: string, method: string, options: RequestOptions = {}) => {
  const { headers, body } = options;

  const config: RequestInit = {
    method,
    headers: { ...defaultHeaders, ...headers },
  };

  if (body) {
    config.body = typeof body === 'string' ? body : JSON.stringify(body);
  }

  const response = await fetch(url, config);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || '알수없는 오류로 인해 요청에 실패하였습니다.');
  }

  return data;
};

export const api = {
  get: (url: string, options?: RequestOptions) => request(url, 'GET', options),
  post: (url: string, body: any, options?: RequestOptions) => request(url, 'POST', { ...options, body }),
  patch: (url: string, body: any, options?: RequestOptions) => request(url, 'PATCH', { ...options, body }),
  delete: (url: string, options?: RequestOptions) => request(url, 'DELETE', options),
};
