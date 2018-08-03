const getNextItemId = (currentItemId, itemCount) => {
  if (Number(currentItemId) === itemCount - 1) {
    return '0';
  }
  return `${currentItemId + 1}`;
};

export default getNextItemId;
