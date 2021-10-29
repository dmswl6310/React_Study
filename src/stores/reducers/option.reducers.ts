import { option } from "../actions";

const initState: {
  gripper: string;
  sampleUnload: string;
} = {
  gripper: "1",
  sampleUnload: "1",
};

export default function optionReducers(
  state = initState,
  action: { type: string; payload?: any; error?: boolean }
): {
  gripper: string;
  sampleUnload: string;
} {
  switch (action.type) {
    case option.SET_GENERAL_SETTING:
      return {
        gripper: action.payload.gripper,
        sampleUnload: action.payload.sampleUnload,
      };
    default:
      return state;
  }
}
