import _service from './service';

export default {
  createNewModel: (callback) => {
    _service({
      method: 'post',
      url: '/models/newModel',
      headers: {
        'Content-Type': 'application/json'
      },
      transformRequest: [function (data) {
        data = JSON.stringify(data);
        return data
      }],
    }).then((res) => {
      callback(res);
    })
  },
  getModels: (params, callback) => {
    _service({
      method: 'get',
      url: '/models/getList',
      headers: {
        'Content-Type': 'application/json'
      },
      transformRequest: [function (data) {
        data = JSON.stringify(data);
        return data
      }],
      data: params
    }).then((res) => {
      callback(res);
    })
  },
  publishModel: (params, callback) => {
    _service({
      method: 'post',
      url: '/models/start',
      headers: {
        'Content-Type': 'application/json'
      },
      // transformRequest: [function (data) {
      //   data = JSON.stringify(data);
      //   return data
      // }],
      params: params
    }).then((res) => {
      callback(res);
    })
  },
  getTaskList: (params, callback) => {
    _service({
      method: 'get',
      url: '/deployments/getList',
      headers: {
        'Content-Type': 'application/json'
      },
      transformRequest: [function (data) {
        data = JSON.stringify(data);
        return data
      }],
      data: params
    }).then((res) => {
      callback(res);
    })
  },
  start: (params, callback) => {
    _service({
      method: 'post',
      url: '/activiti/start',
      headers: {
        'Content-Type': 'application/json'
      },
      // transformRequest: [function (data) {
      //   data = JSON.stringify(data);
      //   return data
      // }],
      params: params
    }).then((res) => {
      callback(res);
    })
  },
  getTaskId: (params, callback) => {
    _service({
      method: 'get',
      url: '/activiti/getTask',
      headers: {
        'Content-Type': 'application/json'
      },
      // transformRequest: [function (data) {
      //   data = JSON.stringify(data);
      //   return data
      // }],
      params: params
    }).then((res) => {
      callback(res);
    })
  },
  getForm: (params, callback) => {
    _service({
      method: 'get',
      url: '/activiti/getForm',
      headers: {
        'Content-Type': 'application/json'
      },
      // transformRequest: [function (data) {
      //   data = JSON.stringify(data);
      //   return data
      // }],
      params: params
    }).then((res) => {
      callback(res);
    })
  },
  submitFormApi: (params, callback) => {
    _service({
      method: 'post',
      url: '/activiti/postForm',
      headers: {
        'Content-Type': 'application/json'
      },
      transformRequest: [function (data) {
        data = JSON.stringify(data);
        return data
      }],
      data: params
    }).then((res) => {
      callback(res);
    })
  },
  taskHistory: (callback) => {
    _service({
      method: 'get',
      url: '/history/detail',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      callback(res);
    })
  }
}
