export const option = {
  SET_GENERAL_SETTING: "option/SET_GENERAL_SETTING",
};

export const optionActions = {
  setGeneralSetting: (generalSetting: any) => ({
    type: option.SET_GENERAL_SETTING,
    payload: generalSetting,
  }),
};
