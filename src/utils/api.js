import fetch from './fetch';

export function getList(params) {
  return fetch({
    url: '/topics',
    method: 'GET',
    params
  });
}
