import {types, destroy, getParent} from "mobx-state-tree";

const User  = types
  .model({
    name: types.optional(types.string, ''),
    isActive: types.optional(types.boolean, false),
    id: types.optional(types.number, 1),
  })
  .actions(self => ({
    setName(newName) {
      self.name = newName
    },
    toggleActiveStatus(){
      self.isActive = !self.isActive;
    },
    delete() {
      getParent(self, 2).deleteUser(self);
    }
  }));

export default User;
