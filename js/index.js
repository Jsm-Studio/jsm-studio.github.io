import { XStudio, XBlank, XSection, XContent, XList, XText, XHero, XFooter, XImage } from "https://x-titan.github.io/xstudio/index.js"
import { search, device, add, remove, scrollTo } from "https://x-titan.github.io/web-utils/index.js"
import animate from "./scrollAnimation.js"

const app = document.getElementById("app")
const jsm = new XStudio(app)
const configP = { tagName: "p" }

jsm
  .init()
  .then(() =>
    [
      XBlank({ id: "nav_panel", css: "wrapper" },
        XContent(
          XBlank({ id: "logo" }, XHero(XText("JSM"))),
          XList({ tagName: "ul", listType: "row" },
            XBlank({ tagName: "li" }, XText({ tagName: "a", href: "#start" }, "index")),
            XBlank({ tagName: "li" }, XText({ tagName: "a", href: "#about" }, "about us")),
            XBlank({ tagName: "li" }, XText({ tagName: "a", href: "#footer" }, "contact"))
          )
        )
      ),
      XSection({ id: "start", css: ["grid", "grid-2"] },
        XBlank({ css: "start_title" },
          XText({ tagName: "h1" }, "SABR")
        ),
        XBlank({ css: "start_description" },
          XText("Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br><br>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.")
        ),
        XBlank({ css: "start_lab" },
          XText("Quality\nAssurance")
        ),
        XBlank({ css: "start_card1" },
          XImage("../src/image1.jpeg")
        ),
        XBlank({ css: "start_card2" },
          XImage("https://titanium-studio.github.io/src/webp/gamepad.webp")
        )
      ),
      XSection({ id: "second", css: ["grid", "grid-2"] },
        XBlank({ css: "second_title" },
          XText({ tagName: "h2" }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit."),
          XText(configP, "Lorem ipsum, dolor sit amet consectetur adipisicing elit."),
          XBlank({ tagName: "a" },
            XImage("../src/arrow.png")
          )
        ),
        XBlank({ css: "second_image" },
          XBlank(
            XImage("https://titanium-studio.github.io/src/webp/city.webp")
          )
        )
      ),
      XContent({ id: "bodyContent" },
        XSection({ id: "cards" },
          XList({ listType: "row" },
            XBlank(XImage("../src/cog.svg"), XText("Repair")),
            XBlank(XImage("../src/pulse.svg"), XText("Diagnostic")),
            XBlank(XImage("../src/shield-half.svg"), XText("Security")),
            XBlank(XImage("../src/download.svg"), XText("Install OS")),
            XBlank(XImage("../src/checkmark-circle.svg"), XText("Quality"))
          )
        ),
        XSection()
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
                XText(configP, "Repair of computers and laptops"),
                XText(configP, "Installing Windows OS"),
                XText(configP, "Diagnostics and analysis"),
                XText(configP, "Quality Assurance")
              )
            ),
            XList({ listType: "row" },
              XBlank(
                XText({ tagName: "h3" }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit.")
              ),
              XList(
                XText(configP, "Lorem ipsum, dolor sit amet consectetur adipisicing elit."),
                XText(configP, "Lorem ipsum, dolor sit amet consectetur adipisicing elit."),
                XText(configP, "Lorem ipsum, dolor sit amet consectetur adipisicing elit.")
              )
            ),
            XList({ listType: "row" },
              XBlank(
                XText({ tagName: "h3" }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit.")
              ),
              XList(
                XText(configP, "Lorem ipsum, dolor sit amet consectetur adipisicing elit."),
                XText(configP, "Lorem ipsum, dolor sit amet consectetur adipisicing elit."),
                XText(configP, "Lorem ipsum, dolor sit amet consectetur adipisicing elit.")
              )
            )
          )
        )
      ),
      XSection({ id: "data" },
        XList({ listType: "row", css: "data-container" },
          XBlank({ css: "line-1" },
            XText(configP, "Lorem ipsum, dolor sit amet consectetur adipisicing elit.")
          ),
          XBlank({ css: "line-2" },
            XText(configP, "Lorem ipsum, dolor sit amet consectetur adipisicing elit.")
          ),
          XBlank({ css: "line-3" },
            XImage({ css: "data-image" }, "https://titanium-studio.github.io/src/webp/robot3.webp")
          ),
          XBlank({ css: "line-4" },
            XText(configP, "Lorem ipsum, dolor sit amet consectetur adipisicing elit.")
          ),
          XBlank({ css: "line-5" },
            XText(configP, "Lorem ipsum, dolor sit amet consectetur adipisicing elit.")
          ),
          XBlank({ css: "line-6" },
            XText(configP, "Lorem ipsum, dolor sit amet consectetur adipisicing elit.")
          )
        )
      ),
      XFooter({ id: "footer", css: "grid" },
        XBlank({ css: "footer_title" },
          XText({ tagName: "h3" }, "SABR Studio")
        ),
        XBlank({ css: "footer_description" },
          XText(configP, "Lorem ipsum, dolor sit amet consectetur adipisicing elit.")
        ),
        XList({ listType: "row", css: "footer_social" },
          XText("<a>Whatsapp</a>"),
          XText("<a>VKontakte</a>"),
          XText("<a>Telegramm</a>")
        ),
        XList({ listType: "row", css: "powered_power" },
          XText("Powered by <a href='htttps://titanium-studio.github.io'>Titanium Studio</a>"),
          XText("2021")
        )
      )
    ]
  )
  .then(jsm.use)
  .then(jsm.ready)
  .then(x => {
    const xbody = search.id("xbody"), nav = search.id("nav_panel"),
      hash = location.hash, logo = search("[xhero]"),
      sourceElements = search.all("[xtext]"), activeClassName = "viewActive";

    logo.onclick = () => location.href = location.origin;

    if (!device.isMobile)
      animate({
        scrollParent: xbody, activeClassName, sourceElements,
        aftercallback: () => xbody.scrollTop < (innerHeight - 64)
          ? add(nav, "transparent") : remove(nav, "transparent")
      })
    else sourceElements.forEach(x => add(x, activeClassName))
    if (hash !== "") setTimeout(() => scrollTo(search(hash)), 100)

  })
  .catch(XStudio.ERROR)