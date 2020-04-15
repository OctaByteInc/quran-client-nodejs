const multiURL = (url, cursor, limit) => {
  if (cursor) {
    url += `?cursor=${cursor}`;
    if (limit) {
      url += `&limit=${limit}`;
    }
  } else if (limit) {
    url += `?limit=${limit}`;
  }

  return url;
};

module.exports = multiURL;
