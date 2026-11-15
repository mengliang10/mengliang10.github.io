# Marketing Operating Lab

Three standalone interactive browser applications with one shared state model:

1. **360° Marketing** (`360.html`): market/segment thesis, seven-workstream six-month budget mix, outcome scenario and journey ownership.
2. **PR & Reputation** (`pr.html`): editorial pitch builder, weighted relevance score, event contribution model and response safeguards.
3. **Digital Marketing** (`dm.html`): channel attribution table, lead funnel, modelled CAC/contribution, controlled-test examples.

The hub is `index.html`. Live GitHub Pages path: https://mengliang10.github.io/marketing-lab/

## Scope and caveats

- HNWI luxury travel and premium flexible-workspace examples are *illustrative*. They are **not** proprietary results from Intriq, Industrious, or any other employer.
- Amounts and conversion rates are editable teaching examples, not predictions. Source attribution is not proof of incrementality.
- 360° Marketing includes PR and digital as integrated workstreams; the dedicated pages delve deeper.
- No JavaScript framework, API keys, analytics, CDNs, sign-in or third-party dependencies.
- Data are stored only in the browser's `localStorage` (key `marketing-lab-v1`); reset removes scenario values. Download JSON to save or compare snapshots.
- Serve locally with `python -m http.server 8000` in the repository root or open the HTML pages directly in a browser. All relative links are self-contained.
- The application neither sends data externally nor connects to advertising/CRM platforms; uploaded exports are handled entirely on the local device.

## Executive learning sequence

First, define the customer problem and market segments in the **360° Planner**. Next, establish credible proof and reputation narratives in the **PR Workbench**. Finally, use the **Digital Performance Lab** to challenge lead quality, sales handoffs, gross contribution and acquisition costs. Return to the 360° allocation only after validating capacity, actual results and operating ownership.

## Design controls

- Scenario controls are labelled, figures are qualified, and numeric inputs are nonnegative.
- Calculators use deterministic arithmetic with zero-denominator protection.
- Local-only state sharing enables moving between modules without losing inputs.
- No claimed accuracy for future demand, HNWI wealth distributions, unit economics or media outcomes.

## Files

- `assets/style.css`: accessible responsive shared design with print rules.
- `assets/core.js`: calculations and interactive modules.
- `index.html`, `360.html`, `pr.html`, `dm.html`: individual app entries.

## Acceptance checks

1. Load each HTML directly and via GitHub Pages; links and shared CSS/JS should resolve.
2. Change industry and budget on one page; confirm they persist across modules.
3. Change each numeric input; confirm derived values update and no divide-by-zero appears.
4. Generate and copy the PR pitch; export scenario JSON; reset.
5. Check small-screen layout, tab navigation and print.
