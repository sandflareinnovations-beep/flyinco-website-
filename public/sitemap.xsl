<?xml version="1.0" encoding="UTF-8"?>
<!--
  Presentation layer for /sitemap.xml. Purely cosmetic: crawlers ignore the
  xml-stylesheet processing instruction entirely and read the raw XML, so
  nothing here can affect indexing. It exists because Safari renders an
  unstyled application/xml document as a blank page, which reads as a broken
  sitemap to anyone spot-checking it in a browser.

  XSLT 1.0 — that is what browsers implement. Styles are inlined because the
  transform output is not served through the app's CSS pipeline.
-->
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">

    <xsl:output method="html" encoding="UTF-8" indent="yes" />

    <xsl:template match="/">
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="noindex" />
                <title>Sitemap — Flyinco Travel &amp; Tourism</title>
                <style>
                    :root {
                        --primary: #6A2B86;
                        --secondary: #1A0933;
                    }
                    * { box-sizing: border-box; }
                    body {
                        margin: 0;
                        padding: 2.5rem 1.25rem 4rem;
                        font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
                        color: #1f2937;
                        background: #f9fafb;
                        line-height: 1.5;
                    }
                    .wrap { max-width: 1100px; margin: 0 auto; }
                    h1 {
                        margin: 0 0 .5rem;
                        font-size: 1.75rem;
                        font-weight: 800;
                        letter-spacing: -.02em;
                        color: var(--secondary);
                    }
                    .lede { margin: 0 0 .25rem; color: #4b5563; font-size: .9375rem; }
                    .count {
                        display: inline-block;
                        margin-top: 1rem;
                        padding: .3rem .75rem;
                        border-radius: 999px;
                        background: rgba(106, 43, 134, .1);
                        color: var(--primary);
                        font-size: .75rem;
                        font-weight: 700;
                        letter-spacing: .08em;
                        text-transform: uppercase;
                    }
                    .scroll { overflow-x: auto; margin-top: 1.75rem; }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        background: #fff;
                        border: 1px solid #e5e7eb;
                        border-radius: .75rem;
                        overflow: hidden;
                        font-size: .875rem;
                    }
                    th {
                        text-align: left;
                        padding: .75rem 1rem;
                        background: var(--secondary);
                        color: #fff;
                        font-size: .6875rem;
                        font-weight: 700;
                        letter-spacing: .1em;
                        text-transform: uppercase;
                        white-space: nowrap;
                    }
                    td {
                        padding: .75rem 1rem;
                        border-top: 1px solid #f3f4f6;
                        vertical-align: top;
                    }
                    tr:nth-child(even) td { background: #fcfcfd; }
                    a { color: var(--primary); text-decoration: none; word-break: break-all; }
                    a:hover { text-decoration: underline; }
                    .meta { color: #6b7280; white-space: nowrap; font-variant-numeric: tabular-nums; }
                    footer { margin-top: 1.5rem; color: #6b7280; font-size: .8125rem; }
                    @media (prefers-color-scheme: dark) {
                        body { background: #0f0a18; color: #e5e7eb; }
                        h1 { color: #fff; }
                        .lede, .meta, footer { color: #9ca3af; }
                        table { background: #171226; border-color: #2a2140; }
                        td { border-top-color: #241c38; }
                        tr:nth-child(even) td { background: #1b1530; }
                        a { color: #c99bdf; }
                    }
                </style>
            </head>
            <body>
                <div class="wrap">
                    <h1>Flyinco Travel &amp; Tourism — XML Sitemap</h1>
                    <p class="lede">
                        This file lists every indexable page on flyinco.com for search engines.
                        The styling is for human readers only — crawlers read the underlying XML.
                    </p>
                    <span class="count">
                        <xsl:value-of select="count(s:urlset/s:url)" /> URLs
                    </span>

                    <div class="scroll">
                        <table>
                            <tr>
                                <th>URL</th>
                                <th>Last modified</th>
                                <th>Change freq.</th>
                                <th>Priority</th>
                            </tr>
                            <xsl:for-each select="s:urlset/s:url">
                                <tr>
                                    <td>
                                        <a href="{s:loc}"><xsl:value-of select="s:loc" /></a>
                                    </td>
                                    <td class="meta">
                                        <xsl:value-of select="substring(s:lastmod, 1, 10)" />
                                    </td>
                                    <td class="meta"><xsl:value-of select="s:changefreq" /></td>
                                    <td class="meta"><xsl:value-of select="s:priority" /></td>
                                </tr>
                            </xsl:for-each>
                        </table>
                    </div>

                    <footer>
                        Generated by Next.js at build time from
                        <code>app/sitemap.xml/route.js</code>.
                    </footer>
                </div>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
