const { test } = require("uvu");
const assert = require('uvu/assert');

const postcss = require('postcss');
const contrast = require('../index');

const fixture = ``;

const expected = ``;

const contrastTest = () => {
    return async () => {
        const result = await postcss(contrast()).process(
            fixture,
            { from: undefined }
        );

        assert.is(result.css, expected);
    }
}

test('', contrastTest())

test.run();