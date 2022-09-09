import {
  ClientStyleContext,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  ServerStyleContext,
  useCatch
} from "/build/_shared/chunk-44HT5C55.js";
import {
  ChakraProvider,
  Heading,
  Text,
  VStack
} from "/build/_shared/chunk-P7R2XSIP.js";
import {
  __toESM,
  require_emotion_react_cjs,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-WPOXIF2O.js";

// app/root.tsx
var import_react = __toESM(require_react());
var import_react4 = __toESM(require_emotion_react_cjs());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return { title: "to do app" };
};
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChakraProvider, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VStack, {
      h: "100vh",
      justify: "center",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, {
          children: "There was an error"
        }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 36,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
          children: error.message
        }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 37,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 38,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
          children: "Hey, developer, you should replace this with what you want your users to see."
        }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 39,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  let caught = useCatch();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
        children: "Oops! Looks like you tried to visit a page that you do not have access to."
      }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this);
      break;
    case 404:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
        children: "Oops! Looks like you tried to visit a page that does not exist."
      }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this);
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VStack, {
      h: "100vh",
      justify: "center",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, {
          children: [
            caught.status,
            ": ",
            caught.statusText
          ]
        }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 75,
          columnNumber: 9
        }, this),
        message
      ]
    }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}
var Document = (0, import_react4.withEmotionCache)(
  ({ children }, emotionCache) => {
    const serverSyleData = import_react.default.useContext(ServerStyleContext);
    const clientStyleData = import_react.default.useContext(ClientStyleContext);
    import_react.default.useEffect(() => {
      emotionCache.sheet.container = document.head;
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        emotionCache.sheet._insertTag(tag);
      });
      clientStyleData == null ? void 0 : clientStyleData.reset();
    }, []);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
      lang: "en",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
              charSet: "utf-8"
            }, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 110,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
              name: "viewport",
              content: "width=device-width,initial-scale=1"
            }, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 111,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
              rel: "preconnect",
              href: "https://fonts.googleapis.com"
            }, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 112,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
              rel: "preconnect",
              href: "https://fonts.gstaticom"
            }, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 113,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
              href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
              rel: "stylesheet"
            }, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 114,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 118,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 119,
              columnNumber: 11
            }, this),
            serverSyleData == null ? void 0 : serverSyleData.map(({ key, ids, css }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", {
              "data-emotion": `${key} ${ids.join(" ")}`,
              dangerouslySetInnerHTML: { __html: css }
            }, key, false, {
              fileName: "app/root.tsx",
              lineNumber: 121,
              columnNumber: 13
            }, this))
          ]
        }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 109,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
          children: [
            children,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 130,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 131,
              columnNumber: 11
            }, this),
            true ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 132,
              columnNumber: 53
            }, this) : null
          ]
        }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 128,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this);
  }
);
export {
  CatchBoundary,
  ErrorBoundary,
  App as default,
  meta
};
//# sourceMappingURL=/build/root-B3SWR3B3.js.map
