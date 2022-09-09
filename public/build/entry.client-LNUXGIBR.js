import {
  ClientStyleContext
} from "/build/_shared/chunk-G4R7EUEN.js";
import {
  RemixBrowser,
  __toESM,
  require_emotion_cache_cjs,
  require_emotion_react_cjs,
  require_jsx_dev_runtime,
  require_react,
  require_react_dom
} from "/build/_shared/chunk-RVCOGXXI.js";

// app/entry.client.tsx
var import_react = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());
var import_react2 = __toESM(require_emotion_react_cjs());

// app/createEmotionCache.ts
var import_cache = __toESM(require_emotion_cache_cjs());
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/entry.client.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ClientCacheProvider({ children }) {
  const [cache, setCache] = (0, import_react.useState)(createEmotionCache());
  function reset() {
    setCache(createEmotionCache());
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientStyleContext.Provider, {
    value: { reset },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, {
      value: cache,
      children
    }, void 0, false, {
      fileName: "app/entry.client.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/entry.client.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
(0, import_react_dom.hydrate)(
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientCacheProvider, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
      fileName: "app/entry.client.tsx",
      lineNumber: 30,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: "app/entry.client.tsx",
    lineNumber: 29,
    columnNumber: 3
  }, this),
  document
);
//# sourceMappingURL=/build/entry.client-LNUXGIBR.js.map
