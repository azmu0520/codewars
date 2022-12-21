function domainName(url) {
  url = url.replace('https://', '');
  url = url.replace('http://', '');
  url = url.replace('www.', '');
  return url.split('.')[0];
}

domainName('http://google.ru');

// I appreciate the spirit behind this kata. However, it needs a significant rework or needs to be retired.

// Confused usage of URI, URL terminology
// Ignorance of public suffix list
// The fact that "www." is the only subdomain is not specified
// I would recommend specifying a subset of the real world functionality like

// "the only possible public suffixes are .com, .org, .ru"
// "the only possible subdomain is www."
// However, if you took these suggestions then the problem is not very interesting anyway.
