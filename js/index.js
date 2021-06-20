import { XStudio, XBlank, XSection, XContent, XList, XText, XHero, XFooter, XImage } from "https://x-titan.github.io/xstudio/index.js"
globalThis.XText = XText
const jsm = new XStudio("#app")
jsm
  .init()
  .then(() =>
    [
      XBlank({ id: "nav_panel", css: "wrapper" },
        XContent(
          XBlank({id:"logo"},XHero(XText("JSM"))),
          XList({ tagName: "ul", listType: "row" },
            XBlank({ tagName: "li" }, XText({ tagName: "a" }, "index")),
            XBlank({ tagName: "li" }, XText({ tagName: "a" }, "about")),
            XBlank({ tagName: "li" }, XText({ tagName: "a" }, "cart")),
            XBlank({ tagName: "li" }, XText({ tagName: "a" }, "contact"))
          )
        )
      ),
      XSection(
        XList({ listType: "row", id: "main" },
          XText({ css: ["name"], tagName: "h1" }, "JSM-Studio"),
          XBlank({ css: "image" }, XImage("https://titanium-studio.github.io/src/jpg/robot4.jpg"))
        )
      ),
      XSection(
        XList()
      )
    ]
  )
  .then(jsm.use)
  .then(jsm.ready)
  .catch(XStudio.ERROR)