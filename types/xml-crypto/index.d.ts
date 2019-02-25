// Type definitions for xml-crypto 1.1
// Project: https://github.com/yaronn/xml-crypto
// Definitions by:  Adam Zerella <https://github.com/adamzerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type SignatureType = "append" | "prepend" | "before" | "after";

interface SignatureOptions {
    prefix: string,
    attrs: object,
    location: string,
    existingPrefixes: object,
    reference: SignatureType
}

declare class SignedXml {
    /**
     * Adds a reference to a xml element.
     */
    addReference(xpath: string, transforms: string[], digestAlgorithm: string[]): void;

    /**
     * Compute the signature of the given xml (usign the already defined settings)
     */
    computeSignature(xml:string, options?: SignatureOptions): void;

    /**
     * Sign the given SignedInfo using the key.
     */
    getSignature(): string;

    /**
     * Return just the signature part.
     */
    getSignatureXml(): string;

    /**
     * Return the original xml with Id attributes added on relevant elements.
     */
    getOriginalXmlWithIds(): string;

    /**
     * Return the original xml document with the signature in it.
     */
    getSignedXml(): string;

    getKeyInfo(prefix: string): string;

    getCanonXml(transform: string, node: string, options: object): string;

    /**
     * Ensure an element has Id attribute. If not create it with unique value.
     * Work with both normal and wssecurity Id flavour.
     */
    ensureHasId(hash: string): string;

    /**
     * Create the Signature element.
     */
    createSignature(signedInfo: string, prefix: string): void;

    /**
     * Generate the Reference nodes (as part of the signature process).
     */
    createReferences(doc: string, prefix: string): string;

    /**
     * Create the SignedInfo element.
     */
    createSignedInfo(doc: string, prefix: string): string;

    /**
     * loads the signature
     */
    loadSignature(signatureXML: string|object): void;

    /**
     * Validates the given xml document and returns true if the validation was successful.
     */
    checkSignature(xml: string): void;
}

export default SignedXml;
