export default async ({ from, store, route, redirect, notifyBundle}) => {

  if (!store.getters['auth/GET_USER'].walletAddress) {
    if (process.client)
      notifyBundle.notifyWarning('도아주에 유저 지갑 정보가 존재하지 않습니다. 먼저 정보 등록을 해주세요.')
    return redirect('/mypage/account')
  }

  if (store.getters['auth/GET_USER'].walletAddress !== store.getters['block-sync/WEB3_META'].coinbase) {
    if (process.client) {
      notifyBundle.notifyWarning('도아주 유저 지갑 정보와 메타마스크 지갑 정보가 일치하지 않습니다. 올바른 계정으로 전환해주세요.')
      return redirect(from)
    } else {
      // 마지막 url path 제거
      const pathWords = route.path.split('/')
      pathWords.pop()

      return redirect(pathWords.join('/'))
    }
  }
}
