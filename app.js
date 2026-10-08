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

const STORAGE_KEY = 'classquest-save-v1';
const freshState = () => ({ active: 0, completed: new Set(), xp: 0, quizIndex: 0, quizScore: 0, answered: false });
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
  $('#replayQuest').disabled = !unlocked;
  $('#replayQuest').setAttribute('aria-label', unlocked ? 'Play the full quest again' : 'Finish the quest before replaying it');
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
  $('#answerGrid').innerHTML = item.answers.map((answer, index) => `<button class="answer-button" data-answer="${index}" type="button">${answer}</button>`).join('');
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

function resetQuest() {
  try { sessionStorage.removeItem(STORAGE_KEY); } catch { /* ignore storage errors */ }
  state = freshState(); renderLesson(0); renderQuiz(); updateHud(); window.scrollTo({ top: 0, behavior: reducedMotion() ? 'auto' : 'smooth' }); showToast('Fresh page, same wonderful teacher.');
}

$('#beginQuest').addEventListener('click', () => scrollToTarget($('#quest')));
$('#skipIntro').addEventListener('click', () => scrollToTarget($('#quest')));
$('#restartTop').addEventListener('click', resetQuest);
$('#replayQuest').addEventListener('click', resetQuest);
$('#nextCheckpoint').addEventListener('click', () => {
  if (!state.completed.has(state.active)) { completeCheckpoint(state.active); return; }
  const next = Math.min(state.active + 1, checkpoints.length - 1);
  renderLesson(next); scrollToTarget($('#lesson'));
});
$$('.checkpoint').forEach(button => button.addEventListener('click', () => { renderLesson(Number(button.dataset.index)); scrollToTarget($('#lesson')); }));
$('#quizNext').addEventListener('click', () => { if (state.quizIndex < quizzes.length - 1) { state.quizIndex += 1; persistState(); renderQuiz(); } else { scrollToTarget($('#tribute')); showToast('Quiz complete · the final message is waiting'); } });

renderLesson(state.active); renderQuiz(); updateHud();
