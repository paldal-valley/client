export const AjouEmailRule = {
  getMessage(field, args) {
    return `아주대 이메일 계정을 통해서만 인증이 가능합니다.`
  },
  validate(value, args) {
    // Custom regex for a phone number
    const AJOUEMAILREG = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@ajou.ac.kr*$/

    // Check for either of these to return true
    return AJOUEMAILREG.test(value)
  }
}
