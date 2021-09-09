export function manageFriends(state, action){
    switch(action.type) {
        case "ADD_FRIEND":
            return {friends: [...state.friends, {hometown: action.friend.hometown, id: action.friend.id, name: action.friend.name}]};
    case "REMOVE_FRIEND":
      const newState = state.friends.filter(
        (friend) => friend.id !== action.id
      );
      return { friends: newState };
        default: return state
    }

}


// export function managePresents(state, action){
//     switch(action.type) {
//         case "INCREASE":
//             return {numberOfPresents: state.numberOfPresents + 1 };
//         default: return state;
//     }

// }