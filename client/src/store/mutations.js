//是否认证的的函数
export const setIsAuthenticated = (state, data) => {
  state.isAuthenticated = data;
}
//用户状态的改变
export const setUser = (state, data) => {
  state.user = data;
  console.log(data)
}

