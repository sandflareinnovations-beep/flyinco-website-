import React from 'react';

// `JSON.stringify` output is not safe to drop verbatim inside a <script> block:
// a "</script>" sequence anywhere in the data (a package description, an FAQ
// answer) would close the tag early and turn the rest of the payload into
// markup. U+2028/U+2029 are legal inside JSON strings but are line terminators
// to older JS parsers, which breaks the block a different way. Escaping all
// four keeps the payload a single well-formed JSON string.
function serialize(data) {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}

// Renders a JSON-LD structured-data script tag (server component).
// `data` may be a single schema node or an array of nodes.
const JsonLd = ({ data }) => {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialize(data) }}
    />
  );
};

export default JsonLd;
