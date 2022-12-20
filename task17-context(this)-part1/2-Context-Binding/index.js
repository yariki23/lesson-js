/*
func message
in: undefined
out: string

func showPrompt 
in: num
out: undefined

func showDeferredPrompt 
in: undefined
out: undefined

*/

export const callbackPrompt = {
  message: "Введите номер телефона",
  showPrompt: function () {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDeferredPrompt: function (delay) {
    setTimeout(this.showPrompt.bind(this), delay);
  },
};
