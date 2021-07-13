export async function findUserById(db, userId) {
  return db
    .collection('users')
    .findOne({
      _id: userId,
    })
    .then((user) => user || null)
}
