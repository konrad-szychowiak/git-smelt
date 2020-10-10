// eslint-disable-next-line max-classes-per-file
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import { terser } from 'rollup-plugin-terser';

const name = require('./package.json').main.replace(/\.js$/, '');

const DTS_FORMAT = 'dts';
const CJS_FORMAT = 'cjs';
const ESM_FORMAT = 'es';
const MIN_FORMAT = 'min';

class BaseBudle {
  constructor(format, fileExtension, sourcemap, plugins) {
    this.input = 'src/index.ts';
    this.output = {
      file: `${name}.${fileExtension}`,
      format,
      sourcemap,
    };
    this.plugins = plugins;
    this.external = (id) => !/^[./]/.test(id);
  }
}

class DTSBundle extends BaseBudle {
  constructor() {
    super(DTS_FORMAT, 'd.ts', false, [dts()]);
  }
}

class ESMBundle extends BaseBudle {
  constructor() {
    super(ESM_FORMAT, 'mjs', false /* true */, [esbuild()]);
  }
}

class CommonJSBundle extends BaseBudle {
  constructor(morePlugins, ext) {
    super(CJS_FORMAT, ext || 'js', false /* true */, [esbuild(), ...morePlugins]);
  }
}

class MinifiedCommonJSBundle extends CommonJSBundle {
  constructor() {
    super([terser()], 'min.js');
  }
}

function fromFormat(format) {
  switch (format) {
    case DTS_FORMAT: return new DTSBundle();
    case ESM_FORMAT: return new ESMBundle();
    case CJS_FORMAT: return new CommonJSBundle([]);
    case MIN_FORMAT: return new MinifiedCommonJSBundle();
    default:
      throw new Error(`Unknown format: ${format}`);
  }
}

export default [
  fromFormat('es'),
  fromFormat('cjs'),
  fromFormat('dts'),
  // fromFormat('min'),
];
