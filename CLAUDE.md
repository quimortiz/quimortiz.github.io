# quimortiz.github.io

Personal Jekyll website, hosted on GitHub Pages. Source lives on `master`; the
built site is published to the `gh-pages` branch (do not hand-edit `gh-pages`,
it's regenerated and force-pushed).

## Build / preview

```bash
bundle install
bundle exec jekyll build          # build once, output in _site/
bundle exec jekyll serve          # preview at http://localhost:4000
```

`Gemfile.lock` is gitignored — regenerate it locally, don't commit it.

Always run a build and check for errors/warnings before deploying.

## Deploying

```bash
git add -A && git commit -m "..." && git push origin master
./deploy.sh          # builds the site, force-pushes it to gh-pages, prompts y/N
```

`deploy.sh` refuses to run if there are uncommitted or untracked changes —
commit everything on `master` first. It force-pushes `gh-pages`, so nothing
there should be treated as precious.

## News feed (`_data/news.yml`)

**YAML gotcha**: any `what:` value containing a literal `: ` (colon followed
by a space) — e.g. a paper title like `db-ECBS: Interaction-Aware ...` —
breaks YAML parsing ("mapping values are not allowed in this context") unless
the whole value is wrapped in quotes. If it also contains `<a href="...">`
double quotes, wrap the value in double quotes and use single quotes for the
href attributes inside, e.g.:
```yaml
- what: "Title: Subtitle. <a href='https://...'>link</a>."
```
Validate with `ruby -ryaml -e "YAML.load_file('_data/news.yml')"` before
building.

Entries are rendered on `index.md`, grouped by year (parsed from `when:
MM/YYYY`) via a Liquid loop — see the `{% assign year = ... %}` block there.

## Navigation (`_includes/navigation.html`)

Controlled by `header_pages` in `_config.yml`. If `header_pages` is empty,
the nav must render empty — don't fall back to `site.pages`, since that
lists every page on the site (About, Blog, every project page, etc.), which
looks broken.

## No service worker

There used to be a `sw.js` PWA cache with a cache-first strategy that made
visitors see stale content for up to a day after a deploy. It was removed
(replaced with a one-time self-unregistering script, then the registration
call was deleted from `_includes/footer.html`). Don't reintroduce offline
caching unless there's a real need — if you do, use a network-first or
stale-while-revalidate strategy, never plain cache-first for the homepage.

## CV link

The homepage links to `assets/cv.pdf`. The actual CV source lives in a
separate repo (`quimortiz/cv`, LaTeX). When the CV changes, copy the newly
built `cv_full.pdf` from that repo over `assets/cv.pdf` here, rebuild, and
deploy.
