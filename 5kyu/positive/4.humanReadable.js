function humanReadable(seconds) {
  var res = 'hh:mm:ss';
  let hr = parseInt(seconds / 3600);
  res = res.replace(/hh/g, hr);
  seconds = seconds - hr * 3600;
  let mm = parseInt(seconds / 60);
  res = res.replace(/mm/g, mm);
  seconds = seconds - mm * 60;
  res = res.replace(/ss/g, seconds);

  res = res
    .split(':')
    .map((i) => i.padStart(2, '0'))
    .join(':');
  return res;
}
