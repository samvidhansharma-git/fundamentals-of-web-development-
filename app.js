const checkpoints = [
  { stamp: 'START HERE', kicker: 'HTML / 01', title: 'The page has a skeleton.', summary: 'You remembered that every page starts with a quiet promise: doctype, html, head, body. Structure first. Magic second.', memory: '“A browser builds a DOM tree from your markup. That means order matters.”', aside: 'Before the tags, there was a page waiting to be understood.', footnote: 'Click the pieces into the right order to wake this lesson.', xp: 40, action: 'structure' },
  { stamp: 'MEANING MATTERS', kicker: 'HTML / 02', title: 'The tag should say what it does.', summary: 'Header, nav, main, section, article, aside, footer — you heard that semantic HTML is a map for people and machines.', memory: '“Use a tag whose name describes its purpose. A div is not a personality.”', aside: 'You learned that good structure can speak before the styles arrive.', footnote: 'Choose the tag that tells the browser: this is the main story.', xp: 50, action: 'semantic' },
  { stamp: 'THE QUIET DETAILS', kicker: 'HTML / 03', title: 'Text has a hierarchy.', summary: 'Headings, paragraphs, strong, em, lists, blockquotes, code — the lesson was not just what words say, but how their weight guides a reader.', memory: '“One clear h1. Then h2, h3 — in order. Let the outline breathe.”', aside: 'You noticed that clarity is a design decision, even in plain text.', footnote: 'Build a tiny heading ladder from the choices.', xp: 50, action: 'hierarchy' },
  { stamp: 'MAKE THE LEAP', kicker: 'HTML / 04', title: 'A link is a promise.', summary: 'You connected pages with a, gave images alt text, and met audio, video, picture, and iframe — the doorway tags.', memory: '“Meaningful link text tells someone where they are going before they go.”', aside: 'You learned how a page reaches beyond itself without losing its way.', footnote: 'Give this link a destination that a screen reader can understand.', xp: 50, action: 'link' },
  { stamp: 'INPUT / OUTPUT', kicker: 'HTML / 05', title: 'Forms listen back.', summary: 'Tables for data. Labels for inputs. Buttons with a purpose. Selects, textareas, fieldsets — small controls with big responsibility.', memory: '“A button submits by default. Set its type on purpose.”', aside: 'You learned that a good interface is a conversation, not a decoration.', footnote: 'Set this button’s type so it does only what you mean.', xp: 60, action: 'form' },
  { stamp: 'EVERYONE IS INVITED', kicker: 'HTML / 06', title: 'Accessible is not extra.', summary: 'Alt text, logical order, labels, one h1, a real title, a viewport, compressed media — you remembered the practices that let more people enter.', memory: '“Prefer native tags. Add ARIA lightly, when no native tag fits.”', aside: 'You saw the hidden work that makes a page welcoming.', footnote: 'Pick the attribute that gives an image its voice.', xp: 60, action: 'accessibility' },
  { stamp: 'LAB DAY', kicker: 'HTML / 07', title: 'Practice turns syntax into instinct.', summary: 'A portfolio skeleton, Flexbox, a quick quiz, a glossary — the final labs were invitations to make the knowledge yours.', memory: '“Build it once. Explain it once. Then you really know it.”', aside: 'You kept the lab moments, not just the definitions.', footnote: 'Drop the right tag into this mini portfolio skeleton.', xp: 70, action: 'lab' },
  { stamp: 'FOR YOUR TEACHER', kicker: 'HTML / 08', title: 'The best output is gratitude.', summary: 'You made it to the final checkpoint. The course became a trail of details, and every detail became a thank-you.', memory: '“HTML is a language. Listening is a practice.”', aside: 'This is where the lesson turns into a letter.', footnote: 'Unlock the final message by collecting your last spark.', xp: 100, action: 'reveal' }
];

const quizzes = [
  { q: 'Which tag gives the main navigation its meaning?', answers: ['<div>', '<nav>', '<section>', '<menu>'], correct: 1, good: 'Exactly. <nav> tells people and assistive technology: these links are navigation.', try: 'Close — the semantic tag is <nav>. It gives the navigation its own clear meaning.' },
  { q: 'What does alt text do for an image?', answers: ['Changes its size', 'Adds a tooltip only', 'Describes it when it cannot be seen', 'Loads it faster'], correct: 2, good: 'Yes. Alt text gives the image a voice when vision, loading, or context gets in the way.', try: 'Not this time. alt describes the image for people who cannot see it or when it does not load.' },
  { q: 'Which element is a void element?', answers: ['<p>', '<article>', '<img>', '<button>'], correct: 2, good: 'Right. <img> has no closing tag or content inside — it is a void element.', try: 'The answer is <img>. It is a void element, like <br> and <meta>.' },
  { q: 'Why do labels belong with form inputs?', answers: ['For color', 'So people know what to enter', 'To make them submit', 'To hide the value'], correct: 1, good: 'You remembered. Labels make forms clearer and more accessible to everyone.', try: 'Labels explain the input’s purpose. They are part of an accessible form, not decoration.' }
];

const modules = [
  {
    number: 'MODULE 01', title: 'Introduction to Web Development & HTML Basics', subtitle: 'Start with the web’s shared language.',
    summary: 'A web page is a collaboration between structure and presentation. HTML gives content meaning and order; CSS controls how that meaning looks. Together they turn a browser window into an understandable interface.',
    concepts: [
      ['Web basics', 'Web development combines documents, styles, scripts, browsers, servers, and networks. HTML describes the content, CSS presents it, and JavaScript later adds behaviour.'],
      ['Syntax + debugging', 'Write small, valid changes; read the browser console and inspector; isolate one problem at a time; then tweak and refresh. Debugging is a loop of observation, hypothesis, change, and verification.'],
      ['HTML structure', 'A document begins with <!doctype html>, then html, head, and body. Headings organise the outline, paragraphs hold readable text, container elements group content, and buttons invite an action.'],
      ['CSS text styling', 'Use text-align, hexadecimal colours, font-family, font-size, font-style, font-weight, and text-decoration to create hierarchy without changing the content itself.']
    ],
    code: '<h1>My portfolio</h1>\n<p class="intro">A short introduction.</p>\n<button type="button">Explore</button>',
    lab: 'Course lab connection: build a simple portfolio with HTML, then style its headings, paragraph rhythm, colour, and button states with CSS.',
    questions: [
      { q: 'Which language gives a page its structure and meaning?', answers: ['CSS', 'HTML', 'HTTP', 'JSON'], correct: 1, good: 'Correct. HTML is the document structure; CSS presents it.', try: 'HTML is the structural language. CSS controls presentation.' },
      { q: 'What is the best first move when debugging a small page?', answers: ['Change everything at once', 'Ignore the console', 'Isolate one issue and observe the result', 'Delete the body'], correct: 2, good: 'Exactly. Small, observable changes make debugging a learnable loop.', try: 'Debugging works best when you isolate one issue, change one thing, and check the result.' },
      { q: 'Which CSS property aligns inline text?', answers: ['font-weight', 'text-align', 'text-decoration', 'background-size'], correct: 1, good: 'Yes. text-align controls horizontal alignment of text inside its box.', try: 'text-align handles text alignment; font-weight changes thickness.' }
    ]
  },
  {
    number: 'MODULE 02', title: 'CSS Styling — Text, Background & Box Properties', subtitle: 'Make every surface intentional.',
    summary: 'CSS styles boxes, not just words. This module connects backgrounds, dimensions, borders, padding, viewport units, selectors, and reusable class names so a page can feel coherent at every size.',
    concepts: [
      ['Backgrounds', 'background-color creates a base tone; background-image adds artwork or texture; background-size controls how that image fits, with cover filling the box and contain preserving the full image.'],
      ['The box model', 'Every element is content inside padding, surrounded by border, followed by margin outside. Width and height describe the content box by default, so box-sizing: border-box is often easier to reason about.'],
      ['Borders + spacing', 'Border width, style, colour, and radius shape the edge. Padding creates breathing room inside; margin separates neighbouring boxes. Keep the rhythm deliberate rather than adding random gaps.'],
      ['Viewport + rulesets', 'vw and vh relate sizes to the browser viewport. A ruleset combines a selector with declarations. Classes let one design rule serve many elements, while Bootstrap provides predefined utility and component styles.']
    ],
    code: '.card {\n  width: min(90vw, 28rem);\n  padding: 1.5rem;\n  border: 2px solid #27c7ee;\n  border-radius: 1rem;\n  background-size: cover;\n}',
    lab: 'Course lab connection: take the portfolio from Module 1 and give it a styled hero card with a background, readable type scale, border, padding, and responsive viewport width.',
    questions: [
      { q: 'Which box-model area creates space inside an element’s border?', answers: ['Margin', 'Padding', 'Outline', 'Viewport'], correct: 1, good: 'Right. Padding is the inner breathing room between content and border.', try: 'Padding is inside the border. Margin is outside the element.' },
      { q: 'What does background-size: cover usually do?', answers: ['Removes the image', 'Fills the box while preserving the image ratio', 'Adds a border', 'Changes font size'], correct: 1, good: 'Yes. cover fills the box and may crop edges to preserve the image ratio.', try: 'background-size: cover fills the background box while preserving the image ratio.' },
      { q: 'Why use a class name in CSS?', answers: ['To reuse a style rule', 'To create a server', 'To replace HTML', 'To disable the viewport'], correct: 0, good: 'Exactly. A class is a reusable hook for styling multiple elements.', try: 'Classes make a styling rule reusable across matching elements.' }
    ]
  },
  {
    number: 'MODULE 03', title: 'Building Layouts with Flexbox & Bootstrap', subtitle: 'Arrange content with intention.',
    summary: 'Layout becomes a system: a Flexbox container sets a direction, justify-content distributes free space, Bootstrap utilities provide quick responsive patterns, and HTML attributes connect actions to destinations.',
    concepts: [
      ['Flexbox container', 'display: flex turns a parent into a layout container. flex-direction chooses a row or column; justify-content distributes items on the main axis; align-items handles the cross axis.'],
      ['Images + void elements', 'An image uses src to point to a resource and alt to describe it. img is a void element: it has no closing tag. Give it display and max-width rules so it behaves inside the layout.'],
      ['Bootstrap utilities', 'Bootstrap offers component classes and small utilities for display, spacing, alignment, colours, and responsive layouts. Use a utility when it expresses intent clearly; do not hide structure behind class soup.'],
      ['Attributes + links', 'id identifies one element; onclick can trigger an action; href provides a destination; target controls where a link opens. Ordered and unordered lists, anchors, and horizontal rules add structure and navigation.']
    ],
    code: '<div class="d-flex justify-content-between align-items-center">\n  <img src="avatar.jpg" alt="Student portrait">\n  <a href="projects.html" target="_self">Projects</a>\n</div>',
    lab: 'Course lab connection: turn a portfolio into a responsive product landing page using a Flexbox hero, a feature list, a Bootstrap-style utility row, and meaningful links.',
    questions: [
      { q: 'Which declaration creates a Flexbox container?', answers: ['position: flex', 'display: flex', 'flex: container', 'layout: row'], correct: 1, good: 'Correct. display: flex establishes the Flexbox formatting context.', try: 'The parent becomes a Flexbox container with display: flex.' },
      { q: 'Which attribute tells an image where its file lives?', answers: ['href', 'target', 'src', 'onclick'], correct: 2, good: 'Yes. src points the img element to its source resource.', try: 'src is the image source; alt provides its description.' },
      { q: 'What is href used for?', answers: ['A link destination', 'A font weight', 'A list marker', 'A border radius'], correct: 0, good: 'Exactly. href describes where an anchor link should go.', try: 'href provides the destination for an anchor link.' }
    ]
  },
  {
    number: 'MODULE 04', title: 'HTML5 Multimedia', subtitle: 'Let the page speak, move, and mean something.',
    summary: 'HTML5 makes media part of the document rather than an afterthought. Audio and video provide native playback; semantic elements explain the page’s regions so people, browsers, and assistive technologies can navigate it.',
    concepts: [
      ['Media elements', 'audio and video embed playable content. Add controls so the user has agency, provide a source when needed, and include fallback text for browsers that cannot play the format.'],
      ['Accessible media', 'Give images useful alt text, captions or transcripts where appropriate, and avoid autoplay with sound. A multimedia page should remain understandable when media is paused or unavailable.'],
      ['Semantic regions', 'header introduces a page or section; nav contains major navigation; article is a self-contained composition; section groups a thematic part; footer closes a page or section.'],
      ['Links + rules', 'Anchor links connect media pages and resources. Horizontal rules can signal a thematic shift, but structure should come from headings and semantic regions rather than decoration alone.']
    ],
    code: '<article>\n  <header><h2>Lesson playlist</h2></header>\n  <video controls aria-label="HTML5 lesson video">\n    <source src="lesson.mp4" type="video/mp4">\n  </video>\n  <footer><a href="notes.html">Read the notes</a></footer>\n</article>',
    lab: 'Course lab connection: build a Music & Video Gallery with audio, video, meaningful captions or labels, navigation, and semantic page regions.',
    questions: [
      { q: 'Which attribute gives a video visible playback controls?', answers: ['controls', 'target', 'radius', 'rel'], correct: 0, good: 'Correct. controls gives the user native playback controls.', try: 'The controls attribute exposes the browser’s playback controls.' },
      { q: 'Which element represents a self-contained composition?', answers: ['<article>', '<span>', '<hr>', '<br>'], correct: 0, good: 'Yes. article is intended for a self-contained composition.', try: 'article represents a self-contained piece such as a post, story, or gallery item.' },
      { q: 'What belongs inside a nav element?', answers: ['Primary navigation links', 'Only background images', 'A CSS ruleset', 'A video codec'], correct: 0, good: 'Exactly. nav gives a set of major navigation links semantic meaning.', try: 'nav should contain the page’s significant navigation links.' }
    ]
  }
];

const STORAGE_KEY = 'classquest-save-v1';
const freshState = () => ({ active: 0, completed: new Set(), xp: 0, quizIndex: 0, quizScore: 0, answered: false, moduleIndex: 0, moduleQuestion: 0, moduleScore: 0, moduleAnswered: false });
function loadState() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
    return saved ? { ...freshState(), ...saved, completed: new Set(saved.completed || []) } : freshState();
  } catch { return freshState(); }
}
function persistState() {
  try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, completed: [...state.completed] })); } catch { /* private browsing can reject storage */ }
}

let state = loadState();
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function scrollToTarget(target, block = 'start') { target.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block }); }

function showToast(message) {
  const toast = $('#toast'); toast.textContent = message; toast.classList.add('is-visible');
  window.clearTimeout(showToast.timer); showToast.timer = window.setTimeout(() => toast.classList.remove('is-visible'), 2600);
}

function updateTribute() {
  const unlocked = state.completed.size === checkpoints.length;
  $('#tribute-title').innerHTML = unlocked ? 'For the teacher<br /><em>who made it click.</em>' : 'A final note<br /><em>is waiting.</em>';
  $('#tributeMessage').textContent = unlocked
    ? 'Every tag I remember is a small way of saying: I was there. I heard the why behind the code, not just the code itself. Thank you for making every class feel worth keeping.'
    : 'Complete all eight checkpoints to unlock the tribute message — every remembered detail adds one more line.';
  $('#replayQuest').disabled = false;
  $('#replayQuest').innerHTML = unlocked ? 'Play it again <span aria-hidden="true">↗</span>' : 'Restart the quest <span aria-hidden="true">↗</span>';
  $('#replayQuest').setAttribute('aria-label', unlocked ? 'Play the full quest again' : 'Restart the quest from the beginning');
}

function updateHud() {
  const done = state.completed.size;
  $('#progressText').textContent = `${done} / 8`;
  $('#progressBar').style.width = `${(done / 8) * 100}%`;
  $('#xpValue').textContent = String(state.xp).padStart(3, '0');
  $('#xpBar').style.width = `${Math.min((state.xp / 480) * 100, 100)}%`;
  $('#levelText').textContent = `listener / level ${String(Math.floor(state.xp / 100) + 1).padStart(2, '0')}`;
  $$('.checkpoint').forEach((button, index) => {
    button.classList.toggle('is-active', index === state.active);
    button.classList.toggle('is-done', state.completed.has(index));
    button.querySelector('.checkpoint-status').textContent = state.completed.has(index) ? 'remembered' : index === state.active ? 'active now' : index < state.active ? 'revisit anytime' : 'locked by wonder';
  });
  updateTribute();
}

function renderAction(kind) {
  const el = $('#lessonAction');
  const actions = {
    structure: '<div class="tag-demo"><span class="tag-chip" data-order="1">&lt;html&gt;</span><span class="tag-chip" data-order="2">&lt;head&gt;</span><span class="tag-chip" data-order="3">&lt;body&gt;</span></div><button class="action-button" type="button" data-action="complete">wake the DOM</button><small>the order is already in your head.</small>',
    semantic: '<div class="tag-demo"><span class="tag-chip">story content</span><button class="action-button" type="button" data-action="complete">choose &lt;main&gt;</button></div>',
    hierarchy: '<div class="tag-demo"><span class="tag-chip">h1</span><span class="tag-chip">h2</span><span class="tag-chip">h3</span></div><button class="action-button" type="button" data-action="complete">make it readable</button>',
    link: '<div class="tag-demo"><span class="tag-chip">&lt;a href="?"&gt;</span></div><button class="action-button" type="button" data-action="complete">add a meaningful href</button>',
    form: '<div class="tag-demo"><span class="tag-chip">&lt;button type="?"&gt;</span></div><button class="action-button" type="button" data-action="complete">set type="button"</button>',
    accessibility: '<div class="tag-demo"><span class="tag-chip">&lt;img ?="..."&gt;</span></div><button class="action-button" type="button" data-action="complete">add alt text</button>',
    lab: '<div class="tag-demo"><span class="tag-chip">&lt;portfolio&gt;</span></div><button class="action-button" type="button" data-action="complete">build the skeleton</button>',
    reveal: '<div class="tag-demo"><span class="tag-chip">&lt;thank-you&gt;</span></div><button class="action-button" type="button" data-action="complete">collect the spark</button>'
  };
  el.innerHTML = actions[kind];
  el.querySelector('[data-action]').addEventListener('click', () => completeCheckpoint(state.active));
}

function renderLesson(index) {
  state.active = index; persistState();
  const item = checkpoints[index];
  $('#activeIndex').textContent = String(index + 1).padStart(2, '0');
  $('#lessonStamp').textContent = item.stamp;
  $('#lessonKicker').textContent = item.kicker;
  $('#lessonXp').textContent = `+${item.xp} XP`;
  $('#lesson-title').textContent = item.title;
  $('#lessonSummary').textContent = item.summary;
  $('#lessonMemory p').textContent = item.memory;
  $('#asideCopy').textContent = item.aside;
  $('#lessonFootnote').textContent = item.footnote;
  $('#nextCheckpoint').innerHTML = index === checkpoints.length - 1 ? 'See the reveal <span aria-hidden="true">→</span>' : 'Next checkpoint <span aria-hidden="true">→</span>';
  renderAction(item.action);
  const actionButton = $('#lessonAction [data-action]');
  if (state.completed.has(index)) {
    actionButton.textContent = 'remembered ✓'; actionButton.classList.add('is-complete'); actionButton.disabled = true;
    $('#lessonFootnote').textContent = 'This lesson is in your save file. Revisit it whenever you like.';
  }
  updateHud();
}

function completeCheckpoint(index) {
  if (!state.completed.has(index)) {
    state.completed.add(index); state.xp += checkpoints[index].xp;
    showToast(`Checkpoint ${String(index + 1).padStart(2, '0')} remembered · +${checkpoints[index].xp} XP`);
  }
  persistState(); renderLesson(index); updateHud();
  if (index === checkpoints.length - 1 && state.completed.size === checkpoints.length) {
    showToast('Final unlock complete · your thank-you note is ready');
    window.setTimeout(() => scrollToTarget($('#tribute')), 180);
  }
}

function renderQuiz() {
  const item = quizzes[state.quizIndex];
  $('#quizNumber').textContent = String(state.quizIndex + 1).padStart(2, '0');
  $('#quizQuestion').textContent = item.q;
  $('#quizScore').textContent = `${state.quizScore} correct`;
  $('#quizFeedback').textContent = '';
  $('#quizFeedback').className = 'quiz-feedback';
  $('#quizNext').disabled = true;
  $('#quizNext').innerHTML = state.quizIndex === quizzes.length - 1 ? 'Keep the lesson <span aria-hidden="true">✦</span>' : 'Next question <span aria-hidden="true">→</span>';
  state.answered = false;
  $('#answerGrid').innerHTML = item.answers.map((answer, index) => {
    const visibleAnswer = answer.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
    return `<button class="answer-button" data-answer="${index}" type="button">${visibleAnswer}</button>`;
  }).join('');
  $$('#answerGrid .answer-button').forEach(button => button.addEventListener('click', () => chooseAnswer(Number(button.dataset.answer))));
}

function chooseAnswer(index) {
  if (state.answered) return;
  const item = quizzes[state.quizIndex];
  const buttons = $$('#answerGrid .answer-button');
  const feedback = $('#quizFeedback');
  if (index === item.correct) {
    state.answered = true;
    buttons.forEach(button => { button.disabled = true; if (Number(button.dataset.answer) === item.correct) button.classList.add('correct'); });
    state.quizScore += 1; feedback.textContent = item.good; feedback.className = 'quiz-feedback good'; showToast('Nice recall · the teacher would approve');
    $('#quizNext').disabled = false;
  } else {
    buttons[index].classList.add('wrong'); buttons[index].disabled = true;
    feedback.textContent = `${item.try} Try another choice.`; feedback.className = 'quiz-feedback try';
  }
  $('#quizScore').textContent = `${state.quizScore} correct`;
  persistState();
}

function escapeHTML(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function renderModule(index, resetQuestion = true) {
  state.moduleIndex = index; if (resetQuestion) state.moduleQuestion = 0; state.moduleAnswered = false; persistState();
  const module = modules[index];
  $$('.module-tab').forEach((tab, tabIndex) => {
    const active = tabIndex === index;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-selected', String(active));
  });
  $('#moduleLearning').innerHTML = `<div class="module-card-head"><div><span class="module-number">${module.number}</span><h3>${module.title}</h3><p class="module-subtitle">${module.subtitle}</p></div><span class="module-pill">course profile / ${index + 1} of 4</span></div><p class="module-summary">${module.summary}</p><div class="module-detail-grid">${module.concepts.map(([term, detail]) => `<div class="module-detail"><h4>${escapeHTML(term)}</h4><p>${escapeHTML(detail)}</p></div>`).join('')}</div><div class="module-example"><div><span class="module-label">remember this pattern</span><p>${module.lab}</p></div><pre><code>${escapeHTML(module.code)}</code></pre></div>`;
  renderModuleQuiz();
}

function renderModuleQuiz() {
  const module = modules[state.moduleIndex];
  const question = module.questions[state.moduleQuestion];
  $('#moduleQuizLabel').textContent = `${module.number} / 03 QUESTIONS`;
  $('#moduleQuizProgress').textContent = `${String(state.moduleQuestion + 1).padStart(2, '0')} / 03`;
  $('#moduleQuizQuestion').textContent = question.q;
  $('#moduleQuizScore').textContent = `${state.moduleScore} / 12`;
  $('#moduleQuizFeedback').textContent = '';
  $('#moduleQuizFeedback').className = 'module-quiz-feedback';
  $('#moduleQuizNext').disabled = true;
  $('#moduleQuizNext').innerHTML = state.moduleQuestion === module.questions.length - 1 && state.moduleIndex === modules.length - 1 ? 'Module quizzes complete <span aria-hidden="true">✦</span>' : 'Next module question <span aria-hidden="true">→</span>';
  $('#moduleAnswerGrid').innerHTML = question.answers.map((answer, answerIndex) => `<button class="module-answer" type="button" data-module-answer="${answerIndex}">${escapeHTML(answer)}</button>`).join('');
}

function chooseModuleAnswer(index) {
  if (state.moduleAnswered) return;
  const question = modules[state.moduleIndex].questions[state.moduleQuestion];
  const buttons = $$('#moduleAnswerGrid .module-answer');
  const feedback = $('#moduleQuizFeedback');
  if (index === question.correct) {
    state.moduleAnswered = true; state.moduleScore += 1;
    buttons.forEach(button => { button.disabled = true; if (Number(button.dataset.moduleAnswer) === question.correct) button.classList.add('correct'); });
    feedback.textContent = question.good; feedback.className = 'module-quiz-feedback good';
    $('#moduleQuizNext').disabled = false; showToast(`Module ${state.moduleIndex + 1} recall confirmed`);
  } else {
    buttons[index].classList.add('wrong'); buttons[index].disabled = true;
    feedback.textContent = `${question.try} Try another option.`; feedback.className = 'module-quiz-feedback try';
  }
  $('#moduleQuizScore').textContent = `${state.moduleScore} / 12`; persistState();
}

function nextModuleQuestion() {
  const module = modules[state.moduleIndex];
  if (!state.moduleAnswered) return;
  if (state.moduleQuestion < module.questions.length - 1) state.moduleQuestion += 1;
  else if (state.moduleIndex < modules.length - 1) { state.moduleIndex += 1; state.moduleQuestion = 0; }
  else { showToast('All four module quizzes complete · excellent listening'); scrollToTarget($('#modules')); return; }
  state.moduleAnswered = false; persistState(); renderModule(state.moduleIndex, false);
}

function resetQuest() {
  try { sessionStorage.removeItem(STORAGE_KEY); } catch { /* ignore storage errors */ }
  state = freshState(); renderLesson(0); renderQuiz(); renderModule(0); updateHud(); window.scrollTo({ top: 0, behavior: reducedMotion() ? 'auto' : 'smooth' }); showToast('Fresh page, same wonderful teacher.');
}

$('#beginQuest').addEventListener('click', () => scrollToTarget($('#quest')));
$('#skipIntro').addEventListener('click', () => scrollToTarget($('#quest')));
$('#restartTop').addEventListener('click', resetQuest);
$('#replayQuest').addEventListener('click', resetQuest);
$('#nextCheckpoint').addEventListener('click', () => {
  if (!state.completed.has(state.active)) { completeCheckpoint(state.active); return; }
  if (state.active === checkpoints.length - 1) { scrollToTarget($('#tribute')); return; }
  const next = Math.min(state.active + 1, checkpoints.length - 1);
  renderLesson(next); scrollToTarget($('#lesson'));
});
$$('.checkpoint').forEach(button => button.addEventListener('click', () => { renderLesson(Number(button.dataset.index)); scrollToTarget($('#lesson')); }));
$('#quizNext').addEventListener('click', () => { if (state.quizIndex < quizzes.length - 1) { state.quizIndex += 1; persistState(); renderQuiz(); } else { scrollToTarget($('#tribute')); showToast('Quiz complete · the final message is waiting'); } });
document.addEventListener('click', (event) => {
  const tab = event.target.closest('.module-tab');
  if (tab) { renderModule(Number(tab.dataset.module)); scrollToTarget($('#moduleLearning')); return; }
  const answer = event.target.closest('.module-answer');
  if (answer) chooseModuleAnswer(Number(answer.dataset.moduleAnswer));
});
$('#moduleQuizNext').addEventListener('click', nextModuleQuestion);

renderLesson(state.active); renderQuiz(); renderModule(state.moduleIndex); updateHud();
