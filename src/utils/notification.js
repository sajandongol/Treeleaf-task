import Noty from "noty";
import '../../node_modules/noty/lib/noty.css'
import '../../node_modules/noty/lib/themes/bootstrap-v4.css'

export const showNotification = (text) => {
    new Noty({
        type: "success",
        layout: "topRight",
        theme: "bootstrap-v4",
        timeout: 5000,
        text: text,
        progressBar: false,
    }).show()
}

// export const showSuccess = (text) => {
//     return showNotification({ text, })
// }

// export const showError = (text) => {
//     return showNotification({ text, type: "error" })
// }
