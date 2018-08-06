const findById = async (collection, id) => {
  const document = collection.find({ index: id });
  return await document.toArray();
};

module.exports = {
  findById,
};
