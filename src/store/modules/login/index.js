const login = {
  states: {
    name: '',
    password: '',
    user: {}
  },
  getter: {},
  actions: {
    login: ({commit, state, dispatch}, config = {}) => {
      debugger
      //保存用户信息
      return new Promise((resolve, reject) => {
        // post(config.url, config.user).then(res => {
        //   //保存token信息
        //   localStorage.setItem("almToken", res.data.token);
        //   //当前时间
        //   let date = new Date().getTime();
        //   localStorage.setItem("almTokenTime", date);
        //   //保存userId
        //   localStorage.setItem("user", JSON.stringify(res.data.user));
        //   //国际化   默认中文
        //   let i18n = localStorage.getItem("i18n");
        //   localStorage.setItem("i18n", i18n ? i18n : "cn");
        //   //保存用户信息
        //   commit("setUser", (state, {
        //     user: res.data.user
        //   }));
        //   resolve(res);
        // }).catch(err => {
        //   resolve(err);
        // })
      })
    },
  },
  mutations: {
    setUser(state, action) {
      state.user = action.user
    }
  }
}
export default login
