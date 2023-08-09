# docsite

[This website](https://www.datamixin.com) is built using
[Docusaurus 2](https://v2.docusaurus.io). Pages & components are written in
TypeScript, the styles in vanilla CSS with variables using
[CSS Modules](https://github.com/css-modules/css-modules).

## Local development

```script
cd src/main/website
cp default.env .env
npm install
npm run start
```

This command starts a local development server and open up a browser window.
Most changes are reflected live without having to restart the server.

## Build for production

```script
npm run build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service. For that purpose, you can also
use:

```script
npm run serve
```

# Contributing

We are always happy to have contributions to the project whether it is
documentation, bug reports, blog posts, or feedback. To get started with
contributing:

- Have a look through
  [GitHub issues](https://github.com/datamixin/docsite/issues).
- Read this section for guidelines.
- Create a [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
  of docsite and submit a pull request with your proposed changes.

## Bugs and features

Raise a [GH issue](https://github.com/questdb/questdb.io/issues/new/choose) for
bug report, update request, or tutorial proposal using the respective template.

## LICENSE

Distributed under the GPLv3 License. Read more [here](https://www.gnu.org/licenses/gpl-3.0.html).