# NCU Website

The Nartstudio Comic Universe standalone website. It introduces the seven existing story worlds and points readers to Pylothouse for comic discovery; comics are not embedded or republished here.

## Pages

- `/` — NCU overview and universe directory.
- `/start-here` — reader entry points.
- `/universes` and `/universes/[slug]` — universe directory and profiles.
- `/characters` — current character-archive status.
- `/reading-order` — available reading guidance without inventing a cross-universe chronology.
- `/news` — NCU announcements.
- `/community` — fan and community guidance.
- `/about`, `/contact`, `/press`, `/licensing`, `/faq`.
- `/newsletter` — consent-based email signup, delivered only when configured.
- `/legal/[document]` — draft NCU legal notices for review before launch.

## Run locally

```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```

Validate with:

```powershell
npm run typecheck
npm run build
```

## Newsletter delivery

Configure `NCU_NEWSLETTER_WEBHOOK_URL` with an HTTPS endpoint approved to process newsletter subscriptions. The endpoint receives JSON containing the email, consent flag, timestamp, and `ncu-website` source. Optionally set `NCU_NEWSLETTER_WEBHOOK_SECRET` to send a bearer token. Without a configured endpoint, the API reports that signup is unavailable; it never reports a false success. Add hosting- or provider-level rate limiting before public launch.

## Launch decisions still needed

- Choose the canonical NCU domain and set `NEXT_PUBLIC_NCU_SITE_URL`.
- Confirm the official full name, universe publication status, ratings/content notes, and spoiler policy.
- Add approved character profiles, news, and exact Pylothouse series/chapter URLs as they become available. Current outbound comic links use Pylothouse's verified library route.
- Configure and end-to-end test the newsletter service.
- Review the draft privacy, terms, cookie, copyright, and community guidance with the responsible rights-holder and legal adviser.
- Once the domain is selected, update Nartstudio and Oubyt family switchers to point to this standalone site.

The `natoversse` address redirects to the corrected NCU route `/universes/natoverse`. Existing Nartstudio pages continue to use their current legacy URL.
