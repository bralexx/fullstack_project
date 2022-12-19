import init_data from '../components/Catalog/ObjectList'
import {getContentAction} from '../store/ContentReducer'
import {getFilterListAction} from '../store/FilterListReducer'
import {useSelector, useDispatch} from 'react-redux'

const contentListURL = 'http://127.0.0.1:8000/contentlist/'

function dataWrapper(res) {
  console.log('lol')
  console.log(res)
  // dispatch(getAllAction(res))
  return res;
}

export function getFunctionGetAll(dispatchF) {
  return function getAll() {
    fetch(contentListURL + 'get_all/')
    .then(res => res.json())
    .then(res => dispatchF(getContentAction(res)))
  }
}

function jsonToQueryString(json) {
    return '?' + 
        Object.keys(json).map(function(key) {
          // if (typeof json[key][Symbol.iterator] === 'function') {
          //   return encodeURIComponent(key) + '=' + encodeURIComponent(JSON.stringify(json[key]));
          // }
          return encodeURIComponent(key) + '=' +
            encodeURIComponent(json[key]);
        }).join('&');
}

export function makeGetContentRequest(dispatch_func, request) {
  // console.log(jsonToQueryString(request))
  fetch(contentListURL + `get_content/${jsonToQueryString(request)}`, {
    method: 'GET',
    headers: {
            'Content-Type': 'application/json;charset=utf-8'
    },
    // body:JSON.stringify(request)
    // body:request
  })
  .then(res => res.json())
  .then(res => dispatch_func(getContentAction(res)))
  // .then(res => {console.log(res); return res})
}

export function getFilterList(dispatch_func) {
  fetch(contentListURL + 'get_filters/')
  .then(res => res.json())
  .then(res => dispatch_func(getFilterListAction(res)))
}

export function createPost(data) {
  fetch(contentListURL + 'post_vacancy/', {
    method: 'POST',
    headers: {
            'Content-Type': 'application/json;charset=utf-8'
    },
    body:JSON.stringify(data)
  })
}