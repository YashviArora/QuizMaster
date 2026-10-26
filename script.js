/**
 * QuizMaster Neo - Stable Evaluation-II Build
 */

const MASTER_QUESTIONS = [
  {
    category: "HTML & CSS",
    difficulty: "Easy",
    question: "Which CSS layout module is primarily built for one-dimensional layouts?",
    options: ["CSS Grid", "Flexbox", "Float positioning", "Table layout"],
    answer: "Flexbox"
  },
  {
    category: "HTML & CSS",
    difficulty: "Medium",
    question: "What does the 'rem' CSS unit calculate relative to?",
    options: [
      "Parent element font-size",
      "Root (<html>) font-size",
      "Viewport width",
      "Screen DPI"
    ],
    answer: "Root (<html>) font-size"
  },
  {
    category: "HTML & CSS",
    difficulty: "Hard",
    question: "Which CSS property enables hardware acceleration for smoother CSS transitions?",
    options: ["will-change", "transform-style", "backface-visibility", "z-index"],
    answer: "will-change"
  },
  {
    category: "HTML & CSS",
    difficulty: "Easy",
    question: "Which HTML5 semantic element is most suitable for standalone, distributable content?",
    options: ["<article>", "<div>", "<section>", "<aside>"],
    answer: "<article>"
  },
  {
    category: "JavaScript ES6+",
    difficulty: "Easy",
    question: "Which ES6 keyword declares a block-scoped variable that cannot be reassigned?",
    options: ["var", "let", "const", "static"],
    answer: "const"
  },
  {
    category: "JavaScript ES6+",
    difficulty: "Medium",
    question: "What is the evaluated output of '[...new Set([1, 2, 2, 3, 3, 4])]'?",
    options: ["[1, 2, 3, 4]", "[1, 2, 2, 3, 3, 4]", "Set(4)", "undefined"],
    answer: "[1, 2, 3, 4]"
  },
  {
    category: "JavaScript ES6+",
    difficulty: "Hard",
    question: "Which JavaScript method creates a deep copy of a serializable object natively?",
    options: ["structuredClone()", "Object.assign()", "JSON.duplicate()", "Array.from()"],
    answer: "structuredClone()"
  },
  {
    category: "JavaScript ES6+",
    difficulty: "Easy",
    question: "Which browser storage persists key-value data across browser restarts without expiry?",
    options: ["localStorage", "sessionStorage", "IndexedDB only", "Cookies only"],
    answer: "localStorage"
  },
  {
    category: "JavaScript ES6+",
    difficulty: "Medium",
    question: "What does the spread operator '...' do when used in array literals?",
    options: ["Expands elements into individual items", "Collapses array", "Reverses array", "Filters duplicates"],
    answer: "Expands elements into individual items"
  },
  {
    category: "React & State",
    difficulty: "Easy",
    question: "What does JSX stand for in the React ecosystem?",
    options: ["JavaScript XML", "JSON Style Extension", "Java Syntax X", "JavaScript Xerox"],
    answer: "JavaScript XML"
  },
  {
    category: "React & State",
    difficulty: "Medium",
    question: "Which React hook is designed specifically to perform side effects like fetching data?",
    options: ["useState", "useMemo", "useEffect", "useCallback"],
    answer: "useEffect"
  },
  {
    category: "React & State",
    difficulty: "Hard",
    question: "What happens when you pass an empty dependency array '[]' to useEffect?",
    options: [
      "Runs on every state update",
      "Runs only once when the component mounts",
      "Never executes",
      "Causes infinite re-renders"
    ],
    answer: "Runs only once when the component mounts"
  },
  {
    category: "React & State",
    difficulty: "Medium",
    question: "Which built-in React API helps prevent prop drilling across deeply nested components?",
    options: ["Context API", "CSS Variables", "SessionStorage", "useRef"],
    answer: "Context API"
  },
  {
    category: "React & State",
    difficulty: "Easy",
    question: "In React, what are props used for?",
    options: ["Passing data from parent to child", "Modifying global state directly", "Styling CSS", "Binding browser storage"],
    answer: "Passing data from parent to child"
  },
  {
    category: "Web APIs & Async",
    difficulty: "Easy",
    question: "Which function is standard in modern JavaScript for making HTTP network calls?",
    options: ["fetch()", "httpRequest()", "ajaxCall()", "loadUrl()"],
    answer: "fetch()"
  },
  {
    category: "Web APIs & Async",
    difficulty: "Medium",
    question: "What does the browser 'fetch()' API return upon invocation?",
    options: ["A parsed JSON object", "A Promise resolving to a Response object", "A DOM Node", "An XMLHttpRequest instance"],
    answer: "A Promise resolving to a Response object"
  },
  {
    category: "Web APIs & Async",
    difficulty: "Hard",
    question: "How are runtime network exceptions caught when executing asynchronous 'await fetch()' calls?",
    options: ["Using a try...catch block", "catchPromise() helper", "throwIfError listener", "fallback() method"],
    answer: "Using a try...catch block"
  },
  {
    category: "Web APIs & Async",
    difficulty: "Medium",
    question: "Which HTTP status code signifies a successfully created resource from a POST request?",
    options: ["200 OK", "201 Created", "204 No Content", "304 Modified"],
    answer: "201 Created"
  }
];

class SoundFX {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }

  playCorrect() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.type = "sine";
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.18);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) {}
  }

  playWrong() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.type = "sawtooth";
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.setValueAtTime(164.81, now + 0.12);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
    } catch (e) {}
  }

  playTick() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.type = "triangle";
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(800, now);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.start(now);
      osc.stop(now + 0.04);
    } catch (e) {}
  }
}

class ConfettiEngine {
  constructor(canvas) {
    this.canvas = canvas;
    if (!this.canvas) return;
    this.ctx = canvas.getContext("2d");
    this.particles = [];
    this.animationId = null;
    this.resize();
    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  fire() {
    if (!this.canvas || !this.ctx) return;
    this.particles = [];
    const colors = ["#6366f1", "#ec4899", "#06b6d4", "#f59e0b", "#10b981", "#8b5cf6"];
    for (let i = 0; i < 80; i++) {
      this.particles.push({
        x: this.canvas.width / 2,
        y: this.canvas.height / 2,
        r: Math.random() * 6 + 4,
        dx: (Math.random() - 0.5) * 16,
        dy: (Math.random() - 0.7) * 18,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.random() * 10,
        tiltAngle: 0,
        tiltAngleInc: Math.random() * 0.1 + 0.05
      });
    }

    if (this.animationId) cancelAnimationFrame(this.animationId);
    this.render();
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let alive = false;

    this.particles.forEach((p) => {
      p.x += p.dx;
      p.y += p.dy;
      p.dy += 0.35;
      p.tiltAngle += p.tiltAngleInc;
      p.tilt = Math.sin(p.tiltAngle) * 12;

      if (p.y < this.canvas.height) {
        alive = true;
        this.ctx.beginPath();
        this.ctx.fillStyle = p.color;
        this.ctx.ellipse(p.x, p.y, p.r, p.r / 2, p.tilt, 0, Math.PI * 2);
        this.ctx.fill();
      }
    });

    if (alive) {
      this.animationId = requestAnimationFrame(() => this.render());
    } else {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

class QuizApp {
  constructor() {
    this.TARGET_COUNT = 10;
    this.allQuestions = this.loadQuestions();
    this.activeRound = [];
    this.userAnswers = [];

    this.currentIndex = 0;
    this.score = 0;
    this.timeLeft = 15;
    this.timerInterval = null;
    this.isAnswered = false;

    this.sfx = new SoundFX();
    this.confetti = new ConfettiEngine(document.getElementById("confettiCanvas"));

    this.cacheDOM();
    this.init();
  }

  cacheDOM() {
    this.dom = {
      startScreen: document.getElementById("startScreen"),
      quizScreen: document.getElementById("quizScreen"),
      resultScreen: document.getElementById("resultScreen"),

      categoryFilter: document.getElementById("categoryFilter"),
      difficultyFilter: document.getElementById("difficultyFilter"),

      startBtn: document.getElementById("startBtn"),
      fetchApiBtn: document.getElementById("fetchApiBtn"),
      apiSpinner: document.getElementById("apiSpinner"),
      nextBtn: document.getElementById("nextBtn"),
      quitBtn: document.getElementById("quitBtn"),
      restartBtn: document.getElementById("restartBtn"),
      homeBtn: document.getElementById("homeBtn"),
      clearDataBtn: document.getElementById("clearDataBtn"),
      themeBtn: document.getElementById("themeBtn"),
      soundToggleBtn: document.getElementById("soundToggleBtn"),

      questionCategoryBadge: document.getElementById("questionCategoryBadge"),
      difficultyBadge: document.getElementById("difficultyBadge"),
      questionNumber: document.getElementById("questionNumber"),
      questionText: document.getElementById("questionText"),
      optionsContainer: document.getElementById("options"),
      timerRing: document.getElementById("timerRing"),
      timerText: document.getElementById("timerText"),
      progressBar: document.getElementById("progressBar"),

      scoreText: document.getElementById("score"),
      percentageText: document.getElementById("percentage"),
      correctCount: document.getElementById("correctCount"),
      wrongCount: document.getElementById("wrongCount"),
      accuracyRate: document.getElementById("accuracyRate"),
      bestScore: document.getElementById("bestScore"),
      resultMessage: document.getElementById("resultMessage"),
      resultIcon: document.getElementById("resultIcon"),
      reviewContainer: document.getElementById("reviewContainer"),
      historyList: document.getElementById("historyList"),

      customModal: document.getElementById("customModal"),
      openModalBtn: document.getElementById("openModalBtn"),
      closeModalBtn: document.getElementById("closeModalBtn"),
      cancelModalBtn: document.getElementById("cancelModalBtn"),
      addQuestionForm: document.getElementById("addQuestionForm"),
      toastContainer: document.getElementById("toastContainer")
    };
  }

  init() {
    this.bindEvents();
    this.loadTheme();
    this.renderHistory();
  }

  loadQuestions() {
    const saved = localStorage.getItem("quizmaster_custom_questions");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return [...MASTER_QUESTIONS, ...parsed];
      } catch (e) {
        console.error(e);
      }
    }
    return [...MASTER_QUESTIONS];
  }

  bindEvents() {
    if (this.dom.startBtn) {
      this.dom.startBtn.addEventListener("click", () => this.startQuiz());
    }
    if (this.dom.nextBtn) {
      this.dom.nextBtn.addEventListener("click", () => this.nextQuestion());
    }
    if (this.dom.quitBtn) {
      this.dom.quitBtn.addEventListener("click", () => this.returnToHome());
    }
    if (this.dom.restartBtn) {
      this.dom.restartBtn.addEventListener("click", () => this.startQuiz());
    }
    if (this.dom.homeBtn) {
      this.dom.homeBtn.addEventListener("click", () => this.returnToHome());
    }
    if (this.dom.clearDataBtn) {
      this.dom.clearDataBtn.addEventListener("click", () => this.clearStorageData());
    }
    if (this.dom.themeBtn) {
      this.dom.themeBtn.addEventListener("click", () => this.toggleTheme());
    }
    if (this.dom.soundToggleBtn) {
      this.dom.soundToggleBtn.addEventListener("click", () => this.toggleSound());
    }
    if (this.dom.fetchApiBtn) {
      this.dom.fetchApiBtn.addEventListener("click", () => this.fetchTriviaQuestions());
    }

    if (this.dom.openModalBtn) {
      this.dom.openModalBtn.addEventListener("click", () => this.toggleModal(true));
    }
    if (this.dom.closeModalBtn) {
      this.dom.closeModalBtn.addEventListener("click", () => this.toggleModal(false));
    }
    if (this.dom.cancelModalBtn) {
      this.dom.cancelModalBtn.addEventListener("click", () => this.toggleModal(false));
    }
    if (this.dom.addQuestionForm) {
      this.dom.addQuestionForm.addEventListener("submit", (e) => this.handleCustomQuestionSubmit(e));
    }
  }

  prepareQuestions() {
    const cat = this.dom.categoryFilter ? this.dom.categoryFilter.value : "All";
    const diff = this.dom.difficultyFilter ? this.dom.difficultyFilter.value : "All";

    // Matching questions
    let filtered = this.allQuestions.filter((q) => {
      const matchCat = (cat === "All") || (q.category === cat);
      const matchDiff = (diff === "All") || (q.difficulty.toLowerCase() === diff.toLowerCase());
      return matchCat && matchDiff;
    });

    // Shuffle matched
    let round = [...filtered].sort(() => Math.random() - 0.5);

    // Agar 10 se kam questions mile, to pool ke baaki questions se safe fill karein taaki crash na ho
    if (round.length < this.TARGET_COUNT) {
      const remaining = this.allQuestions
        .filter((q) => !round.some(existing => existing.question === q.question))
        .sort(() => Math.random() - 0.5);

      round = [...round, ...remaining];
    }

    // Limit to 10
    return round.slice(0, this.TARGET_COUNT);
  }

  startQuiz() {
    this.activeRound = this.prepareQuestions();
    this.userAnswers = [];
    this.currentIndex = 0;
    this.score = 0;

    if (!this.activeRound || this.activeRound.length === 0) {
      this.showToast("No questions available! Please reset filters.", "error");
      return;
    }

    this.dom.startScreen.classList.add("hidden");
    this.dom.resultScreen.classList.add("hidden");
    this.dom.quizScreen.classList.remove("hidden");

    this.renderQuestion();
  }

  renderQuestion() {
    clearInterval(this.timerInterval);
    this.isAnswered = false;
    this.dom.nextBtn.disabled = true;

    const current = this.activeRound[this.currentIndex];
    const totalCount = this.activeRound.length;

    this.dom.questionCategoryBadge.textContent = current.category || "General";
    this.dom.difficultyBadge.textContent = current.difficulty || "Standard";
    this.dom.questionNumber.textContent = `Question ${this.currentIndex + 1} of ${totalCount}`;
    this.dom.questionText.textContent = current.question;

    const progress = ((this.currentIndex + 1) / totalCount) * 100;
    this.dom.progressBar.style.width = `${progress}%`;

    this.dom.optionsContainer.innerHTML = "";
    const shuffledOpts = [...current.options].sort(() => Math.random() - 0.5);

    shuffledOpts.forEach((optText) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.type = "button";
      btn.textContent = optText;

      btn.addEventListener("click", () => this.handleOptionSelection(btn, optText));
      this.dom.optionsContainer.appendChild(btn);
    });

    this.startCircularTimer();
  }

  startCircularTimer() {
    this.timeLeft = 15;
    const totalTime = 15;
    const circumference = 2 * Math.PI * 18;

    this.dom.timerText.textContent = `${this.timeLeft}`;
    this.dom.timerRing.style.strokeDashoffset = "0";
    this.dom.timerRing.style.stroke = "var(--primary)";

    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      this.dom.timerText.textContent = `${this.timeLeft}`;

      const offset = circumference - (this.timeLeft / totalTime) * circumference;
      this.dom.timerRing.style.strokeDashoffset = `${offset}`;

      if (this.timeLeft <= 3 && this.timeLeft > 0) {
        this.sfx.playTick();
        this.dom.timerRing.style.stroke = "var(--wrong)";
      }

      if (this.timeLeft <= 0) {
        clearInterval(this.timerInterval);
        this.sfx.playWrong();
        this.recordUserAnswer(null);
        this.highlightCorrectAnswer();
        this.dom.nextBtn.disabled = false;
        this.showToast("Time up!", "error");
      }
    }, 1000);
  }

  handleOptionSelection(selectedBtn, selectedText) {
    if (this.isAnswered) return;

    this.isAnswered = true;
    clearInterval(this.timerInterval);

    const current = this.activeRound[this.currentIndex];
    const isCorrect = selectedText === current.answer;

    this.recordUserAnswer(selectedText);

    if (isCorrect) {
      selectedBtn.classList.add("correct");
      this.score++;
      this.sfx.playCorrect();
    } else {
      selectedBtn.classList.add("wrong");
      this.sfx.playWrong();
    }

    this.highlightCorrectAnswer();
    this.dom.nextBtn.disabled = false;
  }

  recordUserAnswer(userChoice) {
    const current = this.activeRound[this.currentIndex];
    this.userAnswers.push({
      question: current.question,
      userChoice: userChoice || "Timeout / Skipped",
      correctAnswer: current.answer,
      isCorrect: userChoice === current.answer
    });
  }

  highlightCorrectAnswer() {
    const current = this.activeRound[this.currentIndex];
    const buttons = this.dom.optionsContainer.querySelectorAll(".option-btn");

    buttons.forEach((b) => {
      b.disabled = true;
      if (b.textContent === current.answer) {
        b.classList.add("correct");
      }
    });
  }

  nextQuestion() {
    this.currentIndex++;
    if (this.currentIndex < this.activeRound.length) {
      this.renderQuestion();
    } else {
      this.displayResults();
    }
  }

  displayResults() {
    clearInterval(this.timerInterval);
    this.dom.quizScreen.classList.add("hidden");
    this.dom.resultScreen.classList.remove("hidden");

    const total = this.activeRound.length;
    const percentage = Math.round((this.score / total) * 100);
    const wrong = total - this.score;

    this.dom.scoreText.textContent = `${this.score}/${total}`;
    this.dom.percentageText.textContent = `${percentage}%`;
    this.dom.correctCount.textContent = this.score;
    this.dom.wrongCount.textContent = wrong;
    this.dom.accuracyRate.textContent = `${percentage}%`;

    const oldBest = Number(localStorage.getItem("quizmaster_best_score")) || 0;
    const best = Math.max(oldBest, this.score);
    localStorage.setItem("quizmaster_best_score", best);
    this.dom.bestScore.textContent = `${best}/${total}`;

    if (percentage >= 70) {
      if (this.confetti) this.confetti.fire();
      this.dom.resultIcon.textContent = "🏆";
      this.dom.resultMessage.textContent = "Outstanding Performance! High technical proficiency verified.";
    } else if (percentage >= 50) {
      this.dom.resultIcon.textContent = "🔥";
      this.dom.resultMessage.textContent = "Good job! Keep practicing to master all concepts.";
    } else {
      this.dom.resultIcon.textContent = "💡";
      this.dom.resultMessage.textContent = "Good effort! Check your detailed answers below.";
    }

    this.saveHistory({
      score: this.score,
      total,
      percentage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    });

    this.renderReviewBreakdown();
  }

  renderReviewBreakdown() {
    const container = this.dom.reviewContainer;
    container.innerHTML = "";

    this.userAnswers.forEach((ans, idx) => {
      const item = document.createElement("div");
      item.className = `review-item ${ans.isCorrect ? "pass" : "fail"}`;
      item.innerHTML = `
        <div class="review-q-title">Q${idx + 1}: ${ans.question}</div>
        <div class="review-answers">
          <span class="user-tag ${ans.isCorrect ? "good" : "bad"}">
            Your Choice: ${ans.userChoice}
          </span>
          ${
            !ans.isCorrect
              ? `<span class="correct-tag">Correct: ${ans.correctAnswer}</span>`
              : ""
          }
        </div>
      `;
      container.appendChild(item);
    });
  }

  saveHistory(item) {
    let logs = [];
    try {
      logs = JSON.parse(localStorage.getItem("quizmaster_logs")) || [];
    } catch (e) {
      logs = [];
    }
    logs.unshift(item);
    if (logs.length > 5) logs.pop();
    localStorage.setItem("quizmaster_logs", JSON.stringify(logs));
    this.renderHistory();
  }

  renderHistory() {
    let logs = [];
    try {
      logs = JSON.parse(localStorage.getItem("quizmaster_logs")) || [];
    } catch (e) {
      logs = [];
    }

    const list = this.dom.historyList;
    list.innerHTML = "";

    if (logs.length === 0) {
      list.innerHTML = `<li class="empty-state">No recent records available.</li>`;
      return;
    }

    logs.forEach((log) => {
      const li = document.createElement("li");
      li.className = "history-item";
      li.innerHTML = `
        <span>Attempt at <strong>${log.time}</strong></span>
        <span>Score: <strong>${log.score}/${log.total}</strong> (${log.percentage}%)</span>
      `;
      list.appendChild(li);
    });
  }

  returnToHome() {
    clearInterval(this.timerInterval);
    this.dom.quizScreen.classList.add("hidden");
    this.dom.resultScreen.classList.add("hidden");
    this.dom.startScreen.classList.remove("hidden");
  }

  async fetchTriviaQuestions() {
    const { fetchApiBtn, apiSpinner } = this.dom;
    fetchApiBtn.disabled = true;
    apiSpinner.classList.remove("hidden");

    try {
      this.showToast("Fetching live tech questions from REST API...", "info");
      const res = await fetch("https://opentdb.com/api.php?amount=5&category=18&type=multiple");
      if (!res.ok) throw new Error("API request failed");
      const data = await res.json();

      if (data.results && data.results.length > 0) {
        const parser = new DOMParser();
        const incoming = data.results.map((q) => {
          const decode = (str) => parser.parseFromString(str, "text/html").body.textContent;
          const cleanCorrect = decode(q.correct_answer);
          const cleanIncorrect = q.incorrect_answers.map(decode);
          return {
            category: "Web APIs & Async",
            difficulty: q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1),
            question: decode(q.question),
            options: [...cleanIncorrect, cleanCorrect].sort(() => Math.random() - 0.5),
            answer: cleanCorrect
          };
        });

        this.allQuestions = [...incoming, ...this.allQuestions];
        this.showToast(`Imported ${incoming.length} online questions to pool!`, "success");
      }
    } catch (err) {
      console.error(err);
      this.showToast("Could not load external questions. Network offline.", "error");
    } finally {
      fetchApiBtn.disabled = false;
      apiSpinner.classList.add("hidden");
    }
  }

  handleCustomQuestionSubmit(e) {
    e.preventDefault();
    const form = this.dom.addQuestionForm;
    const prompt = document.getElementById("newQuestion").value.trim();
    const category = document.getElementById("newCategory").value;
    const difficulty = document.getElementById("newDifficulty").value;

    const opt0 = document.getElementById("opt0").value.trim();
    const opt1 = document.getElementById("opt1").value.trim();
    const opt2 = document.getElementById("opt2").value.trim();
    const opt3 = document.getElementById("opt3").value.trim();
    const selectedCorrect = Number(form.querySelector('input[name="correctOpt"]:checked').value);

    const options = [opt0, opt1, opt2, opt3];

    if (prompt.length < 8) {
      this.showToast("Question prompt must have at least 8 characters.", "error");
      return;
    }

    if (options.some((o) => o.length === 0)) {
      this.showToast("Please provide all 4 option choices.", "error");
      return;
    }

    const newQuestion = {
      category,
      difficulty,
      question: prompt,
      options,
      answer: options[selectedCorrect]
    };

    this.allQuestions.unshift(newQuestion);

    const customList = JSON.parse(localStorage.getItem("quizmaster_custom_questions")) || [];
    customList.unshift(newQuestion);
    localStorage.setItem("quizmaster_custom_questions", JSON.stringify(customList));

    form.reset();
    this.toggleModal(false);
    this.showToast("Question added successfully to pool!", "success");
  }

  toggleModal(isOpen) {
    if (isOpen) {
      this.dom.customModal.classList.remove("hidden");
    } else {
      this.dom.customModal.classList.add("hidden");
    }
  }

  toggleSound() {
    this.sfx.enabled = !this.sfx.enabled;
    this.dom.soundToggleBtn.textContent = this.sfx.enabled ? "🔊" : "🔇";
    this.showToast(this.sfx.enabled ? "Sound Effects ON" : "Sound Effects MUTED", "info");
  }

  toggleTheme() {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("quizmasterTheme", isDark ? "dark" : "light");
    this.dom.themeBtn.textContent = isDark ? "☀️" : "🌙";
  }

  loadTheme() {
    const saved = localStorage.getItem("quizmasterTheme");
    if (saved === "dark") {
      document.body.classList.add("dark");
      this.dom.themeBtn.textContent = "☀️";
    }
  }

  showToast(message, type = "info") {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.textContent = message;

    this.dom.toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3200);
  }

  clearStorageData() {
    if (confirm("Reset high score records and attempt history?")) {
      localStorage.removeItem("quizmaster_custom_questions");
      localStorage.removeItem("quizmaster_logs");
      localStorage.removeItem("quizmaster_best_score");
      this.allQuestions = [...MASTER_QUESTIONS];
      this.returnToHome();
      this.renderHistory();
      this.showToast("All stored data cleared successfully.", "info");
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new QuizApp();
});