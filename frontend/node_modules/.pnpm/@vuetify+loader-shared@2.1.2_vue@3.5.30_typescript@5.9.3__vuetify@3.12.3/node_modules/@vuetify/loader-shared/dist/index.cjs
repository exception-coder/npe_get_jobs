'use strict';

const node_module = require('node:module');
const path = require('upath');
const vue = require('vue');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }

const path__default = /*#__PURE__*/_interopDefaultCompat(path);

function parseTemplate(source) {
  const components = createSet(source.matchAll(/(?:var|const) (\w+) *?= *?_resolveComponent\("([\w-.]+)"\);?/gm));
  const directives = createSet(source.matchAll(/(?:var|const) (\w+) *?= *?_resolveDirective\("([\w-.]+)"\);?/gm));
  return { components, directives };
}
function createSet(matches) {
  return new Set(Array.from(matches, (i) => ({
    symbol: i[1],
    name: vue.capitalize(vue.camelize(i[2])),
    index: i.index,
    length: i[0].length
  })));
}

const require$2 = node_module.createRequire((typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.src || new URL('index.cjs', document.baseURI).href)));
const importMap = require$2("vuetify/dist/json/importMap.json");
const importMapLabs = require$2("vuetify/dist/json/importMap-labs.json");
function getImports(source, options) {
  const { components, directives } = parseTemplate(source);
  const resolvedComponents = [];
  const resolvedDirectives = [];
  const imports = /* @__PURE__ */ new Map();
  const ignore = isObject(options.autoImport) && options.autoImport.ignore || null;
  const includeLabs = isObject(options.autoImport) && options.autoImport.labs;
  const map = includeLabs ? {
    components: { ...importMap.components, ...importMapLabs.components },
    directives: importMap.directives
  } : importMap;
  if (components.size || directives.size) {
    components.forEach((component) => {
      if (ignore?.includes(component.name))
        return;
      if (component.name in importMap.components) {
        resolvedComponents.push(component);
      } else if (includeLabs && component.name in importMapLabs.components) {
        resolvedComponents.push(component);
      }
    });
    directives.forEach((directive) => {
      if (importMap.directives.includes(directive.name) && !ignore?.includes(directive.name)) {
        resolvedDirectives.push(directive);
      }
    });
  }
  resolvedComponents.forEach((component) => {
    const from = map.components[component.name].from;
    const lib = from.endsWith(".mjs") ? "lib/" : "";
    addImport(imports, component.name, component.symbol, "vuetify/" + lib + from);
  });
  resolvedDirectives.forEach((directive) => {
    addImport(imports, directive.name, directive.symbol, "vuetify/directives");
  });
  return {
    imports,
    components: resolvedComponents,
    directives: resolvedDirectives
  };
}
function addImport(imports, name, as, from) {
  if (!imports.has(from)) {
    imports.set(from, []);
  }
  imports.get(from).push(`${name} as ${as}`);
}

function generateImports(source, options) {
  const { imports, components, directives } = getImports(source, options);
  let code = "";
  if (components.length || directives.length) {
    code += "\n\n/* Vuetify */\n";
    Array.from(imports).sort((a, b) => a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0).forEach(([from, names]) => {
      code += `import { ${names.join(", ")} } from "${from}"
`;
    });
    code += "\n";
    source = [...components, ...directives].reduce((acc, v) => {
      return acc.slice(0, v.index) + " ".repeat(v.length) + acc.slice(v.index + v.length);
    }, source);
    if (!source.includes("_resolveComponent(")) {
      source = source.replace("resolveComponent as _resolveComponent, ", "");
    }
    if (!source.includes("_resolveDirective(")) {
      source = source.replace("resolveDirective as _resolveDirective, ", "");
    }
  }
  return { code, source };
}

const require$1 = node_module.createRequire((typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.src || new URL('index.cjs', document.baseURI).href)));
function resolveVuetifyBase() {
  return path__default.dirname(require$1.resolve("vuetify/package.json", { paths: [process.cwd()] }));
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
function includes(arr, val) {
  return arr.includes(val);
}
function normalizePath(p) {
  p = path__default.normalize(p);
  return /^[a-z]:\//i.test(p) ? "/" + p : p;
}
function toKebabCase(str = "") {
  return str.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
}
const defaultTags = {
  video: ["src", "poster"],
  source: ["src"],
  img: ["src"],
  image: ["xlink:href", "href"],
  use: ["xlink:href", "href"]
};
const transformAssetUrls = {
  VAppBar: ["image"],
  VAvatar: ["image"],
  VBanner: ["avatar"],
  VCard: ["image", "prependAvatar", "appendAvatar"],
  VCardItem: ["prependAvatar", "appendAvatar"],
  VCarouselItem: ["src", "lazySrc", "srcset"],
  VChip: ["prependAvatar", "appendAvatar"],
  VImg: ["src", "lazySrc", "srcset"],
  VListItem: ["prependAvatar", "appendAvatar"],
  VNavigationDrawer: ["image"],
  VParallax: ["src", "lazySrc", "srcset"],
  VToolbar: ["image"]
};
for (const [tag, attrs] of Object.entries(transformAssetUrls)) {
  attrs.forEach((attr) => {
    if (/[A-Z]/.test(attr)) {
      attrs.push(toKebabCase(attr));
    }
  });
  transformAssetUrls[toKebabCase(tag)] = attrs;
}
Object.assign(transformAssetUrls, defaultTags);

exports.generateImports = generateImports;
exports.includes = includes;
exports.isObject = isObject;
exports.normalizePath = normalizePath;
exports.resolveVuetifyBase = resolveVuetifyBase;
exports.toKebabCase = toKebabCase;
exports.transformAssetUrls = transformAssetUrls;
