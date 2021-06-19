import { XStudio, XBlank, XSection, XContent, XList, XText, XFooter } from "https://x-titan.github.io/xstudio/index.js"
globalThis.XText = XText
const jsm = new XStudio("#app")
jsm
  .init()
  .then(() =>
    [
      XSection({},
        XList({listType: "row", id: "main" },
          XText({ css: ["name"], tagName: "h1" }, "JSM-Studio"),
          XBlank({css:"image"})
        )
      ),
      XSection()
    ]
  )
  .then(jsm.use)
  .then(jsm.ready)
  .catch(XStudio.ERROR)