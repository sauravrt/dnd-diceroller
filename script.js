/**
 * DnD Dice Roller - Interactive JavaScript
 * Handles dice selection, rolling, history, and sound
 */

(function() {
    'use strict';

    // DOM Elements
    const diceButtons = document.querySelectorAll('.die');
    const rollBtn = document.getElementById('roll-btn');
    const resetBtn = document.getElementById('reset-btn');
    const soundToggle = document.getElementById('sound-toggle');
    const historyList = document.getElementById('history-list');
    const clearHistoryBtn = document.getElementById('clear-history');

    // Default face values for each die type
    const DEFAULT_FACE_VALUES = {
        'd4': '4',
        'd6': '6',
        'd8': '8',
        'd10': '0',
        'd12': '12',
        'd20': '20',
        'd100': '00'
    };

    // State
    let selectedDice = new Set();
    let rollCount = 0;
    let soundEnabled = true;
    let isRolling = false;
    let audioContext = null;

    // Constants
    const ROLL_DURATION = 1500; // 1.5 seconds to match CSS animation
    const ANIMATION_STEPS = 10; // Number of number changes during roll

    /**
     * Initialize the application
     */
    function init() {
        setupEventListeners();
        updateRollButtonState();
    }

    /**
     * Set up all event listeners
     */
    function setupEventListeners() {
        // Dice selection
        diceButtons.forEach(die => {
            die.addEventListener('click', () => handleDieClick(die));
        });

        // Roll button
        rollBtn.addEventListener('click', handleRoll);

        // Reset button
        resetBtn.addEventListener('click', handleReset);

        // Sound toggle
        soundToggle.addEventListener('click', handleSoundToggle);

        // Clear history
        clearHistoryBtn.addEventListener('click', handleClearHistory);

        // Keyboard support for roll
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !rollBtn.disabled && !isRolling) {
                handleRoll();
            }
        });
    }

    /**
     * Handle die selection/deselection
     * @param {HTMLElement} die - The die button element
     */
    function handleDieClick(die) {
        if (isRolling) return;

        const dieType = die.dataset.die;

        if (selectedDice.has(dieType)) {
            selectedDice.delete(dieType);
            die.classList.remove('selected');
            die.setAttribute('aria-pressed', 'false');
        } else {
            selectedDice.add(dieType);
            die.classList.add('selected');
            die.setAttribute('aria-pressed', 'true');
        }

        updateRollButtonState();
    }

    /**
     * Update roll button disabled state based on selection
     */
    function updateRollButtonState() {
        const hasSelection = selectedDice.size > 0;
        rollBtn.disabled = !hasSelection;
        rollBtn.querySelector('.roll-btn-text').textContent =
            hasSelection ? 'Roll Dice' : 'Select Dice';
    }

    /**
     * Handle the roll action
     */
    function handleRoll() {
        if (isRolling || selectedDice.size === 0) return;

        isRolling = true;
        rollBtn.disabled = true;

        // Play sound
        playDiceSound();

        // Get selected dice elements
        const selectedDiceElements = Array.from(diceButtons).filter(
            die => selectedDice.has(die.dataset.die)
        );

        // Remove any previous result state
        diceButtons.forEach(die => die.classList.remove('result'));

        // Pre-generate final results for all dice
        const results = selectedDiceElements.map(die => {
            const dieType = die.dataset.die;
            const sides = parseInt(die.dataset.sides, 10);
            const result = rollDie(dieType, sides);
            return { die: dieType, result, element: die };
        });

        // Start rolling animation with pre-determined final values
        results.forEach(({ die, result, element }) => {
            element.classList.add('rolling');
            animateNumbers(element, die, result);
        });

        // After animation completes - just handle UI state
        setTimeout(() => {
            results.forEach(({ element }) => {
                element.classList.remove('rolling');
                element.classList.add('result');
            });

            // Add to history (results already contain die type and result)
            addToHistory(results.map(({ die, result }) => ({ die, result })));

            isRolling = false;
            updateRollButtonState();
        }, ROLL_DURATION);
    }

    /**
     * Animate random numbers on a die during roll, ending with final result
     * @param {HTMLElement} dieElement - The die button element
     * @param {string} dieType - Type of die (d4, d6, etc.)
     * @param {number} finalResult - The pre-determined final result to show
     */
    function animateNumbers(dieElement, dieType, finalResult) {
        const valueEl = dieElement.querySelector('.die-value');
        const sides = parseInt(dieElement.dataset.sides, 10);

        // Show random numbers for ANIMATION_STEPS - 1 iterations
        // Then show final result exactly at ROLL_DURATION
        const randomSteps = ANIMATION_STEPS - 1;
        const stepDuration = ROLL_DURATION / ANIMATION_STEPS;

        let step = 0;
        const interval = setInterval(() => {
            step++;
            const randomResult = rollDie(dieType, sides);
            valueEl.textContent = formatResult(dieType, randomResult);

            if (step >= randomSteps) {
                clearInterval(interval);
            }
        }, stepDuration);

        // Set the final result exactly at ROLL_DURATION
        setTimeout(() => {
            valueEl.textContent = formatResult(dieType, finalResult);
        }, ROLL_DURATION);
    }

    /**
     * Roll a single die and return the result
     * @param {string} dieType - Type of die (d4, d6, etc.)
     * @param {number} sides - Number of sides
     * @returns {number} The roll result
     */
    function rollDie(dieType, sides) {
        if (dieType === 'd10') {
            // d10 returns 0-9
            return Math.floor(Math.random() * 10);
        } else if (dieType === 'd100') {
            // d100 returns 00, 10, 20, ... 90
            return Math.floor(Math.random() * 10) * 10;
        } else {
            // Standard dice return 1 to sides
            return Math.floor(Math.random() * sides) + 1;
        }
    }

    /**
     * Format the result for display
     * @param {string} dieType - Type of die
     * @param {number} result - The roll result
     * @returns {string} Formatted result string
     */
    function formatResult(dieType, result) {
        if (dieType === 'd100') {
            return result.toString().padStart(2, '0');
        }
        return result.toString();
    }

    /**
     * Add roll results to history
     * @param {Array} results - Array of {die, result} objects
     */
    function addToHistory(results) {
        rollCount++;

        // Remove empty message if present
        const emptyMsg = historyList.querySelector('.history-empty');
        if (emptyMsg) {
            emptyMsg.remove();
        }

        // Create history entry
        const entry = document.createElement('div');
        entry.className = 'history-entry';

        // Roll number
        const rollNum = document.createElement('span');
        rollNum.className = 'history-roll-num';
        rollNum.textContent = `#${rollCount}`;
        entry.appendChild(rollNum);

        // Dice notation (e.g., "1d20 + 1d6")
        const diceNotation = document.createElement('span');
        diceNotation.className = 'history-dice';
        diceNotation.textContent = results.map(r => `1${r.die}`).join(' + ');
        entry.appendChild(diceNotation);

        // Results
        const resultsEl = document.createElement('span');
        resultsEl.className = 'history-results';
        results.forEach(r => {
            const valueSpan = document.createElement('span');
            valueSpan.className = 'history-result-value';
            valueSpan.textContent = `${r.die}: ${formatResult(r.die, r.result)}`;
            resultsEl.appendChild(valueSpan);
        });
        entry.appendChild(resultsEl);

        // Insert at top of list
        historyList.insertBefore(entry, historyList.firstChild);

        // Scroll to top to show new entry
        historyList.scrollTop = 0;
    }

    /**
     * Handle sound toggle
     */
    function handleSoundToggle() {
        soundEnabled = !soundEnabled;
        soundToggle.setAttribute('aria-pressed', soundEnabled.toString());
    }

    /**
     * Initialize audio context (must be called after user interaction)
     */
    function initAudioContext() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        return audioContext;
    }

    /**
     * Play a dice roll sound using Web Audio API
     * Creates a realistic dice tumbling sound effect
     */
    function playDiceSound() {
        if (!soundEnabled) return;

        try {
            const ctx = initAudioContext();
            const now = ctx.currentTime;
            const duration = 1.2;

            // Create multiple "click" sounds to simulate dice tumbling
            const numClicks = 8 + Math.floor(Math.random() * 4);

            for (let i = 0; i < numClicks; i++) {
                const clickTime = now + (i / numClicks) * duration * 0.8;
                const intensity = 1 - (i / numClicks) * 0.5; // Fade out over time

                // Create a short noise burst for each click
                const bufferSize = ctx.sampleRate * 0.03; // 30ms buffer
                const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
                const data = buffer.getChannelData(0);

                // Fill with noise that decays
                for (let j = 0; j < bufferSize; j++) {
                    const decay = 1 - j / bufferSize;
                    data[j] = (Math.random() * 2 - 1) * decay * decay;
                }

                const source = ctx.createBufferSource();
                source.buffer = buffer;

                // Add filtering for more realistic sound
                const filter = ctx.createBiquadFilter();
                filter.type = 'bandpass';
                filter.frequency.value = 800 + Math.random() * 400;
                filter.Q.value = 1;

                const gain = ctx.createGain();
                gain.gain.value = 0.15 * intensity * (0.7 + Math.random() * 0.3);

                source.connect(filter);
                filter.connect(gain);
                gain.connect(ctx.destination);

                source.start(clickTime);
            }

            // Add a final "settle" sound
            const settleTime = now + duration * 0.85;
            const settleBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.05, ctx.sampleRate);
            const settleData = settleBuffer.getChannelData(0);

            for (let j = 0; j < settleBuffer.length; j++) {
                const decay = 1 - j / settleBuffer.length;
                settleData[j] = (Math.random() * 2 - 1) * decay * decay * decay;
            }

            const settleSource = ctx.createBufferSource();
            settleSource.buffer = settleBuffer;

            const settleFilter = ctx.createBiquadFilter();
            settleFilter.type = 'lowpass';
            settleFilter.frequency.value = 600;

            const settleGain = ctx.createGain();
            settleGain.gain.value = 0.2;

            settleSource.connect(settleFilter);
            settleFilter.connect(settleGain);
            settleGain.connect(ctx.destination);

            settleSource.start(settleTime);
        } catch (e) {
            // Audio not supported or blocked
        }
    }

    /**
     * Handle clearing the history
     */
    function handleClearHistory() {
        historyList.innerHTML = '<p class="history-empty">No rolls yet. Select dice and roll!</p>';
        rollCount = 0;
    }

    /**
     * Handle reset - restore app to initial state
     */
    function handleReset() {
        if (isRolling) return;

        // Deselect all dice and reset their face values
        diceButtons.forEach(die => {
            const dieType = die.dataset.die;

            // Remove selection
            die.classList.remove('selected', 'result');
            die.setAttribute('aria-pressed', 'false');

            // Reset face value to default
            const valueEl = die.querySelector('.die-value');
            valueEl.textContent = DEFAULT_FACE_VALUES[dieType];
        });

        // Clear selection state
        selectedDice.clear();

        // Clear history
        handleClearHistory();

        // Update roll button state
        updateRollButtonState();
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
