# remoteimpactjobs.eu

Static site for "Remote Impact Jobs in Marketing & Communications". No build step.
Vercel: Framework preset "Other", Root Directory `remoteimpactjobs-site`.

## Pages
- `/` start page, `/jobs` all open jobs with filters, `/issues` archive, `/issues/1` single issue, `/about`
- `/impressum`, `/datenschutz`
- Clean URLs and the `/issues/:n` rewrite are set in `vercel.json`.

## Weekly update
Only `data.js` changes: add the new issue at the top of `ISSUES` and its jobs to `JOBS`.
Jobs with a past `deadline` disappear from `/jobs` automatically and show as "Closed" in their issue.

## Sign-up
Replace the block between `<!-- SIGNUP -->` and `<!-- /SIGNUP -->` in `index.html` and `about.html`
with the beehiiv embed once the account is unlocked, and update the Datenschutz page.
