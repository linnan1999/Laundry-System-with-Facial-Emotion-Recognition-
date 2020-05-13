const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//比较两个时间大小(格式参考yyyy-mm-dd hh:mm:ss)
function compareTime(startTime,endTime){
  //结束时间大于开始时间就是true  ， 反之则为 false
  if(startTime.localeCompare(endTime) == -1){
    return true;
  }
  return false;
}

module.exports = {
  formatTime: formatTime,
  compareTime: compareTime
}

