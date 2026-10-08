# Class Quest — Implementation Plan

## Product
A polished, responsive, game-like teacher appreciation website inspired by the supplied 157-slide HTML course deck. It turns the curriculum into a playable memory trail that makes the teacher feel the student listened to every class.

## Design direction
- **Design movement:** Cinematic editorial UI crossed with a soft retro game HUD — like a treasured field notebook upgraded into a constellation map.
- **Core principles:** sincere over flashy; progress should feel earned; every interaction should teach or recall one useful HTML idea; delight comes from layered micro-details, not noise.
- **Color philosophy:** deep ink/navy creates a quiet “after class” atmosphere; warm paper/cream keeps the tribute human; electric lime is the ownable signal for completed knowledge; coral and sky blue add playful checkpoint accents.
- **Layout paradigm:** a split-screen command deck on desktop: narrative/quest copy at left, interactive checkpoint panel at right, with an orbital route/timeline beneath. On mobile, it becomes a stacked journey with a persistent HUD.
- **Signature elements:** a lime “knowledge pulse” line connecting checkpoints; paper-card surfaces with tiny registration marks; a compact XP HUD that behaves like a game save file.
- **Interaction philosophy:** every click should visibly acknowledge learning. Completed checkpoints unlock with a short pulse, XP increments, and the quest log updates. Quiz feedback explains the why, not just right/wrong.
- **Animation:** restrained 180–700ms transitions; gentle constellation drift; checkpoint pulse and XP count-up; all motion disabled/reduced under `prefers-reduced-motion`.
- **Typography:** Fraunces for heartfelt display headlines and DM Sans for UI/body copy; uppercase micro-labels use generous tracking.
- **Brand essence:** “A playable thank-you note built from every lesson.” Personality: attentive, luminous, warm.
- **Brand voice:** reflective, clever, never generic. Example lines: “You didn’t just attend class. You left breadcrumbs.” / “Every tag remembered is a small way of saying: I was there.”
- **Wordmark / mark:** a small four-point “spark cursor” inside a rounded square, paired with the Class Quest wordmark.
- **Signature brand color:** knowledge lime `#d8f36a`.

## Implementation approach
- Use a no-build, dependency-light static web app served on port 3000.
- `index.html` provides semantic structure, metadata, skip link, HUD, quest map, lesson panel, quiz panel, final tribute panel, and accessible live regions.
- `styles.css` owns responsive layout, card styling, HUD visuals, motion, focus states, reduced-motion behavior, and the notebook/constellation aesthetic.
- `app.js` owns checkpoint data, progress/XP state, lesson rendering, quiz feedback, keyboard-friendly controls, replay/reset, toast feedback, and final reveal.
- `public/manus-routes.json` declares the single-page route manifest required by Webdev.
- `app.config.ts` provides a literal project logo URL for checkpoint metadata.

## Curriculum translation
The 157-slide deck is condensed into 8 quest checkpoints: foundations, semantics, text + lists, links + media, tables + forms, accessibility + SEO, practice labs, and final quiz/glossary. Each checkpoint has a short “remembered lesson,” one small interactive action, and one quiz question.

The course-profile DOCX adds a separate study area for Modules I–IV. It will provide four selectable, detailed learning cards covering the exact syllabus themes: web/HTML/CSS foundations and text styling; CSS backgrounds, box model, viewport, rulesets, classes, and Bootstrap; Flexbox, Bootstrap layout/utilities, images, margins, attributes, lists, anchors, and hyperlinks; and HTML5 multimedia plus semantic elements. A separate module-wise quiz panel will contain three questions per module, immediate explanations, retry states, score/progress, and module switching. This study area is intentionally separate from the original quick quiz so the teacher can see both course learning detail and recall practice.

## Project structure
- `index.html` — accessible page shell and all regions.
- `styles.css` — visual system and responsive behavior.
- `app.js` — quest state, interactions, original quiz, detailed Modules I–IV learning content, module quiz data, feedback, and progress.
- `public/manus-routes.json` — route declaration.
- `app.config.ts` — project metadata.
- `plan.md` / `TODO.md` — approved implementation notes and outcome criteria.
