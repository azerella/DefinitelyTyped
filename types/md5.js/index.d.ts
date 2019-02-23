// Type definitions for md5.js 1.3
// Project: https://github.com/crypto-browserify/md5.js
// Definitions by:  Adam Zerella <https://github.com/adamzerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare class MD5 extends Transform{
    constructor();

    public update(input: string): MD5;

    public digest(input: string): Buffer;
}

export = MD5;
