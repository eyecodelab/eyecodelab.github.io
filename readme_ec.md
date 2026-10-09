Build:
php -S localhost:8000
Referral tracking (AI Research program)
---------------------------------------
- Share `https://eyecodetech.com/ai-research-program.html?ref=MKT01` (replace the code for each intern).
- `js/program-referral.js` stores only `{code, firstSeen}` under `eyecode_referral`. Codes allow 1–64 ASCII letters, numbers, underscores, or hyphens. The first valid referral wins for 30 days; later visits do not extend its expiry. Expired referrals are not sent to the form.
- Google Form prefill is configured with `GOOGLE_FORM_REFERRAL_ENTRY = 'entry.1896336087'` in `js/program-referral.js`. Valid referrals are appended to the full application form URL. Without an active referral, Apply links retain their original URL.
- In the browser console, run `window.eyeCodeReferralDebug()` (or `EyeCodeReferral.debug()`) to inspect `code`, `firstSeen`, `expiresAt` (Unix milliseconds), `valid`, `expired`, and `configured`. Nothing is displayed or logged automatically.
- Manual check: visit `ai-research-program.html?ref=MKT01`, inspect the helper, refresh/reopen the browser, then visit `?ref=MKT02`. MKT01 should remain and both Apply buttons should open a URL containing `entry.1896336087=MKT01`. Test MKT02 in a fresh browser profile. To simulate expiry, set the stored `firstSeen` to `Date.now() - 31 * 86400000`, then reload with `?ref=MKT02`; MKT02 should replace it. Remove `eyecode_referral` and reload without `ref` to test normal Apply links.
- The incoming `ref` parameter is removed from the address bar before analytics loads; other query parameters and anchors remain. Apply analytics use the normal form URL without the referral. The application form is opened only on user action.
- Attribution is limited to the same browser profile and origin. Clearing site data/private browsing or blocking storage prevents persistence across visits; no fingerprinting or cross-device tracking is used.
