export const updateObjArray = (items, itemsId, objName, newObjProps) => {
  return items.map((user) => {
    if (user[objName] === itemsId) {
      return { ...user, ...newObjProps };
    }
    return user;
  });
};
