const HTTPAsync = {
  get: (url, resType='text') => {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onload = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(new Error(xhr.statusText));
        } 
      };
      xhr.onerror = () => {
        reject(new Error(xhr.statusText));
      };
      xhr.responseType = resType;
      xhr.send(null);
    });
  }
};

const Sleep = {
  sleep: (time) => {
    return new Promise(function (resolve, reject) {
      window.setTimeout(resolve, time);
    });
  }
};

let ua = window.navigator.userAgent.toLowerCase();
let isIE = ua.match(/(msie|MSIE)/) || ua.match(/(T|t)rident/)
let isFirefox = ua.indexOf('firefox') == -1;

const UAChecker = {
  isIE: () => { return isIE},
  isFirefox: () => { return isFirefox},
  userAgent: () => { return ua},
  device: () => { 
    if(ua.indexOf('iphone') > 0 ||
        ua.indexOf('ipod') > 0 ||
        ua.indexOf('android') > 0 && 
        ua.indexOf('mobile') > 0) {
      return 'sp';
    }
    else if(ua.indexOf('ipad') > 0 || ua.indexOf('android') > 0) {
      return 'tab';
    }
    else {
      return 'other';
    }
  }
}

export { HTTPAsync, Sleep, UAChecker};