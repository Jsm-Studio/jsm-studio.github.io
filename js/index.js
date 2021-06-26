import { XStudio, XBlank, XSection, XContent, XList, XText, XHero, XFooter, XImage } from "https://x-titan.github.io/xstudio/index.js"
import animate from "./scrollAnimation.js"

const app = document.getElementById("app")
const jsm = new XStudio(app)
jsm
  .init()
  .then(() =>
    [
      XBlank({ id: "nav_panel", css: "wrapper" },
        XContent(
          XBlank({ id: "logo" }, XHero(XText("JSM"))),
          XList({ tagName: "ul", listType: "row" },
            XBlank({ tagName: "li" }, XText({ tagName: "a", href: "#main" }, "index")),
            XBlank({ tagName: "li" }, XText({ tagName: "a", href: "#about" }, "about us")),
            XBlank({ tagName: "li" }, XText({ tagName: "a", href: "" }, "cart")),
            XBlank({ tagName: "li" }, XText({ tagName: "a", href: "#footer" }, "contact"))
          )
        )
      ),
      XSection(
        XList({ listType: "row", id: "main" },
          XText({ css: ["name"], tagName: "h1" }, "JSM-Studio"),
          XBlank({ css: "image" },
            XImage("https://titanium-studio.github.io/src/jpg/robot4.jpg")
          )
        )
      ),
      XSection({ id: "about" },
        XContent(
          XText({ tagName: "h1" }, "Modern problems require modern solutions"),
          XList(
            XList({ listType: "row" },
              XBlank(
                XText({ tagName: "h3" }, "We offer our services")
              ),
              XList(
                XText({ tagName: "p" }, "Repair of computers and laptops"),
                XText({ tagName: "p" }, "Installing Windows OS"),
                XText({ tagName: "p" }, "Diagnostics and analysis"),
                XText({ tagName: "p" }, "Quality Assurance")
              )
            ),
            XList({ listType: "row" },
              XBlank(
                XText({ tagName: "h3" }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit.")
              ),
              XList(
                XText({ tagName: "p" }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit."),
                XText({ tagName: "p" }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit."),
                XText({ tagName: "p" }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit.")
              )
            ),
            XList({ listType: "row" },
              XBlank(
                XText({ tagName: "h3" }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit.")
              ),
              XList(
                XText({ tagName: "p" }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit."),
                XText({ tagName: "p" }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit."),
                XText({ tagName: "p" }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit.")
              )
            )
          )
        )
      ),
      XSection({ id: "data" },
        XList({ listType: "row", css: "data-container" },
          XBlank({ css: "line-1" },
            XText({ tagName: "p" }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit.")
          ),
          XBlank({ css: "line-2" },
            XText({ tagName: "p" }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit.")
          ),
          XBlank({ css: "line-3" },
            XImage({ css: "data-image" }, "https://titanium-studio.github.io/src/webp/robot3.webp")
          ),
          XBlank({ css: "line-4" },
            XText({ tagName: "p" }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit.")
          ),
          XBlank({ css: "line-5" },
            XText({ tagName: "p" }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit.")
          ),
          XBlank({ css: "line-6" },
            XText({ tagName: "p" }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit.")
          )
        )
      ),
      XFooter({ id: "footer" })
    ]
  )
  .then(jsm.use)
  .then(jsm.ready)
  .then(x => {
    let xbody = document.getElementById("xbody"), navpanel = document.getElementById("nav_panel")
    animate({
      scrollParent: xbody,
      activeClassName: "viewActive",
      sourceElements: document.querySelectorAll("[xtext]"),
      aftercallback: e => {
        xbody.scrollTop < (window.innerHeight - 64) ? navpanel.classList.add("transparent") : navpanel.classList.remove("transparent")
      }
    })

  })
  .catch(XStudio.ERROR)